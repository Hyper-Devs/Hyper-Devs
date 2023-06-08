const express = require('express');
const router = express.Router();
const twilio = require('twilio');
require("dotenv").config();

const accountSID = 'ACce43b4fdda36553a50eda2b9b2715277';
const authToken = '998814625f7567851b4edf36bcb87dd3';

const client = new twilio(accountSID, authToken);

// Twilio API
router.get('/message/:recipient_num/:status', (req, res) => {
    const recipient = req.params.recipient_num
    const status = req.params.status
    var textMessage;
    
    const showdate = new Date();
    var dt = showdate.getMonth()+'/'+showdate.getDate()+'/'+showdate.getFullYear();
    var time = showdate.getHours()+':'+showdate.getMinutes()+':'+showdate.getSeconds();
  
    // const textMessage = `Greetings! Mr./Ms. Tan, your child entered the school campus today ${dt} at ${time}\nThank you so much!\nThis is an auto-generated text message from University of the Philippines High-School`;
    const greeting = "Greetings! Mr./Ms. Tan,"
    const signature = "This is an auto-generated text message from University of the Philippines High-School"
  
    if(status == 1){
      textMessage = greeting + "your child entered\nthe school campus today " + dt + " at " + time + "\n" + " Thank you so much! \n " + signature; 
    }
    else if(status == 2){
      textMessage = "\nGreetings! Mr./Ms. Tan, your child exited\nthe school campus today " + dt + " at " + time + "\n" + " Thank you so much! \n This is an auto-generated text message from University of the Philippines High-School"
    }
    else if(status == 3){
      textMessage = "Student got permission to leave school at " + dt + ', ' + time
    }
  
    // Send text message
    client.messages.create({
      body: textMessage,
      to: "+63"+recipient,
      from: '+16072702153'
    }).then((message) => {
      console.log(message),
      res.write(message.body), 
      res.write("\nMessage sent succesfully!"),
      res.end()
    })
    .catch(error => {
      console.log(error),
      res.send("\nMessage failed to send!")});
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