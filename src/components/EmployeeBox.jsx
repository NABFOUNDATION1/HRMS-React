import React , {useState} from "react";
import { MdFileDownload } from "react-icons/md";
import { FaEye } from "react-icons/fa";


const EmployeeBox = () =>
{
    //const [showModal , setShowModal] = useState(true);
    //database  stores the location of image , data to be fetched from backend
    const Employees = [{name:"Kedar Rane",  profile:"/images/avatar.jpg"},
        {name:"Aditi Shukla", profile:"/images/avatar.jpg"},
        {name:"Siddhesh Surve" , profile:"/images/avatar.jpg"},
        {name:"Ali Baig", profile:"/images/avatar.jpg"}
    ];
    return(
       <div className="info-box rounded rounded-2 mt-4 ms-4 border border-black">
        <div className="info-box-content p-3 bg-white">
        <h6 className="border-bottom fw-semibold">Employees</h6> 
            <ul className="list-unstyled">
                {Employees.map((item,Idx) => (
                    <li key={Idx} className="rounded mb-2 mt-2 d-flex justify-content-between align-items-center text-dark bg-default">
                        <img src={item.profile} alt="profile" className="rounded-circle profile-photo ms-2"/>
                        <span>{item.name}</span>
                        <div className="icons"> 
                        <FaEye title="View employee Info" className="me-2">
                        </FaEye>
                        <MdFileDownload title="Download Info" className="ms-2"></MdFileDownload>
                        </div>
                        
                        </li>

                ))}

            </ul>
        </div>

       </div>
    );
};
export default EmployeeBox;
