import { BrowserRouter, Routes, Route } from "react-router-dom";

import Auth from "./components/User/Auth";
import StudentReg from "./components/Student/Register";
import EnterForm from "./components/Student/EnterForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="Stureg" element={<StudentReg/>}/>
          <Route path="EnterForm" element={<EnterForm/>}/>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
