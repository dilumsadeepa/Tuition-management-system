import { BrowserRouter, Routes, Route } from "react-router-dom";

import Welcome from "./components/Welcome";
import Auth from "./components/User/Auth";
import Student from "./components/Student/Student";
import StudentReg from "./components/Student/Register";
import EnterForm from "./components/Student/EnterForm";
import Admin from "./components/Admin/Admin";
import ViewStudent from "./components/Admin/ViewStudent";
import StudenttoCourse from "./components/Admin/StudenttoCourse";
import Course from "./components/Admin/Course";
import CreateCourse from "./components/Admin/CreateCourse";
import CreateNotice from "./components/Common/CreateNotice";
import Notice from "./components/Common/Notice";
import EditNotice from "./components/Common/EditNotice";
import NoticesList from "./components/Common/NoticesList";
import Test from "./components/Common/Test";
import PageNotFound from "./components/Common/PageNotFound";
import AssignStudents from "./components/Admin/AssignStudents";
import Salary from "./components/Admin/Salary";
import SalaryPresent from "./components/Admin/SalaryPresent";
import AddStudent from "./components/Admin/AddStudent";
import GenSalary from "./components/Admin/GenSalary";
import Login from "./components/User/Login";
import Register from "./components/User/Register";
import SingleStudent from "./components/Admin/SingleStudent";

import StudentDetils from "./components/Student/StudentDetils";

// import Footer from "./components/Footer";
// import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="auth" element={<Auth />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />

          {/* admin part */}
          <Route path="admin" element={<Admin />} />
          <Route path="adminstudent" element={<ViewStudent />} />
          <Route path="studentcourse" element={<StudenttoCourse />} />
          <Route path="course" element={<Course />} />
          <Route path="course/create" element={<CreateCourse />} />
          <Route path="assignstudent" element={<AssignStudents />} />
          <Route path="salary" element={<Salary />} />
          <Route path="salarypresentage" element={<SalaryPresent />} />
          <Route path="addstudent" element={<AddStudent />} />
          <Route path="gensalary" element={<GenSalary />} />
          <Route path="singlestudent/:id" element={<SingleStudent />} />

          {/* student part */}
          <Route path="student" element={<Student />} />
          
          <Route path="studentdata" element={<StudentDetils/>}/>

          {/* <Route path="StudentLogin" element={<Login />} /> */}

         {/* Common */}


         <Route path="notice" element={<NoticesList/>}/>
         <Route path="notice/create" element={<CreateNotice/>}/>
         <Route path="notice/:id" element={<Notice/>}/>
         <Route path="notice/edit/:id" element={<EditNotice/>}/>
         <Route path="test" element={<Test/>}/>
         <Route path="*" element={<PageNotFound/>}/>
      </Routes>
   </BrowserRouter>
   
   </div>
   
  );
}

export default App;
