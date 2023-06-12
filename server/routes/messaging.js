const express = require('express');
const router = express.Router();
const twilio = require('twilio');
require("dotenv").config();

const accountSID = 'ACa9e2d984a106551571c0f573143b8343';
const authToken = 'f6a5b76dfc306a27d48663fa57f288b6';


const client = new twilio(accountSID, authToken);

// Twilio API
router.post('/twilio/message', (request, response) => {
    const student = request.body
    const recipient = student['contact_num']
    const status = request.params.status || 1
    const mode = status == 1 ? "entered" : "exited" 
    
    const showdate = new Date();
    var dt = showdate.getMonth()+'/'+showdate.getDate()+'/'+showdate.getFullYear();
    var time = showdate.getHours()+':'+showdate.getMinutes()+':'+showdate.getSeconds();
  
    const message = `Greetings! Mr./Ms. ${student['parent_ln']}! 
                      Your student, ${student['first_name']} ${student['last_name']}, ${mode} the school campus today ${dt} at ${time}. 
                      Thank you so much!
                      
                      This is an auto-generated text message from University of the Philippines High-School`

    const otherMessage = "Student got permission to leave school at " + dt + ', ' + time;
    
    // Send text message
    client.messages.create({
      body: message,
      to: "+63"+recipient,
      from: '+13614507265'
    }).then((message) => {
      console.log(message),
      response.write(message.body), 
      response.write("Message sent succesfully!"),
      response.end()
    })
    .catch(error => {
      console.log(error),
      response.send("Message failed to send!")
    });
});
  
// Semaphor API
router.get('/send-message', async (req, res) => {
try {
    const { recipient, status } = req.query;
    const showdate = new Date();
    const dt = showdate.getMonth()+'/'+showdate.getDate()+'/'+showdate.getFullYear();
    const time = showdate.getHours()+':'+showdate.getMinutes()+':'+showdate.getSeconds();
    let textMessage;

    if (status == 1) {
    textMessage = `\nGreetings! Mr./Ms. Tan, your child entered\nthe school campus today ${dt} at ${time}\nThank you so much!\nThis is an auto-generated text message from University of the Philippines High-School`;
    } else if (status == 2) {
    textMessage = `\nGreetings! Mr./Ms. Tan, your child exited\nthe school campus today ${dt} at ${time}\nThank you so much!\nThis is an auto-generated text message from University of the Philippines High-School`;
    } else if (status == 3) {
    textMessage = `Student got permission to leave school at ${dt}, ${time}`;
    }

    const response = await axios.post('https://semaphore.co/api/v4/messages', {
    apikey: 'a359fc3428e2aff1b3377f657403a997', 
    number: recipient,
    message: textMessage,
    sendername: 'HyperDevs'
    });

    console.log(response.data);
    res.status(200).send('Message sent successfully!');
} catch (error) {
    console.error(error);
    res.status(500).send('Error sending message');
}
});
  
// engageSpark API
router.get('/send-message-spark', async (req, res) => {
try {
    const { recipient, status } = req.query;
    const showdate = new Date();
    const dt = showdate.getMonth()+'/'+showdate.getDate()+'/'+showdate.getFullYear();
    const time = showdate.getHours()+':'+showdate.getMinutes()+':'+showdate.getSeconds();
    let textMessage;

    if (status == 1) {
    textMessage = `\nGreetings! Mr./Ms. Tan, your child entered\nthe school campus today ${dt} at ${time}\nThank you so much!\nThis is an auto-generated text message from University of the Philippines High-School`;
    } else if (status == 2) {
    textMessage = `\nGreetings! Mr./Ms. Tan, your child exited\nthe school campus today ${dt} at ${time}\nThank you so much!\nThis is an auto-generated text message from University of the Philippines High-School`;
    } else if (status == 3) {
    textMessage = `Student got permission to leave school at ${dt}, ${time}`;
    }

    const response = await axios.post('ttps://api.engagespark.com/v1/sms/phonenumber', {
    apikey: 'a359fc3428e2aff1b3377f657403a997', 
    number: recipient,
    message: textMessage,
    sendername: 'HyperDevs'
    });

    console.log(response.data);
    res.status(200).send('Message sent successfully!');
} catch (error) {
    console.error(error);
    res.status(500).send('Error sending message');
}
});

module.exports = router;