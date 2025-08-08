import React from "react";

{/*We will have to pass this information from attendance section */}
const LateComerBox = () =>
{
    const LateComers = [{name:"Radhe Kumar Mishra" , profile:"/images/avatar.jpg", freq:1} , {name:"Soumyadeep", profile:"/images/avatar.jpg", freq:3}, {name:"Manika Kaushik", profile:"/images/avatar.jpg", freq:2},{name:"Manika Kaushik", profile:"/images/avatar.jpg", freq:2},{name:"Manika Kaushik", profile:"/images/avatar.jpg", freq:2}];
    return(
        <div className="info-box rounded rounded-2 mt-4 ms-4 p-2 border border-black">
            <div className="info-box-content p-3 bg-white">
            <h6 className="border-bottom fw-semibold">Late Comers</h6>
                <ul className="list-unstyled">
                    {LateComers.map((item, idx) => (
                        
                            <li key={idx} className="rounded mb-2 mt-2 d-flex justify-content-between align-items-center text-dark bg-default px-3 py-3 shadow-sm">
                                <img src={item.profile} alt="profile" className="profile-photo rounded-circle ms-2"/>
                                <span>{item.name}</span>
                                <span className="text-danger fw-bold"> {item.freq} </span> 
                            </li>
                        ))}
                </ul>
            </div>
        </div>);
    
};
export default LateComerBox;