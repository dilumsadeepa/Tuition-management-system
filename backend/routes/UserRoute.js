import express from "express";
import {
    getUsers, 
    getUserById,
    createUser,
    updateUser,
    deleteUser
} from "../controllers/UserController.js";

import { getAtts, getAttById } from "../controllers/AttendanceController.js";

import { 
    getsts, 
    getStuData, 
    getStudentById, 
    getCourseById, 
    getStudentcourseId, 
    getAllStudentqr 
} from "../controllers/StudentController.js";

import { getPas, getPadata, createParent, getParentStu } from "../controllers/ParentsController.js";
import { getTes,createTeacher } from "../controllers/TeacherController.js";
import { getCos, createCourse, CourseData, deleteCourse, CourseDataId, updateCourse } from "../controllers/CourseController.js";
import { getCSs, stucourse, updateCS } from "../controllers/CoursestudentController.js";
import { getPays } from "../controllers/PaymentController.js";
import { getSPs, createPre, updateSP, deletespre } from "../controllers/Salarypresent.js";
import { getsals } from "../controllers/SalaryController.js";
import { getNotices, deleteNotice, viewNotice, getNoticesCount } from "../controllers/NoticeController.js";
import { getTimetables, createTimetable, deleteTimetable, viewTimetable } from "../controllers/TimetableController.js";
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
router.get('/coursedata', CourseData);
router.delete('/deletecourse/:id', deleteCourse);
router.patch('/updateCS/:id', updateCS);
router.get('/salary', getsals);
router.post('/createSpresent', createPre);
router.get('/salarypresent', getSPs);
router.patch('/updatepre/:id', updateSP);
router.delete('/deletespre/:id', deletespre);
router.get('/student/:id', getStudentById);
router.get('/couserbystu/:id', getCourseById);
router.get('/stcoid/:id', getStudentcourseId);
router.get('/allstqr', getAllStudentqr);
router.get('/getpadata/:id', getPadata);
router.post('/parent', createParent);
router.get('/editcourse/:id', CourseDataId);
router.patch('/updatecourse/:id', updateCourse);


//student

router.get('/att', getAtts);
router.get('/att/:id', getAttById);



 
// Teacher
router.get('/teacher', getTes);
router.post('/teacher',createTeacher);

//parent

router.get('/getparentstu/:id', getParentStu);


//other

router.get('/stu', getsts);
router.get('/parent', getPas);
router.get('/course', getCos);
router.get('/coursestudent', getCSs);
router.get('/payment', getPays);
router.get('/salarypresent', getSPs);
router.get('/salary', getsals);
router.get('/notice', getNotices);
router.get('/notice/count', getNoticesCount);
router.delete('/notice/:id', deleteNotice);
router.get('/notice/byId/:id', viewNotice);

router.get('/timetable', getTimetables);
router.delete('/timetable/:id', deleteTimetable);
router.get('/timetable/byId/:id', viewTimetable);



export default router;