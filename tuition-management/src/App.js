import { BrowserRouter, Routes, Route } from "react-router-dom";


import Auth from "./components/User/Auth";
import StudentReg from "./components/Student/Register";
import EnterForm from "./components/Student/EnterForm";
import Admin from "./components/Admin/Admin";
import ViewStudent from "./components/Admin/ViewStudent";
import StudenttoCourse from "./components/Admin/StudenttoCourse";
import Course from "./components/Admin/Course";
import CreateCourse from "./components/Admin/CreateCourse";
import AssignStudents from "./components/Admin/AssignStudents";
import Salary from "./components/Admin/Salary";
import SalaryPresent from "./components/Admin/SalaryPresent";
// import Footer from "./components/Footer";
// import Header from "./components/Header";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Auth />} />

          {/* admin part */}
          <Route path="admin" element={<Admin />}/>
          <Route path="adminstudent" element={<ViewStudent/>}/>
          <Route path="studentcourse" element={<StudenttoCourse/>}/>
          <Route path="course" element={<Course/>}/>
          <Route path="course/create" element={<CreateCourse/>}/>
          <Route path="assignstudent" element={<AssignStudents/>}/>
          <Route path="salary" element={<Salary/>}/>
          <Route path="salarypresentage" element={<SalaryPresent/>}/>


          {/* student part */}
          <Route path="StudentLogin" element={<Login/>}/>

          <Route path="Stureg" element={<StudentReg/>}/>
          <Route path="EnterForm" element={<EnterForm/>}/>
         
      </Routes>
   </BrowserRouter>
   
   </div>
   
  );
}

export default App;
