const express = require('express');
const db = require('../database.js').databaseConnection;
const router = express.Router();

router.use(express.json())

//api to accept rfid data sent from raspberry pi
router.post('/rfid_data', (req,res) => {
    const rfidData = req.body.rfid_data;
    console.log(`${rfidData}`)
    res.send("Data Received")
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