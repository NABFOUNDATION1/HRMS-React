import React , {useState} from "react";
import { MdFileDownload } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { MdEditSquare } from "react-icons/md";
import { ImBin } from "react-icons/im";
import EmployeeModal from "./EmployeeModal";
import ConfirmDialog from "./ConfirmDialog";
import EditEmployee from "./EditEmployee";
import "../manageEmp.css";
import AddNewEmp from "./addNewEmp";

const ManageEmployeeBox = () =>
{
    const[showDetails, setShowDetails] = useState(false);
    const[showEdit , setShowEdit] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const[pendingDeleteIndex, setPendingDeleteIndex] = useState(null);
    const[showConfirmDialog, setShowConfirmDialog] = useState(false);
    const[showAddModal, setShowAddModal] = useState(false);
    
    
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
      },
      contract:
      {
        start_date : new Date("2023-05-15"),
        end_date: new Date("2025-09-12")
      },
      
      work_experience: [
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
      },
      contract:
      {
        start_date : new Date("2023-05-15"),
        end_date: new Date("2025-09-12")
      },
      
      work_experience: [
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
      },
      contract:
      {
        start_date : new Date("2023-05-15"),
        end_date: new Date("2025-09-12")
      },
      
      work_experience: [
        {
          company_name: "ABC",
          designation: "Intern",
          start_date: new Date("2025-05-19"),
          end_date: new Date("2025-07-19"),
          role_description: "Assisted in backend API development"
        }
      ]},
      {firstName:"Ali", lastName:"Baig", fullName:"Ali Baig", employeeID:"EMP1001", userID:"Kedar.Rane", password:"128de",  dob:new Date("1995-10-3"), gender:"Male", designation:"SPA", department:"IT", contact:{phone:"18282683",email:"kedar@gmail.com" , alternate_phone:"82362136136"}, address:{line:"123, ABC Street" , city:"Mumbai", state:"Maharashtra", postal_code:"400051", country:"India"}, blood_group:"A+", emergency_contact:{name:"XXXX", relation:"XXXX" , phone:"3246736874"},
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
      {firstName:"Ali", lastName:"Baig", fullName:"Ali Baig", employeeID:"EMP1001", userID:"Kedar.Rane", password:"128de",  dob:new Date("1995-10-3"), gender:"Male", designation:"SPA", department:"IT", contact:{phone:"18282683",email:"kedar@gmail.com" , alternate_phone:"82362136136"}, address:{line:"123, ABC Street" , city:"Mumbai", state:"Maharashtra", postal_code:"400051", country:"India"}, blood_group:"A+", emergency_contact:{name:"XXXX", relation:"XXXX" , phone:"3246736874"},
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
      },
      contract:
      {
        start_date : new Date("2023-05-15"),
        end_date: new Date("2025-09-12")
      },
      
      work_experience: [
        {
          company_name: "ABC",
          designation: "Intern",
          start_date: new Date("2025-05-19"),
          end_date: new Date("2025-07-19"),
          role_description: "Assisted in backend API development"
        }
      ]}
        ];
        const [employees , setEmployees]  = useState(Employees);
        const HandleDelete = (idx) => setEmployees(prev => prev.filter((_,i)=> i!== idx));
        //this function will also contain the logic to delete the particular employee from the database 
        const confirmDelete = () => {
            HandleDelete(pendingDeleteIndex);
            setShowConfirmDialog(false);
            setPendingDeleteIndex(null);
          };

          const handleAddEmployee = (newEmp) => {
            setEmployees((prev) => [...prev, newEmp]);
          };
          
       
    return(
        <>
        <div className="box rounded rounded-2 mt-4 ms-4 p-2 border border-black">
             <div className="box-content p-3 bg-white">
                 <h6 className="border-bottom fw-semibold">Employees</h6>
                     <ul className="list-unstyled">
                     {employees.map((item,Idx) => (
                         <li key={Idx} className="rounded mb-2 mt-2 d-flex justify-content-between align-items-center text-dark bg-default px-3 py-3 shadow-sm" >
                             <img src={item.profile} alt="profile" className="rounded-circle profile-photo ms-2"/>
                             <span>{item.fullName}</span>
                             <spam>{item.designation}-{item.department}</spam>
                             <div className="icons"> 
                            <button className="icon-button" onClick={() => {setSelectedEmployee(item); setShowDetails(true);}}> <FaEye title="View employee Info" className="me-2" >
                             </FaEye></button>
                             <button className="icon-button" onClick={()=> {setSelectedEmployee(item); setShowEdit(true);}}> <MdEditSquare title="Edit Info." className="ms-2"></MdEditSquare> </button>
                             <button className="icon-button"><MdFileDownload title="Download Info" className="ms-2"></MdFileDownload></button>
                             <button className="icon-button"><ImBin title="Delete" className="ms-2" onClick={()=> {setPendingDeleteIndex(Idx); setShowConfirmDialog(true);}}></ImBin></button>
                             </div>
                            
                             
                         
                         </li> 
                 ))}
 
                  </ul>
             </div>

                <div className="mt-3 d-flex justify-content-center align-items-center">
                     <button className="btn btn-primary " onClick={()=> setShowAddModal(true)}> Add New </button>
                </div>
             
        </div>     
        {showConfirmDialog && <ConfirmDialog show={showConfirmDialog} onConfirm={confirmDelete} onCancel={() => setShowConfirmDialog(false)} title="Confirm Deletion" message="Are you sure you want to permanently remove this employee ? "/> }
        {showDetails && <EmployeeModal show= {showDetails} onClose={() => setShowDetails(false)} employee={selectedEmployee}  /> }
        {showEdit && <EditEmployee showModal ={showEdit} onClose={() => setShowEdit(false)} employee={selectedEmployee}/>}
        <AddNewEmp
  show={showAddModal}
  onClose={() => setShowAddModal(false)}
  onAdd={handleAddEmployee}
/>        
        </>
          
     );
 };

 export default ManageEmployeeBox;