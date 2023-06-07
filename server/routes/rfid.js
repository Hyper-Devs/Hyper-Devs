const express = require('express');
const db = require('../database.js').databaseConnection;
const router = express.Router();
const axios = require('axios');

router.use(express.json())

//api to accept rfid data sent from raspberry pi
router.post('/rfid_data', async (req,res) => {
    var number = null;
    const rfidData = req.body.rfid_data;

    try{
        const result = await axios.get(`http://localhost:8800/database/student/${rfidData}`);
        number = result.data;
        console.log(number)
    } catch (error){
        return res.json(error)
    }

    try {
        const result = await axios.get(`http://localhost:8800/message/${number}/${2}`)
        console.log(result.data)
        return res.json(result.data)
    } catch (error) {
        return res.json(error)
    }


})

router.get('rfid_data', (req,res) => {
    res.status(200).json({
        status: "success",
        data: {
            rfid_data: rfidData
        }
    })
})

module.exports = router;