import express from 'express';
import databaseRoutes from './database.js';
import enrollRoutes from './enroll.js';
import overrideRoutes from './override.js'


const router = express.Router();

router.use('/database', databaseRoutes);
router.use('/enroll', enrollRoutes);
router.use('/override', overrideRoutes);

export default router