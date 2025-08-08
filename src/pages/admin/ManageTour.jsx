import React , {useState} from "react";
import Sidebar from "../../components/sidebar";
import Header from "../../components/common/header";

import "../../styles/manageLeave.css"
import TourRequestTable from "../../components/TourRequestTable";


const ManageTour = () =>
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
                <div className="main-container p-2">
                    <div className="main-grid">
                        <div className="tour-box">
                            <TourRequestTable/>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageTour;