import express from  'express';
import {heartdisease} from '../disease/heartdisease.js';
const router = express.Router();

router.post('/heart',heartdisease);
export default router;
