import React , {useState} from "react";
import Sidebar from "../../components/sidebar";
import Header from "../../components/common/header";
import Card from "../../components/common/card";
import Attendance from "../../components/attendance";
import "../../styles/attendance.css"

const ManageAttendance = () =>
{
    const[isSideBarOpen, setIsSideBarOpen] = useState(true);
    
   
return(
    <>
    <div className="d-flex">
        <Sidebar isOpen={isSideBarOpen}/>
        {isSideBarOpen && window.innerWidth < 768 && (
    <div
      className="sidebar-overlay"
      onClick={() => setIsSideBarOpen(false)}
    ></div>
  )}
        
   
        <div className="flex-grow-1">
            <Header showSearchBar={true} searchType="employee" showButton={true} toggleSidebar={() => setIsSideBarOpen(!isSideBarOpen)} />
            
            <div className="profile-container p-3 ">
                <div className="card-section mb-4">
                    <Card front1="Total Employee" front2="Total Present" front3="On Leave" front4="On Tour" />
                </div>

                <div className="main-grid">
                
                    <div className="profile-box">
                        <Attendance/>
                        
                    </div>
                    
                   
                    
                </div>
               
            </div>
            
        </div>
    </div>
     
   </>
);
};
export default ManageAttendance;