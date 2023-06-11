const awsIot = require('aws-iot-device-sdk');
const mqtt = require('mqtt')

// Configure your AWS IoT device
const device = awsIot.device({
  keyPath: 'certificates/private.pem.key',
  certPath: 'certificates/certificate.pem.crt',
  caPath: 'certificates/root-ca.pem',
  clientId: mqtt.clientId,
  host: 'asnmr6t3dbms9-ats.iot.ap-southeast-1.amazonaws.com'
});

// Connect to AWS IoT Core
device.on('connect', () => {
  console.log('Connected to AWS IoT Core');

  const topic = 'raspi/data';

  device.subscribe(topic);

  device.on('message', (topic, payload) => {
    const message = JSON.parse(payload);

    console.log(message)
  })
});

// Handle connection errors
device.on('error', (error) => {
  console.error('AWS IoT Core connection error:', error);
});
