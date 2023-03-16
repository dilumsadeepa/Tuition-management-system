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
import { getTes,createTeacher } from "../controllers/TeacherController.js";
import { getCos, createCourse, getCotData } from "../controllers/CourseController.js";
import { getCSs, stucourse } from "../controllers/CoursestudentController.js";
import { getPays } from "../controllers/PaymentController.js";
import { getSPs } from "../controllers/Salarypresent.js";
import { getsals } from "../controllers/SalaryController.js";
import { getNotis } from "../controllers/NoticeController.js";
import { getCts } from "../controllers/CourseteacherController.js";
 
const router = express.Router();
 
router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', createUser);
router.patch('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

//admin
router.get('/astudata', getStuData);
router.get('/stucourse', stucourse);
router.post('/crestecourse', createCourse);
router.get('/course', getCos);
router.get('/getCts', getCts);
router.get('/courseteacher', getCotData);


//student

router.get('/att', getAtts);
router.get('/att/:id', getAttById);



 
// Teacher
router.get('/teacher', getTes);
router.post('/teacher',createTeacher);


//other

router.get('/stu', getsts);
router.get('/parent', getPas);
router.get('/course', getCos);
router.get('/coursestudent', getCSs);
router.get('/payment', getPays);
router.get('/salarypresent', getSPs);
router.get('/salary', getsals);
router.get('/notice', getNotis);


export default router;