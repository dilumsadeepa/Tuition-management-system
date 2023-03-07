import express from "express";
import {
    getUsers, 
    getUserById,
    createUser,
    updateUser,
    deleteUser
} from "../controllers/UserController.js";

import { getAtts, getAttById } from "../controllers/AttendanceController.js";

import { getsts, getStuData } from "../controllers/StudentController.js";
import { getPas } from "../controllers/ParentsController.js";
import { getTes } from "../controllers/TeacherController.js";
import { getCos } from "../controllers/CourseController.js";
import { getCSs } from "../controllers/CoursestudentController.js";
import { getPays } from "../controllers/PaymentController.js";
import { getSPs } from "../controllers/Salarypresent.js";
import { getsals } from "../controllers/SalaryController.js";
import { getNotis } from "../controllers/NoticeController.js";
 
const router = express.Router();
 
router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', createUser);
router.patch('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

//admin
router.get('/astudata', getStuData);



//student

router.get('/att', getAtts);
router.get('/att/:id', getAttById);

router.get('/stu', getsts);
router.get('/parent', getPas);
router.get('/teacher', getTes);
router.get('/course', getCos);
router.get('/coursestudent', getCSs);
router.get('/payment', getPays);
router.get('/salarypresent', getSPs);
router.get('/salary', getsals);
router.get('/notice', getNotis);
 
export default router;