import React , {useState} from "react";
import { MdFileDownload } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import EmployeeModal from "./EmployeeModal";


const EmployeeBox = () =>
{
    const [showModal , setShowModal] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    //database  stores the location of image , data to be fetched from backend
    //data will have similar format
    const Employees = [{firstName:"Kedar", lastName:"Rane", fullName:"Kedar Rane", employeeID:"EMP1001", userID:"Kedar.Rane", password:"128de",  dob:new Date("1995-10-3"), gender:"Male", designation:"SPA", department:"IT", contact:{phone:"18282683",email:"kedar@gmail.com" , alternate_phone:"82362136136"}, address:{line:"123, ABC Street" , city:"Mumbai", state:"Maharashtra", postal_code:"400051", country:"India"}, blood_group:"A+", emergency_contact:{name:"XXXX", relation:"XXXX" , phone:"3246736874"},
        bank_details: {
          account_number: "1829736484",
          acc_holder_name: "Kedar Rane",
          ifsc_code: "284645",
          branch: "Ghatkopar,Mumbai",
          passbook: "https://yourdomain.com/uploads/account/empid.pdf",
          pan_card: "https://yourdomain.com/uploads/documents/pan.empid.pdf"
        }, profile:"/images/avatar.jpg" ,
         documents: {
    tenth_certificate: "https://yourdomain.com/uploads/documents/10.empid.pdf",
    twelfth_certificate: "https://yourdomain.com/uploads/documents/12.empid.pdf",
    ug_certificate: "https://yourdomain.com/uploads/documents/ug.empid.pdf",
    pg_certificate: "https://yourdomain.com/uploads/documents/pg.empid.pdf",
    phd_certificate: "https://yourdomain.com/uploads/documents/phd.empid.pdf"
  },  work_experience: [
    {
      company_name: "ABC",
      designation: "Intern",
      start_date: new Date("2025-05-19"),
      end_date: new Date("2025-07-19"),
      role_description: "Assisted in backend API development"
    }
  ]},
  {firstName:"Aditi", lastName:"Shukla", fullName:"Aditi Shukla", employeeID:"EMP1001", userID:"Kedar.Rane", password:"128de",  dob:new Date("1995-10-3"), gender:"Male", designation:"SPA", department:"IT", contact:{phone:"18282683",email:"kedar@gmail.com" , alternate_phone:"82362136136"}, address:{line:"123, ABC Street" , city:"Mumbai", state:"Maharashtra", postal_code:"400051", country:"India"}, blood_group:"A+", emergency_contact:{name:"XXXX", relation:"XXXX" , phone:"3246736874"},
        bank_details: {
          account_number: "1829736484",
          acc_holder_name: "Kedar Rane",
          ifsc_code: "284645",
          branch: "Ghatkopar,Mumbai",
          passbook: "https://yourdomain.com/uploads/account/empid.pdf",
          pan_card: "https://yourdomain.com/uploads/documents/pan.empid.pdf"
        }, profile:"/images/avatar.jpg" ,
         documents: {
    tenth_certificate: "https://yourdomain.com/uploads/documents/10.empid.pdf",
    twelfth_certificate: "https://yourdomain.com/uploads/documents/12.empid.pdf",
    ug_certificate: "https://yourdomain.com/uploads/documents/ug.empid.pdf",
    pg_certificate: "https://yourdomain.com/uploads/documents/pg.empid.pdf",
    phd_certificate: "https://yourdomain.com/uploads/documents/phd.empid.pdf"
  },  work_experience: [
    {
      company_name: "ABC",
      designation: "Intern",
      start_date: new Date("2025-05-19"),
      end_date: new Date("2025-07-19"),
      role_description: "Assisted in backend API development"
    }
  ]},
  {firstName:"Siddhesh", lastName:"Surve", fullName:"Siddhesh Surve", employeeID:"EMP1001", userID:"Kedar.Rane", password:"128de",  dob:new Date("1995-10-3"), gender:"Male", designation:"SPA", department:"IT", contact:{phone:"18282683",email:"kedar@gmail.com" , alternate_phone:"82362136136"}, address:{line:"123, ABC Street" , city:"Mumbai", state:"Maharashtra", postal_code:"400051", country:"India"}, blood_group:"A+", emergency_contact:{name:"XXXX", relation:"XXXX" , phone:"3246736874"},
        bank_details: {
          account_number: "1829736484",
          acc_holder_name: "Kedar Rane",
          ifsc_code: "284645",
          branch: "Ghatkopar,Mumbai",
          passbook: "https://yourdomain.com/uploads/account/empid.pdf",
          pan_card: "https://yourdomain.com/uploads/documents/pan.empid.pdf"
        }, profile:"/images/avatar.jpg" ,
         documents: {
    tenth_certificate: "https://yourdomain.com/uploads/documents/10.empid.pdf",
    twelfth_certificate: "https://yourdomain.com/uploads/documents/12.empid.pdf",
    ug_certificate: "https://yourdomain.com/uploads/documents/ug.empid.pdf",
    pg_certificate: "https://yourdomain.com/uploads/documents/pg.empid.pdf",
    phd_certificate: "https://yourdomain.com/uploads/documents/phd.empid.pdf"
  },  work_experience: [
    {
      company_name: "ABC",
      designation: "Intern",
      start_date: new Date("2025-05-19"),
      end_date: new Date("2025-07-19"),
      role_description: "Assisted in backend API development"
    }
  ]},
  {firstName:"Ali", lastName:"Baig", fullName:"Kedar Rane", employeeID:"EMP1001", userID:"Kedar.Rane", password:"128de",  dob:new Date("1995-10-3"), gender:"Male", designation:"SPA", department:"IT", contact:{phone:"18282683",email:"kedar@gmail.com" , alternate_phone:"82362136136"}, address:{line:"123, ABC Street" , city:"Mumbai", state:"Maharashtra", postal_code:"400051", country:"India"}, blood_group:"A+", emergency_contact:{name:"XXXX", relation:"XXXX" , phone:"3246736874"},
        bank_details: {
          account_number: "1829736484",
          acc_holder_name: "Kedar Rane",
          ifsc_code: "284645",
          branch: "Ghatkopar,Mumbai",
          passbook: "https://yourdomain.com/uploads/account/empid.pdf",
          pan_card: "https://yourdomain.com/uploads/documents/pan.empid.pdf"
        }, profile:"/images/avatar.jpg" ,
         documents: {
    tenth_certificate: "https://yourdomain.com/uploads/documents/10.empid.pdf",
    twelfth_certificate: "https://yourdomain.com/uploads/documents/12.empid.pdf",
    ug_certificate: "https://yourdomain.com/uploads/documents/ug.empid.pdf",
    pg_certificate: "https://yourdomain.com/uploads/documents/pg.empid.pdf",
    phd_certificate: "https://yourdomain.com/uploads/documents/phd.empid.pdf"
  },  work_experience: [
    {
      company_name: "ABC",
      designation: "Intern",
      start_date: new Date("2025-05-19"),
      end_date: new Date("2025-07-19"),
      role_description: "Assisted in backend API development"
    }
  ]},
    ];
    return(
        <>
       <div className="info-box rounded rounded-2 mt-4 ms-4 p-2 border border-black">
            <div className="info-box-content p-3 bg-white">
                <h6 className="border-bottom fw-semibold">Employees</h6>
                    <ul className="list-unstyled">
                    {Employees.map((item,Idx) => (
                        <li key={Idx} className="rounded mb-2 mt-2 d-flex justify-content-between align-items-center text-dark bg-default px-3 py-3 shadow-sm" >
                            <img src={item.profile} alt="profile" className="rounded-circle profile-photo ms-2"/>
                            <span>{item.fullName}</span>
                            <div className="icons"> 
                           <button className="icon-button" onClick={() => {setSelectedEmployee(item); setShowModal(true);}}> <FaEye title="View employee Info" className="me-2" >
                            </FaEye></button>
                            <button className="icon-button"><MdFileDownload title="Download Info" className="ms-2"></MdFileDownload></button>
                            </div>
                        
                        </li>

                      

                ))}

                 </ul>
            </div>
            
       </div>
       {showModal && <EmployeeModal show= {showModal} onClose={() => setShowModal(false)} employee={selectedEmployee}  /> }
       </>
         
    );
};
export default EmployeeBox;
