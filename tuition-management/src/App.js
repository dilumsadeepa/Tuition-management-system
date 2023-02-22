
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Register from "./components/User/Register";
import StudentReg from "./components/Student/Register";
import EnterForm from "./components/Student/EnterForm";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Register />} />
          <Route path="Stureg" element={<StudentReg/>}/>
          <Route path="EnterForm" element={<EnterForm/>}/>
      </Routes>
   </BrowserRouter>
   <Header />
   <Footer />
   </div>
   
  );
}

export default App;
