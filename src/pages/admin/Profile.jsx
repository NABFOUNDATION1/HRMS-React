import React , {useState} from "react";
import Sidebar from "../../components/sidebar";
import Header from "../../components/common/header";
import Card from "../../components/common/card";
import "../../profile.css"
import ProfileDetails from "../../components/ProfileDetails";

const Profile = () =>
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
                <Header showSearchBar={false} searchType="employee" showButton={false} toggleSidebar={() => setIsSideBarOpen(!isSideBarOpen)} />
                
                <div className="profile-container p-3 ">
                    <div className="card-section mb-4">
                        <Card front1="Total Attendance" front2="Remaining OL" front3="Remaining CL" front4="Half Day" />
                    </div>

                    <div className="main-grid">
                    
                        <div className="profile-box">
                            <ProfileDetails/>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;