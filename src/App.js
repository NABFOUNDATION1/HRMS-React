import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLayout from './layouts/AdminLayout';
import Dashboard from './pages/employee/Dashboard';
import EmployeeLayout from './layouts/EmployeeLayout';



function App() {
  return (
    <>
       {/* <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/manageEmployees" element={<ManageEmployee/>}></Route>
        <Route path="/manageAttendance" element={<ManageAttendance/>}></Route>
        <Route path="/attendanceTable" element={<AttendanceTable/>}> </Route>
        <Route path="/manageInterns" element={<ManageIntern/>} ></Route>
        <Route path="/manageLeaves" element={<ManageLeave/>}></Route>
        <Route path="/manageTours" element={<ManageTour/>}></Route>
      </Routes>
    </Router>    */}
    <EmployeeLayout/>
    
    </>
  );
}


export default App;