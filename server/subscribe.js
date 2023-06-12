const awsIot = require('aws-iot-device-sdk');
const mqtt = require('mqtt')
const api = require('../server/api');

async function addAttendanceLog (inputObject) {
  try{
    const result = await api.post('/database/new-attendance-log', inputObject);
    console.log(result.data);

  } catch (error){
    console.log(error)
  }
}

// Configure your AWS IoT device
const device = awsIot.device({
  keyPath: 'certificates/private.pem.key',
  certPath: 'certificates/certificate.pem.crt',
  caPath: 'certificates/root-ca.pem',
  clientId: mqtt.clientId,
  host: 'asnmr6t3dbms9-ats.iot.ap-southeast-1.amazonaws.com',
  keepalive: 300
});

// Connect to AWS IoT Core
device.on('connect', () => {
  console.log('Connected to AWS IoT Core');

  const topic = 'raspi/data';

  device.subscribe(topic);

  device.on('message', (topic, payload) => {
    const message = JSON.parse(payload);
    const attendanceObject = { 
      'student-rfid': message['id'],
      'student-time-in': message['state'] == 'entered' ? message['time'] : '00:00:00',
      'student-time-out': message['state'] == 'exited' ? message['time'] : '00:00:00',
      'date': message['date'],
      'is_overriden': 0
    }

    addAttendanceLog(attendanceObject)
    console.log(message)
  })
});

// Handle connection errors
device.on('error', (error) => {
  console.error('AWS IoT Core connection error:', error);
});
