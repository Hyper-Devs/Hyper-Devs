const express = require('express');
const router = express.Router();
const api = require('../api.js');

router.use(express.json())

//api to accept rfid data sent from raspberry pi
router.post('/rfid_data', async (request,response) => {
    var number = null;
    const rfidData = request.body.rfid_data;

    // retrieval of the contact number associated with the student
    try{
        const result = await api.get(`/database/student/${rfidData}`);
        number = result.data;
    } catch (error){
        return response.json(error)
    }

    // sending of the message to the retrieved contact number
    try {
        const result = await api.get(`/messaging/message/${number}/${2}`)
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