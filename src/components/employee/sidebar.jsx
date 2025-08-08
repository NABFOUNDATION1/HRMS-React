import React from "react";
import {NavLink} from "react-router-dom";
import '../../sidebar.css';
const Sidebar =  ({isOpen}) =>
{
    return (
        
            <nav className={`sidebar ${isOpen ? 'show' : ''}`} id="sidebar">
                <div className="d-flex flex-column p-3 vh-100 shadow-lg rounded-3 text-white">
                <div className="sidebar-user d-flex flex-row align-items-center  mb-4 border-bottom pb-3">
                    <div className="sidebar-img me-5">
                        <img src="/images/avatar.jpg" alt="profile" className="rounded-circle border border-white" style ={{width: '60px' , height: '60px'}} />

                    </div>
                    <div className="sidebar-info">
                        <h5 className="mb-0">user</h5>
                        <small className="text-light opacity-75"> user@nabard.org</small>
                    </div>
                </div>
                
                <div className="sidebar-features d-flex flex-column justify-content-around flex-grow-1">
                    <SideBarItem icon="bi-house-door-fill" text="Home" link="dashboard"/>
                    <SideBarItem icon="bi-person-square" text="Profile" link="profile" />
                    <SideBarItem icon="bi-calendar-check" text="Attendance" link="employeeAttendance"/>
                    <SideBarItem icon="bi-bag-fill" text="My Leaves" link="employeeLeaves"/>
                    <SideBarItem icon="bi-briefcase-fill" text="My Tours" link="employeeTours"/>
                    <SideBarItem icon="bi-book" text="Policies" link="policies"/>
                    <SideBarItem icon="bi bi-fullscreen" text="Training Session" link="trainingSession"/>
                    <div className="feature d-flex flex-row align-items-center ">
                        <div className="feature-icon me-3">
                            <i className="bi bi-power fs-3"> </i>
                        </div>

                        <button type="button" id="logoutButton" className="btn btn-outline-danger ms-auto">Logout </button>
                    </div>                    
                </div>       
                </div>
            </nav>
            
                   
    
 );       
};
const SideBarItem = ({icon , text , link}) =>
{
    return(
    <div className="feature d-flex flex-row align-items-center ">
        <div className="feature-icon me-3">
            <i className={`bi ${icon} fs-3`}></i>
        </div>

        <div className="feature-description ms-3">
            <NavLink to={`/${link}`}  className={({ isActive }) =>
    `mb-0 text-light text-decoration-none ${isActive ? 'fw-bold active-link' : ''}`
  } > {text}
            </NavLink>
        </div>

    </div>);

};
export default Sidebar;