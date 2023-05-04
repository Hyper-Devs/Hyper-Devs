// import express from 'express';
// import databaseRoutes from './database.js';
// import enrollRoutes from './enroll.js';
// import overrideRoutes from './override.js'

const express = require('express');
const databaseRoutes = require('./database.js');
const enrollRoutes = require('./enroll.js');
const overrideRoutes = require('./override.js');
const loginRoutes = require('./login.js');


const router = express.Router();

router.use('/database', databaseRoutes);
router.use('/enroll', enrollRoutes);
router.use('/override', overrideRoutes);
router.use('/', loginRoutes);

module.exports = router;