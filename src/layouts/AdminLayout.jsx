import {BrowserRouter, Routes , Route } from "react-router-dom";
import Dashboard from "../pages/admin/Dashboard";
import Profile from "../pages/admin/Profile";
import ManageAttendance from "../pages/admin/ManageAttendance";
import ManageEmployee from "../pages/admin/ManageEmployee";
import ManageIntern from "../pages/admin/ManageIntern";
import ManageLeave from "../pages/admin/ManageLeave";
import ManageTour from "../pages/admin/ManageTour";

const AdminLayout = ()=>
{
    return(
    <BrowserRouter>
        <Routes>
            <Route path="dashboard" element={<Dashboard/>}/>
            <Route path="profile" element={<Profile/>}/>
            <Route path="manageEmployees" element={<ManageEmployee/>}/>
            <Route path="manageInterns" element={<ManageIntern/>}/>
            <Route path="manageAttendance" element={<ManageAttendance/>}/>
            <Route path="manageLeaves" element={<ManageLeave/>}/>
            <Route path="manageTours" element={<ManageTour/>}/>
        </Routes>
    </BrowserRouter>
    );

};
export default AdminLayout;
