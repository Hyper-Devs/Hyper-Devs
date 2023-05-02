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
  // console.log("this is working")
  const { recipient, textMessage } = req.query

  // Send text message
  client.messages.create({
    body: textMessage,
    to: "+63"+recipient,
    from: '+16072702153'
  }).then((message) =>  console.log(message.body, "Message sent succesfully!"))
  .catch(error => console.log(error, "Message failed to send!"));
})





app.listen(8800, () => {
  console.log("Connected to backend using port 8800.");
});

module.exports=app;