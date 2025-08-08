import React, {useState} from 'react';
import Sidebar from '../../components/employee/sidebar';
import Card from '../../components/common/card'
import ReminderNoteBox from '../../components/common/ReminderNoteBox';
import Header from '../../components/common/header';
import '../../styles/employee/dashboard.css'

const Dashboard = () => {
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
                <Header showSearchBar={false} searchType="employee" showButton={false} toggleSidebar={() => setIsSideBarOpen(!isSideBarOpen)} />
                
                <div className="dashboard-container p-3 ">
                    <div className="card-section mb-4">
                        <Card front1="Attendance" front2="Remaining CL" front3="Half Day" front4="Remaining OL" />
                    </div>
                    <div className="main-grid">
                        <div className="reminder-box">
                            <ReminderNoteBox/>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
  );
};

export default Dashboard;
