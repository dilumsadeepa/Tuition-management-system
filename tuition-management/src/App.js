import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Auth from "./components/User/Auth";
import StudentReg from "./components/Student/Register";
import EnterForm from "./components/Student/EnterForm";
import Admin from "./components/Admin/Admin";
// import Footer from "./components/Footer";
// import Header from "./components/Header";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="admin" element={<Admin />}/>
          <Route path="Stureg" element={<StudentReg/>}/>
          <Route path="EnterForm" element={<EnterForm/>}/>
      </Routes>
   </BrowserRouter>
   
   </div>
   
  );
}

export default App;
