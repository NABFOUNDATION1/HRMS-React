import React, {useState} from "react";

import { IoMdMail } from "react-icons/io";
import { MdOutlinePersonPin } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { IoPerson } from "react-icons/io5";
import { FaLock } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { HiCalendarDateRange } from "react-icons/hi2";
import { LiaFileContractSolid } from "react-icons/lia";
import { Button } from "react-bootstrap";
import { FaEye } from "react-icons/fa";
import { RxUpdate } from "react-icons/rx";
import EditProfileModal from "./EditProfileModal";
import EmployeeModal from "./EmployeeModal";

function getContract(start,end)
{
    const diffInMs = end - start;
    const msInYear =  1000 * 60 * 60 * 24 * 365.25; //to account for leap year

    let totalYears = diffInMs / msInYear;
    let Years = Math.floor(totalYears);

    const remMonths = (totalYears - Years) *12; // 1 year = 12 months
    let months = Math.floor(remMonths);
    if(months === 12)
    {
       months=0;
       Years+=1;
    }
    return `${Years} Year(s) , ${months} Month(s)`
}
const ProfileDetails = () =>
{
    const[showModal, setShowModal] = useState(false);
    const[show , setShow ] = useState(false);
    {/*Details to be fetched for a particular employee*/}
    const details = {firstName:"Kedar", lastName:"Rane", fullName:"Kedar Rane", employeeID:"EMP1001", userID:"Kedar.Rane", 
        password:"128de",  dob:new Date("1995-10-3"), doj:new Date("2023-04-23"), gender:"Male", designation:"SPA", department:"IT", 
        contact:{phone:"18282683",email:"kedar@gmail.com" , alternate_phone:"82362136136", telecom:"5678"},
         address:{line:"123, ABC Street" , city:"Mumbai", state:"Maharashtra", postal_code:"400051", country:"India"}, 
         blood_group:"A+", emergency_contact:{name:"XXXX", relation:"XXXX" , phone:"3246736874"},
         contract:{
            doj:new Date("2023-04-23"),
            doe:new Date("2026-09-12")
         },
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
  ]};
  
    return(
        <>
        <div className="display-box bg-white border border-2 border-black">
            <div className="d-flex flex-column align-items-center">
                <img src="/images/avatar.jpg" alt="" className="rounded rounded-circle" style={{width:"60px",  height:"60px"}}/>
                <span>{details.firstName} {details.lastName}</span>
                <span >{details.designation}</span>
            </div>
            <div className="border border-bottom border-black border-1"></div>
           
            <div className="row text-center p-2">
                <div className="col-md-4">
                    <DescriptionItem Icon={MdOutlinePersonPin} desc="Employee ID"/>
                    <DetailItem Detail={details.employeeID} />
                </div>
                <div className="col-md-4">
                    <DescriptionItem Icon={IoMdMail} desc="Email ID"/>
                    <DetailItem Detail={details.contact.email} />
                </div>
                <div className="col-md-4">
                    <DescriptionItem Icon={BsTelephoneFill} desc="Contact"/>
                    <DetailItem Detail={details.contact.phone} />
                </div>
            </div>
            <div className="row text-center p-2">
                <div className="col-md-4">
                    <DescriptionItem Icon={IoPerson} desc="User ID"/>
                    <DetailItem Detail={details.userID}/>
                </div>
                <div className="col-md-4">
                    <DescriptionItem Icon={FaLock} desc="Password"/>
                    <DetailItem Detail={details.password}/>
                </div>
                <div className="col-md-4">
                    <DescriptionItem Icon={TbDeviceLandlinePhone} desc="Telecom"/>
                    <DetailItem Detail={details.contact.telecom}/>
                </div>
            </div>
            <div className="row text-center p-2">
                <div className="col-md-4">
                    <DescriptionItem Icon={MdDateRange} desc="Date of Birth"/>
                    <DetailItem Detail={details.dob.toDateString()}/>
                </div>
                <div className="col-md-4">
                    <DescriptionItem Icon={HiCalendarDateRange} desc="Date of Joining"/>
                    <DetailItem Detail={details.doj.toDateString()}/>
                </div>
                <div className="col-md-4">
                    <DescriptionItem Icon={LiaFileContractSolid} desc="Contract Period"/>
                    <DetailItem Detail={getContract(details.contract.doj ,details.contract.doe)}/>
                </div>
            </div>
            <div className="row text-center p-2">
                <div className="col-12">
                    <Button className="btn btn-warning me-2"onClick={()=> setShow(true)} ><FaEye className="mb-1"/> View All</Button>
                    <Button className="btn btn-warning ms-2" onClick={()=> setShowModal(true)}><RxUpdate className="mb-1"/>Update </Button>
                </div>
            </div>
            
        </div>
         {show && <EmployeeModal show = {show} onClose = {()=> setShow(false)} employee={details} /> }
         {showModal && <EditProfileModal showModal={showModal} onClose= {()=> setShowModal(false)} employee = {details} />}
         </>
    )
   
};

const DescriptionItem = ({Icon, desc}) =>
{
    return(
        <div>
         <Icon/> <span> {desc}</span>
         </div>
   
    );
};
const DetailItem = ({Detail}) =>
{
    return(
        <>
        <p className="border border-black border-1 p-1">{Detail}</p>
        </>
    );
};
export default ProfileDetails;

/*
THINGS TO BE EDITABLE BY ALL :
PASSWORD 
PROFILE PIC
DEPT 
DESIGNATION
ADDRESS 
CONTACT DETAILS*/ 
