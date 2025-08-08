import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/employee/Dashboard";

const EmployeeLayout = () => {
  return (
   <Router>
    <Routes>
        <Route path="home" element={<Dashboard/>}/>
        
    </Routes>
   </Router>
  )
}

export default EmployeeLayout
