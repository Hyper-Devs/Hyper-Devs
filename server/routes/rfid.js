const api = require('../api.js');
const express = require('express');
const router = express.Router();

router.use(express.json())

//api to accept rfid data sent from raspberry pi
router.post('/detected-rfid', async (request, response) => {
    var studentInfo = null;
    const rfidData = request.body.rfid_data;
    //the rfid_data must also be able to distinguish whether the attendance log is an entry or exit

    // retrieval of the information of the student who tapped
    try{
        const result = await api.get(`/database/student/${rfidData}`);
        studentInfo = result.data;
    } catch (error){
        return response.json(error)
    }

    //sending of the message to the retrieved contact number
    try {
        const result = await api.post(`/messaging/twilio/message`, studentInfo)
        return response.json(result.data)
    } catch (error) {
        return response.json(error)
    }
})


router.get('rfid_data', (req,res) => {
    res.status(200).json({
        status: "success",
        data: {
            rfid_data: rfidData
        }
    })
});

module.exports = router;