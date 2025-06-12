import React from "react";
import {NavLink} from "react-router-dom";
import '../styles.css';
const Sidebar =  () =>
{
    return (
    <nav className="d-flex flex-column  text-white vh-100 p-3 rounded-3 shadow-lg"  id="sidebar" style = {{width:'17rem'}}>
            
                <div className="sidebar-user d-flex flex-row align-items-center  mb-4 border-bottom pb-3">
                    <div className="sidebar-img me-5">
                        <img src="../assets/images/employees.png" alt="profile" className="rounded-circle border border-white" style ={{width: '60px' , height: '60px'}} />

                    </div>
                    <div className="sidebar-info">
                        <h5 className="mb-0">user</h5>
                        <small className="text-light opacity-75"> user@nabard.org</small>
                    </div>
                </div>
                
                <div className="sidebar-features d-flex flex-column justify-content-around flex-grow-1">
                    <SideBarItem icon="bi-person-square" text="Profile" link="profile" />
                    <SideBarItem icon="bi-person" text="Manage Employees" link="manageEmployees" />
                    <SideBarItem icon="bi-calendar-check" text="Manage Attendance" link="manageAttendance"/>
                    <SideBarItem icon="bi-person-badge" text="Manage Interns" link="manageInterns"/>
                    <SideBarItem icon="bi-bag-fill" text="Leave Requests" link="manageLeaves"/>
                    <SideBarItem icon="bi-briefcase-fill" text="Tour Requests" link="manageTours"/>
                    <SideBarItem icon="bi-book" text="Policies" link="policies"/>
                    <div className="feature d-flex flex-row align-items-center ">
                        <div className="feature-icon me-3">
                            <i className="bi bi-power fs-3"> </i>
                        </div>

                        <button type="button" id="logoutButton" className="btn btn-danger">Logout </button>
                    </div>                    
                </div>          
    
     </nav> );       
};
const SideBarItem = ({icon , text , link}) =>
{
    return(
    <div className="feature d-flex flex-row align-items-center ">
        <div className="feature-icon me-3">
            <i className={`bi ${icon} fs-3`}></i>
        </div>

        <div className="feature-description ms-3">
            <NavLink to={`/${link}`} className={({isActive}) => `mb-0 text-light ${isActive?'active' : '' }` } > {text}
            </NavLink>
        </div>

    </div>);

};
export default Sidebar;