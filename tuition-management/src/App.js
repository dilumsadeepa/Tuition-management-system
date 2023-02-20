import { BrowserRouter, Routes, Route } from "react-router-dom";

import Register from "./components/User/Register";
import StudentReg from "./components/Student/Register";
import EnterForm from "./components/Student/EnterForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Register />} />
          <Route path="Stureg" element={<StudentReg/>}/>
          <Route path="EnterForm" element={<EnterForm/>}/>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
