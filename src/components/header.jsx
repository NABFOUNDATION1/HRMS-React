import React from "react";
import EmployeeSearchBar from "./employeeSearchBar";
import InternSearchBar from "./internSearchBar";
const Header =  ({showSearchBar,searchType,showButton}) => 
{
    
    return(
        <header className="header top-0 start-0 end-0 z-3 m-4">
        <div className="header-container d-flex justify-content-between shadow-sm p-2 rounded-1">
            <div className="header-icons">
              <a className="btn mb-1" href="./dashboard.html"><i className="fs-5 bi bi-house-fill"> </i></a>           
             <button type="button" id= "notifications" data-bs-toggle="modal" data-bs-target="#notificationsModal" style={{border: 'none' , backgroundColor: 'transparent' , fontSize: 'large' }}> 
                <i className="bi bi-bell"> </i>
             </button>
            </div>
             {showSearchBar && (
                <form role="search">
                
                <div className="input-group">
                    {searchType === 'employee' && (<EmployeeSearchBar/>)}
                    {searchType === 'intern'&& (<InternSearchBar/>)}
                    
                    <input id="search" type="search" className="form-control" placeholder="Search"/>
    
                    <span className="input-group-text">
                      <i className="bi bi-search"></i>
                    </span>
                    
                </div>
            </form>)}

            {showButton && <button className="bg-secondary p-1 rounded-1 ms-5">
                Previous Employees
            </button>}
        </div>
    </header>

    );
};
export default Header;



