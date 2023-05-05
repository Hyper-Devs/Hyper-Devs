const express = require('express');
const cors = require('cors');
const routes = require('./routes/index.js');
const twilio = require('twilio');

const accountSID = 'ACce43b4fdda36553a50eda2b9b2715277';
const authToken = '998814625f7567851b4edf36bcb87dd3';
const client = new twilio(accountSID, authToken);

const app = express();
app.use(cors());
app.use(express.json());
app.use('', routes);



// Twilio API
app.get('/message', (req, res) => {
  const { recipient, status } = req.query
  var textMessage;
  
  const showdate = new Date();
  var dt = showdate.getMonth()+'/'+showdate.getDate()+'/'+showdate.getFullYear();
  var time = showdate.getHours()+':'+showdate.getMinutes()+':'+showdate.getSeconds();


  // Send text message
  if(status == 1){
    textMessage = "Student tapped in at " + dt +', ' + time
  }
  else if(status == 2){
    textMessage = "Student tapped out at " + dt + ', ' + time
  }
  else if(status == 3){
    textMessage = "Student got permission to leave school at " + dt + ', ' + time
  }

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
})

module.exports=app;