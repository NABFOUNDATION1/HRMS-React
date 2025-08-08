import React from "react";
import { MdDownload } from "react-icons/md";

const PaySlipBox = () =>
{
    const employees = [{fullName: "Kedar Rane", profile:"/images/avatar.jpg"},{ fullName: "Aditi Shukla", profile:"/images/avatar.jpg"} ,{fullName: "Siddhesh Surve", profile:"/images/avatar.jpg" }, {fullName: "Ali Baig", profile:"/images/avatar.jpg"},{fullName: "Rakesh Kumar", profile:"/images/avatar.jpg"}];
    {/*will have to fetch just the names from employees and interns tables*/}
    return(
        <div className="info-box rounded rounded-2 mt-4 ms-4 p-2 border border-black">
            <div className="info-box-content p-3 bg-white">
            <h6 className="border-bottom fw-semibold">Pay Slip</h6>
                <ul className="list-unstyled">
                    {employees.map((item, idx) => (
                        
                            <li key={idx} className="rounded mb-2 mt-2 d-flex justify-content-between align-items-center text-dark bg-default px-3 py-3 shadow-sm">
                                <img src={item.profile} alt="profile" className="rounded-circle ms-2 profile-photo"/>
                                <span>{item.fullName}</span>
                                <div className="icons">
                                <button className="btn btn-success me-2">Send</button>
                                <MdDownload className="ms-2"> </MdDownload>
                                </div>
                                

                            </li>
                        ))}
                </ul>
            </div>
        </div>);
    
};
export default PaySlipBox;
    