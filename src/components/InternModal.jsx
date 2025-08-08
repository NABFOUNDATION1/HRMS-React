import React from "react";
import {Modal,Tabs,Tab} from "react-bootstrap";
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
const InternModal = ({show,onClose,intern}) =>
{
    if(!intern)
        return null;

    //fetch the details of the employee passed through EmployeeBox 
    return(
        <Modal show={show} onHide={onClose} centered backdrop="static" size="lg">
            <Modal.Header closeButton>
                <Modal.Title> {intern.firstName}'s Details </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Tabs defaultActiveKey="basic" id="employee-details-tabs" className="mb-3">
                        <Tab eventKey="basic" title="Basic">
                            <InfoItem title="First Name" value = {intern.firstName}/>
                            <InfoItem title="Last Name" value= {intern.lastName}/>
                            <InfoItem title = "Full Name as per Aadhar" value= {intern.fullName}/>
                            <InfoItem title = "Intern ID" value= {intern.employeeID}/>
                            <InfoItem title = "User ID" value = {intern.userID}/>
                            <InfoItem title = "Password" value = {intern.password}/>
                            <InfoItem title = "Gender" value = {intern.gender}/>
                            <InfoItem title = "Date of Birth" value = {intern.dob? intern.dob.toLocaleDateString():"N/A"}/>
                            <InfoItem title = "Designation" value = {intern.designation}/>
                            <InfoItem title = "Department" value = {intern.department}/>
                            <InfoItem title = "Duration" value = {getContract(intern.contract.start_date,intern.contract.end_date)} /> 
                        </Tab>
                        <Tab eventKey="contact" title="Contact" >
                            <InfoItem title= "Contact Number" value = {intern.contact.phone}/>
                            <InfoItem title ="Email Address" value = {intern.contact.email}/>
                            <InfoItem title = "Alternate Contact" value = {intern.contact.alternate_phone}/>
                            <InfoItem title = "Address" value = {intern.address.line}/>
                            <InfoItem title = "City" value = {intern.address.city}/>
                            <InfoItem title = "State" value = {intern.address.state}/>
                            <InfoItem title = "Postal Code" value = {intern.address.postal_code}/>
                            <InfoItem title = "Emergency Contact" value = {intern.emergency_contact.phone}/>
                            <InfoItem title = "Name" value = {intern.emergency_contact.name}/>
                            <InfoItem title = "Emergency Contact Relation" value= {intern.emergency_contact.relation}/>
                         </Tab>
                         <Tab eventKey="bank" title="Bank">
                            <InfoItem title = "Account Number" value = {intern.bank_details.account_number}/>
                            <InfoItem title = "Account Holder Name" value = {intern.bank_details.acc_holder_name}/>
                            <InfoItem title = "IFSC Code" value = {intern.bank_details.ifsc_code}/>
                            <InfoItem title = "Branch" value = {intern.bank_details.branch}/>
                            <div className="row justify-content-center align-items-center">
                                <p className="col">Passbook: </p>
                                <a className="col" href={`bank/${intern.internID}/Pan_card`} download> Pan Card</a> 
                            </div>
                         </Tab>
                         {/* file paths will be something like this , user specfic*/}
                         <Tab eventKey="education" title="Education">
                         <div className="row justify-content-center align-items-center">
                                <p className="col">10th Board: </p>
                                <a className="col" href={`certificates/${intern.internID}/10th`} download>10th Board Certificate</a> 
                         </div>
                         <div className="row justify-content-center align-items-center">
                                <p className="col">12th Board: </p>
                                <a className="col" href={`certificates/${intern.internID}/12th`} download>12th Board Certificate</a> 
                         </div>
                         <div className="row justify-content-center align-items-center">
                                <p className="col">Marksheet: </p>
                                <a className="col" href={`certificates/${intern.internID}/UG`} download>Marksheet</a> 
                         </div>
                         </Tab>
                         <Tab eventKey="work" title="Work Experience">
                            {intern.work_experience?.map((item, index) =>(
                                <div key={index} className="workDetails">
                                <InfoItem title="Company Name" value={item.company_name}/>
                                <InfoItem title= "Designation" value={item.designation}/>
                                <InfoItem title="Start Date" value={item.start_date ? item.start_date.toLocaleDateString():"N/A"}/>
                                <InfoItem title= "End Date" value={item.end_date ? item.end_date.toLocaleDateString() : "N/A"}/>
                                <InfoItem title= "Role Description" value={item.role_description}/>
                                </div>
                            ))}

                         </Tab>
                    </Tabs>

                </Modal.Body>

        </Modal>
    );

};

const InfoItem = ({title,value}) =>
{
    return(
        <div className="row justify-content-center align-items-center">
            <p className="col">{title}:</p>
            <p className="col border border-black">{value}</p>
        </div>
    );
};
export default InternModal;