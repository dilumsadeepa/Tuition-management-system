import { BrowserRouter, Routes, Route } from "react-router-dom";

import Register from "./components/User/Register";
import StudentReg from "./components/Student/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Register />} />
          <Route path="Stureg" element={<StudentReg/>}/>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
