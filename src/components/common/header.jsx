import React from "react";
import EmployeeSearchBar from "./employeeSearchBar";
import InternSearchBar from "./internSearchBar";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Header = ({ showSearchBar, searchType, showButton, toggleSidebar }) => {
  return (
    <header className="header top-0 start-0 end-0 z-3 m-4">
      <div className="header-container d-flex justify-content-between align-items-center shadow-sm p-2 rounded-1">

        {/* Hamburger menu visible on small screens only*/}
         {/* Hamburger menu visible on small screens only */}
         <div className="d-md-none me-3">
          <button onClick={toggleSidebar} className="btn btn-dark">
            <FaBars />
          </button>
        </div>

       
        {/* Header icons */}
        <div className="header-icons d-flex align-items-center">
        
          <NavLink to="/dashboard" className="me-3">
            <i className="fs-5 bi bi-house-fill"></i>
          </NavLink>
          <button
            type="button"
            id="notifications"
            data-bs-toggle="modal"
            data-bs-target="#notificationsModal" 
            style={{
              border: "none",
              backgroundColor: "transparent",
              fontSize: "large",
            }}
          >
            <i className="bi bi-bell"></i>
          </button>
        </div>

        {/* Search bar if enabled */}
        {showSearchBar && (
          <form role="search" className="flex-grow-1 mx-4">
            <div className="input-group">
              {searchType === "employee" && <EmployeeSearchBar />}
              {searchType === "intern" && <InternSearchBar />}

              <input
                id="search"
                type="search"
                className="form-control"
                placeholder="Search"
              />
              <span className="input-group-text">
                <i className="bi bi-search"></i>
              </span>
            </div>
          </form>
        )}

        {/* Optional button */}
        {showButton && (
          <button className="bg-secondary p-1 rounded-1 ms-5 text-white">
            Previous Employees
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;



