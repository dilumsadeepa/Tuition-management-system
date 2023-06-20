import { BrowserRouter, Routes, Route } from "react-router-dom";

import Welcome from "./components/Welcome";
import Auth from "./components/User/Auth";
// import Student from "./components/Student/Student";

import Admin from "./components/Admin/Admin";
import ViewStudent from "./components/Admin/ViewStudent";
import ViewTeacher from "./components/Admin/ViewTeacher";
import StudenttoCourse from "./components/Admin/StudenttoCourse";
import Course from "./components/Admin/Course";
import CreateCourse from "./components/Admin/CreateCourse";
import CreateNotice from "./components/Common/CreateNotice";
import CreateNoticeNew from "./components/Common/CreateNoticeNew";
import Notice from "./components/Common/Notice";
import EditNotice from "./components/Common/EditNotice";
import NoticesList from "./components/Common/NoticesList";
import EditCourse from "./components/Admin/EditCourse";
import AddUser from "./components/Admin/AddUser";

// import CreateTimeTable from "./components/Common/CreateTimeTable";
import TimeTable from "./components/Common/TimeTable";
import CreateTimeTableNew from "./components/Common/CreateTimeTableNew";
import EditTimeTable from "./components/Common/EditTimeTable";
import TimeTableList from "./components/Common/TimeTableList";

// import NewTimeTable from "./components/Common/NewTimeTable";
import CreateNewTimeTable from "./components/Common/CreateNewTimeTable";
import UpdateTimeTable from "./components/Common/UpdateTimeTable";
import NewTimeTableList from "./components/Common/NewTimeTableList";
import CreateTimeTableDashboard from "./components/Common/CreateTimeTableDashboard";

import Test from "./components/Common/Test";
import PageNotFound from "./components/Common/PageNotFound";
import AssignStudents from "./components/Admin/AssignStudents";
import Salary from "./components/Admin/Salary";
import SalaryPresent from "./components/Admin/SalaryPresent";
import AddStudent from "./components/Admin/AddStudent";
import AddTeacher from "./components/Admin/AddTeacher";
import GenSalary from "./components/Admin/GenSalary";
import Login from "./components/User/Login";
import Register from "./components/User/Register";
import SingleStudent from "./components/Admin/SingleStudent";


import StudentDetils from "./components/Student/StudentDetils";
import Classes from "./components/Student/classes";
import Attendance from "./components/Student/attendance";



import Payment from "./components/Parent/Payment";
import EnrollPage from "./components/Student/EnrollPage";
import StudentProfile from "./components/Student/studentProfile";
import StuDashboard from "./components/Student/StuDashboard";

import Teacher from "./components/Teacher/Teacher";
import AddTeacherDetails from "./components/Admin/AddTeacherDetails";
import TeacherCourse from "./components/Teacher/TeacherCourse";

import Attendecep from "./components/Parent/Attendencep";
import TeacherProfile from "./components/Teacher/TeacherProfile";

// .............Parents................

import Parent from "./components/Admin/Parent";
import ViewStudentParent from "./components/Parent/VewStudentParent";
import ParentDashboard from "./components/Parent/Parent";
import AddParentData from "./components/Admin/AddParentsData";
import ParentProfile from "./components/Parent/ParentProfile";
import EditParent from "./components/Parent/EditParent";


// -----------------Home Page-----------------
import Home from "./components/Home/Home";
import Gallery from "./components/Home/Gallery";
import Faq from "./components/Home/Faq";
import AboutUs from "./components/Home/AboutUs";
import ContactUs from "./components/Home/ContactUs";
import AlTimeTable from "./components/Home/AlTimeTable";
import ALStreamWiseTimeTable from "./components/Home/ALStreamWiseTimeTable";
import PublicNotices from "./components/Home/PublicNotices";


// import Footer from "./components/Footer";
// import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="auth" element={<Auth />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />

          {/* admin part */}
          <Route path="admin" element={<Admin />} />
          <Route path="adminstudent" element={<ViewStudent />} />
          <Route path="studentcourse" element={<StudenttoCourse />} />
          <Route path="adminteacher" element={<ViewTeacher />} />
          <Route path="course" element={<Course />} />
          <Route path="course/create" element={<CreateCourse />} />
          <Route path="assignstudent" element={<AssignStudents />} />
          <Route path="salary" element={<Salary />} />
          <Route path="salarypresentage" element={<SalaryPresent />} />
          <Route path="addstudent" element={<AddStudent />} />
          <Route path="addteacher" element={<AddTeacher />} />
          <Route path="gensalary" element={<GenSalary />} />
          <Route path="singlestudent/:id" element={<SingleStudent />} />
          <Route path="addparent/:id" element={<AddParentData />} />
          <Route path="parent/:id" element={<Parent />} />
          <Route path="editcourse/:id" element={<EditCourse />} />
          <Route path="adduser" element={<AddUser />} />

          {/* Teacher part */}
          <Route path="teacher" element={<Teacher />}></Route>
          <Route path="teacherdetails" element={<AddTeacherDetails />}></Route>
          <Route path="teachercourse" element={<TeacherCourse />}></Route>
          <Route path="teacherprofile" element={<TeacherProfile />}></Route>

          {/* student part */}
          {/* <Route path="StudentLogin" element={<Login />} /> */}
          <Route path="studentdata" element={<StudentDetils />} />
          <Route path="classeslist" element={<Classes />} />
          <Route path="Attendance" element={<Attendance />} />
          <Route path="Enrollpage" element={<EnrollPage />} />
          <Route path="profile" element={<StudentProfile />} />

          <Route path="studashboard" element={<StuDashboard />} />

          {/* <Route path="StudentLogin" element={<Login />} /> */}

          {/* parents */}
          <Route path="parent" element={<ParentDashboard />} />
          <Route path="parentstudent" element={<ViewStudentParent />} />
          <Route path="paymentp/:id" element={<Payment />} />
          <Route path="pattendece/:id" element={<Attendecep />} />
          <Route path="parentprofile" element={<ParentProfile />} />
          <Route path="editparent" element={<EditParent />} />

          {/* Common */}

          <Route path="gallery" element={<Gallery />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="faq" element={<Faq />} />
          <Route path="publicnotices" element={<PublicNotices />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="altimetable" element={<AlTimeTable />} />
          <Route path="alstreamwisetimetable" element={<ALStreamWiseTimeTable />} />

          <Route path="newtimetable" element={<NewTimeTableList />} />
          <Route
            path="newtimetabledash"
            element={<CreateTimeTableDashboard />}
          />
          <Route path="newtimetable/create" element={<CreateNewTimeTable />} />
          <Route path="newtimetable/edit/:id" element={<UpdateTimeTable />} />

          <Route path="notice/edit/:id" element={<EditNotice />} />
          <Route path="test" element={<Test />} />
          <Route path="*" element={<PageNotFound />} />

          <Route path="notice" element={<NoticesList />} />
          <Route path="notice/create" element={<CreateNoticeNew />} />
          <Route path="notice/:id" element={<Notice />} />

          <Route path="timetable" element={<TimeTableList />} />
          <Route path="timetable/create" element={<CreateTimeTableNew />} />
          <Route path="timetable/:id" element={<TimeTable />} />
          <Route path="timetable/edit/:id" element={<EditTimeTable />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
