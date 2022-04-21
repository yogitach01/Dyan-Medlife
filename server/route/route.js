import express from  'express';
import { userSignUp, userLogIn } from '../controller/user-controller.js';
import { doctorSignUp,doctorLogIn ,listDoctors} from '../controller/doctor-controller.js';
import { saveAppointmentDetails, getBookedPatients } from '../controller/appointment-controller.js'
import {predict} from '../disease/normaldisease.js';
import {heartdisease} from '../disease/heartdisease.js';
import {breastcancer} from '../disease/breastcancer.js';
import { lungcancerpre } from '../disease/lungcancerpre.js';
import { diabetesdisease } from '../disease/diabetesdisease.js';
const router = express.Router();

//login & signup
router.post('/add', userSignUp);
router.post('/get', userLogIn);


router.post('/adddoctor',doctorSignUp);
router.post('/getdoctor',doctorLogIn);
router.post('/getdisease',predict);
router.post('/heart',heartdisease);
router.post('/breast',breastcancer);
router.post('/lung',lungcancerpre);
router.post('/diabetes',diabetesdisease);



router.post("/getDoctorsList", listDoctors)
router.post("/saveAppointmentDetails", saveAppointmentDetails)
router.get("/getBookedPatients", getBookedPatients)

export default router;
