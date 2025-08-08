import React , {useState} from "react";
import Sidebar from "../../components/sidebar";
import Header from "../../components/common/header";
import EmployeeBox from "../../components/EmployeeBox";
import ReminderNoteBox from "../../components/common/ReminderNoteBox";
import PaySlipBox from "../../components/PaySlipBox";
import LateComerBox from "../../components/LateComerBox";
import Card from "../../components/common/card";
import "../../dashboard.css"

const Dashboard = () =>
{
    const[isSideBarOpen, setIsSideBarOpen] = useState(true);
    return(
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
                
                <div className="dashboard-container p-3 ">
                    <div className="card-section mb-4">
                        <Card front1="Total Employee" front2="Total Present" front3="On Leave" front4="On Tour" />
                    </div>

                    <div className="main-grid">
                    
                        <div className="reminder-box">
                            <ReminderNoteBox/>
                        </div>
                        <div className="employee-box">
                            <EmployeeBox/>
                        </div>
                        <div className="lateComer-box">
                            <LateComerBox/>
                        </div>
                        <div className="paySlip-box">
                            <PaySlipBox/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Dashboard