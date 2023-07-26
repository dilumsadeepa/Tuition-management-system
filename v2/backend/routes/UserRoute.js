const express = require("express");
const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  updateUserProfile,
  getparent,
  getProfile,
  forgotPassword,
  resetPassword,
  
} = require("../controllers/UserController.js");

const {
  getAtts,
  getAttById,
  getAttCourseId,
  getAttByDate
} = require("../controllers/AttendanceController.js");

const {
  getsts,
  getStuData,
  getStudentById,
  getCourseById,
  getStudentcourseId,
  getAllStudentqr,
  createStudent,
  createApproval,
} = require("../controllers/StudentController.js");

const {
  getPas,
  getPadata,
  createParent,
  getParentStu,
  getattendeceAtt,
} = require("../controllers/ParentsController.js");

const {
  getTes,
  createTeacher,
  getTeacherById,
  getCourseIncome,
  getTotalIncome,
  getTotalStudentByCourse,
  getTotalStudents,
} = require("../controllers/TeacherController.js");

const {
  getCos,
  createCourse,
  CourseData,
  deleteCourse,
  CourseDataId,
  updateCourse,
  getCoursesByTeacherId,
  stucourseall,
  getStudentsByCourseIds,
  CourseDatasub,
  getunascourses,
} = require("../controllers/CourseController.js");

const {
  getCSs,
  stucourse,
  mystucourse,
  updateCS,
  deleteCS,
} = require("../controllers/CoursestudentController.js");

const parentPaymentController = require ('../controllers/PaymentController.js');
const { 
  getPays, 
  getPaysByUserId, 
  getuserid,
  getpayemtsbyparent,
  getpayemtsbystdid,
} = require("../controllers/PaymentController.js");

const {
  getSPs,
  createPre,
  updateSP,
  deletespre,
  getSPById,
} = require("../controllers/Salarypresent.js");

const { getsals } = require("../controllers/SalaryController.js");

// const {
//   getNotices,
//   deleteNotice,
//   viewNotice,
//   getNoticesCount,
// } = require("../controllers/NoticeController.js");

const {
  getTimetables,
  createTimetable,
  deleteTimetable,
  viewTimetable,
} = require("../controllers/TimetableController.js");

const {
  getNewTimetables,
  getNewStudentTimetables,
  getNewTimetablesThreeMonths,
  createNewTimetable,
  deleteNewTimetable,
  viewNewTimetable,
  viewPublicNewTimetable,
  viewPublicSubjectNewTimetable,
  viewPublicSubjectTeachers,
  viewPublicStreamTeachers,
  streamsubjects,
  timecourseId,
  timecourse,
  updateTimeTable,
} = require("../controllers/NewtimetableController.js");

const parentStudentController = require('../controllers/ParentStudentController.js');
const {
  getAdminDashboardData,
  calculateIncomeForRole1
} = require('../controllers/AdminController');

const PaymentPayController = require('../controllers/PaymentPayController');

const router = express.Router();

// User
router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.get('/profile/:id', getProfile);
router.post("/users", createUser);
router.patch("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);
router.patch("/updateusers/:id", updateUserProfile);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);

//admin
router.get("/astudata", getStuData);
router.get("/stucourse", stucourse);
router.post("/crestecourse", createCourse);
router.get("/course", getCos);
// router.get("/getCts", getCts);
router.get("/coursedata", CourseData);
router.get("/teachercourse/:teacherId", getCoursesByTeacherId);
router.delete("/deletecourse/:id", deleteCourse);
router.patch("/updateCS/:id", updateCS);
router.get("/salary", getsals);
router.post("/createSpresent", createPre);
router.get("/salarypresent", getSPs);
router.patch("/updatepre/:id", updateSP);
router.delete("/deletespre/:id", deletespre);
router.get("/student/:id", getStudentById);
router.get("/couserbystu/:id", getCourseById);
router.get("/stcoid/:id", getStudentcourseId);
router.get("/allstqr", getAllStudentqr);
router.get("/getpadata/:id", getPadata);
router.post("/parent", createParent);
router.get("/editcourse/:id", CourseDataId);
router.patch("/updatecourse/:id", updateCourse);
router.get("/stucourseall", stucourseall);

router.get('/admin-dashboard-data', getAdminDashboardData);


router.get('/calculate-income/:id', calculateIncomeForRole1);

router.post('/paymentpaycreate', PaymentPayController.createPayment);
router.patch('/paymentpayupdatestate', PaymentPayController.updatePaymentState);
router.get('/paymentpay', PaymentPayController.getAllPaymentRecords);
router.get('/getAllPendingPaymentRecords', PaymentPayController.getAllPendingPaymentRecords);

router.post('/addparentdata', parentStudentController.createParentStudent);




//student
router.get("/att", getAtts);
router.get("/att/:id", getAttById);
router.get('/attcourse/:id',getAttCourseId);
router.post("/studentdata", createStudent);
router.post("/enrollcourse", createApproval);

router.delete("/enrollcourse/:id", deleteCS);

router.get('/getStudentAtt/:id', getAttById);
router.get('/coursebysubject/:id', CourseDatasub);
router.get("/getstudentdata/:id", getStuData);
router.get("/getpaymentbyuserid/:id", getPaysByUserId);

router.get("/getpaymentbyuid/:id", getuserid);
router.get('/getunascourses/:id', getunascourses);
router.get("/mystucourse/:id", mystucourse);




// Teacher
router.get("/teacher", getTes);
router.post("/teacher", createTeacher);
router.get("/getteacherbyId/:t_userid", getTeacherById);
router.get("/getAllStudentById/:courseIds",getStudentsByCourseIds)
router.get("/getcourseincome/:id",getCourseIncome);
router.get("/gettotalincome/:courseIds",getTotalIncome);
router.get("/gettotalstudentbycourse/:courseIds",getTotalStudentByCourse);
router.get("/gettotalstudents/:courseIds",getTotalStudents);


//parent
router.get("/getparentstu/:id", getParentStu);
router.get('/parentstudents', parentStudentController.getAllParentStudents);
router.get('/parentstudents/:id', parentStudentController.getParentStudentById);
router.get('/findParentByStudentId/:studentId', parentStudentController.findParentByStudentId);
router.put('/parentstudents/:id', parentStudentController.updateParentStudent);
router.get('/findParentByParentId/:id', parentStudentController.findParentByParentId);
router.get('/getstudentbyp/:id', parentStudentController.getStudentsByP);
router.get('/getpstudentatt/:id', parentStudentController.getStudentsAtteBystdid);
router.get('/getpaymetbyparent/:id', getpayemtsbyparent);
router.get("/getpayemtsbystdid/:id", getpayemtsbystdid)

//other
router.get("/stu", getsts);
router.get("/parent", getPas);
router.get("/course", getCos);
router.get("/coursestudent", getCSs);
router.get("/payment", getPays);
router.get("/salarypresent", getSPs);
router.get("/salarypresentbyid/:id",getSPById)
router.get("/salary", getsals);
// router.get("/notice", getNotices);
// router.get("/notice/count", getNoticesCount);
// router.delete("/notice/:id", deleteNotice);
// router.get("/notice/byId/:id", viewNotice);

router.get("/timetable", getTimetables);
router.delete("/timetable/:id", deleteTimetable);
router.get("/timetable/byId/:id", viewTimetable);

router.get("/newtimetable", getNewTimetables);
router.get("/newstudenttimetable/:id", getNewStudentTimetables);
router.get("/newtimetable/threemonths", getNewTimetablesThreeMonths);
router.delete("/newtimetable/:id", deleteNewTimetable);
router.put('/newtimetable/:id', updateTimeTable);
router.get("/newtimetable/byId/:id", viewNewTimetable);
router.get("/newtimetable/public/:id", viewPublicNewTimetable);
router.get("/newtimetable/public/subject/:id", viewPublicSubjectNewTimetable);
router.get("/newtimetable/public/subjectteachers/:id", viewPublicSubjectTeachers);
router.get("/newtimetable/public/streamteachers/:id", viewPublicStreamTeachers);
router.get("/newtimetable/streamsubjects/:id", streamsubjects);
router.post("/newtimetable/create", createNewTimetable);
router.get("/newtimetableid/:id", timecourseId);
router.get('/coursename/:id', timecourse );

module.exports = router;
