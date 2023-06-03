const express = require("express");
const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  updateUserProfile,
} = require("../controllers/UserController.js");

const {
  getAtts,
  getAttById,
} = require("../controllers/AttendanceController.js");

const {
  getsts,
  getStuData,
  getStudentById,
  getCourseById,
  getStudentcourseId,
  getAllStudentqr,
  createStudent,
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
} = require("../controllers/CourseController.js");

const {
  getCSs,
  stucourse,
  updateCS,
} = require("../controllers/CoursestudentController.js");

const { getPays } = require("../controllers/PaymentController.js");

const {
  getSPs,
  createPre,
  updateSP,
  deletespre,
} = require("../controllers/Salarypresent.js");

const { getsals } = require("../controllers/SalaryController.js");

// const {
//   getNotices,
//   deleteNotice,
//   viewNotice,
//   getNoticesCount,
// } = require("../controllers/NoticeController.js");

// const {
//   getTimetables,
//   createTimetable,
//   deleteTimetable,
//   viewTimetable,
// } = require("../controllers/TimetableController.js");

const {
  getNewTimetables,
  createNewTimetable,
  deleteNewTimetable,
  viewNewTimetable,
  timecourseId,
  updateTimeTable,
} = require("../controllers/NewtimetableController.js");

const router = express.Router();

// User
router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.post("/users", createUser);
router.patch("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);
router.patch("/updateusers/:id", updateUserProfile);

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

//student
router.get("/att", getAtts);
router.get("/att/:id", getAttById);
router.post("/studentdata", createStudent);

// Teacher
router.get("/teacher", getTes);
router.post("/teacher", createTeacher);
router.get("/getteacherbyId/:t_userid", getTeacherById);

//parent
router.get("/getparentstu/:id", getParentStu);
router.get("/getattendece/:id", getattendeceAtt);

//other
router.get("/stu", getsts);
router.get("/parent", getPas);
router.get("/course", getCos);
router.get("/coursestudent", getCSs);
router.get("/payment", getPays);
router.get("/salarypresent", getSPs);
router.get("/salary", getsals);
// router.get("/notice", getNotices);
// router.get("/notice/count", getNoticesCount);
// router.delete("/notice/:id", deleteNotice);
// router.get("/notice/byId/:id", viewNotice);

// router.get("/timetable", getTimetables);
// router.delete("/timetable/:id", deleteTimetable);
// router.get("/timetable/byId/:id", viewTimetable);

router.get("/newtimetable", getNewTimetables);
router.delete("/newtimetable/:id", deleteNewTimetable);
router.put('/newtimetable/:id', updateTimeTable);
router.get("/newtimetable/byId/:id", viewNewTimetable);
router.post("/newtimetable/create", createNewTimetable);
router.get("/newtimetableid/:id", timecourseId);

module.exports = router;
