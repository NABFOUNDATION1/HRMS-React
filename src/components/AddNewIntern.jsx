import React, { useState } from "react";
import { Modal, Tabs, Tab, Button } from "react-bootstrap";
import { useImmer } from "use-immer";
import ConfirmDialog from "./ConfirmDialog";

const AddNewIntern = ({ show, onClose, onAdd }) => {
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  const [formData, setFormData] = useImmer(
    {firstName:"", 
     lastName:"",
     fullName:"",
     employeeID:"",
     userID:"",
     password:"",  
     dob:new Date(), 
     gender:"", 
     designation:"", 
     department:"", 
     contact:
     {phone:"",
      email:"" ,
      alternate_phone:""
    },
     address:
     {line:"",
       city:"", 
       state:"", 
       postal_code:"", 
       country:""},
       blood_group:"",
       emergency_contact:
       {name:"",
        relation:"" ,
        phone:""
      },
    bank_details: {
      account_number: "",
      acc_holder_name: "",
      ifsc_code: "",
      branch: "",
      passbook: "",
      pan_card: ""
    }, 
    profile:"" ,
    documents: {
tenth_certificate: "",
twelfth_certificate: "",
ug_certificate: "",
pg_certificate: "",
phd_certificate: ""
},
contract:
      {
        start_date : new Date(),
        end_date: new Date()
      },
  work_experience: [
{
  company_name: "",
  designation: "",
  start_date: new Date(),
  end_date: new Date(),
  role_description:""
}
]});


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((draft) => {
      draft[name] = value;
    });
  };
  const handleNestedChange = (section,key,value) =>
  {
    setFormData((draft) => 
    {
      draft[section][key] = value;
    })
  }
  const handleWorkExperienceChange = (index,field,value) =>
  {
    setFormData((draft) => 
    {
      draft.work_experience[index][field] = value;
    })
  }

  const handleConfirmAdd = () => {
    onAdd(formData);
    setShowConfirmDialog(false);
    onClose();
  };

  return (
    <>
      <Modal show={show} centered backdrop="static" onHide={onClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Add New Intern</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Tabs defaultActiveKey="profile" id="add-new-employee" className="mb-3">
            <Tab eventKey="profile" title="Profile">
              <form>
                <div className="row mt-2">
                  <label className="col">First Name</label>
                  <input className="col" name="firstName" value={formData.firstName} type="text" onChange={handleChange} />
                </div>
                <div className="row mt-2">
                  <label className="col">Last Name</label>
                  <input className="col" name="lastName" value={formData.lastName} type="text" onChange={handleChange} />
                </div>
                <div className="row mt-2">
                  <label className="col">Full Name as per Aadhar</label>
                  <input className="col" name="fullName" value={formData.fullName} type="text" onChange={handleChange} />
                </div>
                <div className="row mt-2">
                  <label className="col">Employee ID</label>
                  <input className="col" placeholder="Auto generated" disabled />
                </div>
                <div className="row mt-2">
                  <label className="col">User ID</label>
                  <input className="col" name="userID" value={formData.userID} type="text" onChange={handleChange} />
                </div>
                <div className="row mt-2">
                  <label className="col">Password</label>
                  <input className="col" name="password" value={formData.password} type="password" onChange={handleChange} />
                </div>
                <div className="row mt-2">
                  <label className="col">Gender</label>
                  <select className="col" name="gender" value={formData.gender} onChange={handleChange}>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Transgender</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="row mt-2">
                  <label className="col">Date of Birth</label>
                  <input
                    className="col"
                    name="dob"
                    type="date"
                    value={formData.dob?.toISOString().split("T")[0]}
                    onChange={handleChange}
                  />
                </div>
                <div className="row mt-2">
                  <label className="col">Department</label>
                  <select className="col" name="department" value={formData.department} onChange={handleChange}>
                    <option>Project</option>
                    <option>Development</option>
                    <option>HR</option>
                    <option>IT</option>
                  </select>
                </div>
                <div className="row mt-2">
                  <label className="col">Designation</label>
                  <select className="col" name="designation" value={formData.designation} onChange={handleChange}>
                    <option>Team Lead</option>
                    <option>Associate</option>
                    <option>Intern</option>
                  </select>
                </div>
                <div className="row mt-2">
                   <label className="col">Date of Joining </label>
                    <input type="date" name="start_date "value={formData?.contract.start_date.toISOString().split("T")[0]} onChange={(e) => handleNestedChange("contract",e.target.name,e.target.value)}></input>
                </div>
                <div className="row mt-2">
                    <label className="col">End Date</label>
                    <input type="date" name="end_date" value={formData?.contract.end_date.toISOString().split("T")[0]} onChange={(e) => handleNestedChange("contract",e.target.name,e.target.value)}></input>
                </div>  
              </form>
            </Tab>
            <Tab eventKey="contact" title="Contact">
              <form>
                <div className="row mt-2">
                <label className="col">Phone Number</label>
                <input className="col" type="text" name="phone" value={formData.contact.phone} onChange={(e) => handleNestedChange("contact",e.target.name,e.target.value)}></input>
                </div>
                <div className="row mt-2">
                  <label className="col">Email Address</label>
                  <input className="col" type="text" name="email" value={formData.contact.email} onChange={(e) => handleNestedChange("contact",e.target.name,e.target.value)}></input>
                </div>
                <div className="row mt-2">
                  <label className="col">Alternate Phone Number</label>
                  <input className="col" type="text" name="alternate_phone" value={formData.contact.alternate_phone} onChange={(e) => handleNestedChange("contact",e.target.name,e.target.value)}></input>
                </div>
                <div className="row mt-2">
                  <label className="col">Address</label>
                </div>
                <div className="row mt-2">
                  <textarea className="col" type="text" name="line" value={formData.address.line} onChange={(e) => handleNestedChange("address",e.target.name,e.target.value)}></textarea>
                </div>
                <div className="row mt-2">
                  <label className="col">City</label>
                  <input className="col" type="text" value={formData.address.city} onChange={(e) => handleNestedChange("address",e.target.name,e.target.value)}></input>
                </div>
                <div className="row mt-2">
                  <label className="col">State</label>
                  <input className="col" name="state" type="text" value={formData.address.state} onChange={(e) => handleNestedChange("address",e.target.name,e.target.value)}></input>
                </div>
                <div className="row mt-2">
                  <label className="col">Postal Code</label>
                  <input className="col" name="postal_code" type="text" value={formData.address.postal_code} onChange={(e) => handleNestedChange("address",e.target.name,e.target.value)}></input>
                </div>
                <div className="row mt-2">
                  <label className="col">Emergency contact</label>
                  <input className="col" type="text" name="phone" value={formData.emergency_contact.phone} onChange={(e) => handleNestedChange("emergency_contact",e.target.name,e.target.value)}></input>
                </div>
                <div className="row mt-2">
                  <label className="col"> Name </label>
                  <input className="col" name="name" type="text" value={formData.emergency_contact.name} onChange={(e) => handleNestedChange("emergency_contact",e.target.name,e.target.value)}></input>
                </div>
                <div className="row mt-2">
                  <label className="col"> Emergency Contact Relation </label>
                  <select className="col" name="relation" value={formData.emergency_contact.relation} onChange={(e) => handleNestedChange("emergency_contact",e.target.name,e.target.value)}>
                    <option> Father </option>
                    <option> Mother </option>
                    <option> Local Guardian </option>
                    <option> Other </option>
                  </select>
                </div>     
              </form>
            </Tab>
            <Tab eventKey="education" title="Education">
              <form>
                <div className="row mt-2">
                  <label className="col"> 10th Board Certificate </label>
                  <input className="col" type="file"></input>
                </div>
                <div className="row mt-2">
                  <label className="col"> 12th Board Certificate </label>
                  <input className="col" type="file"></input>
                </div>
                <div className="row mt-2">
                  <label className="col"> UG degree certifcate / marksheet </label>
                  <input className="col" type="file"></input>
                </div>
                <div className="row mt-2">
                  <label className="col">PG degree certificate / marksheet </label>
                  <input className="col" type="file"></input>
                </div>

              </form>
            </Tab>
            <Tab eventKey="bank" title="Bank">
                <div className="row mt-2">
                  <label className="col"> Account Number </label>
                  <input className="col" name="account_number" value={formData.bank_details.account_number} onChange={(e)=> handleNestedChange("bank_details",e.target.name,e.target.value)} type="text"></input>
                </div>
                <div className="row mt-2">
                <label className="col"> Account Holder Name </label>
                <input className="col" name="acc_holder_name" value={formData.bank_details.acc_holder_name} onChange={(e)=> handleNestedChange("bank_details",e.target.name,e.target.value)} type="text"></input>
                </div>
                <div className="row mt-2">
                <label className="col"> IFSC Code </label>
                <input className="col" name="ifsc_code" value={formData.bank_details.ifsc_code} onChange={(e)=> handleNestedChange("bank_details",e.target.name,e.target.value)} type="text"></input>
                </div>
                <div className="row mt-2"> 
                <label className="col"> IFSC Code </label>
                <input className="col" name="ifsc_code" value={formData.bank_details.ifsc_code} onChange={(e)=> handleNestedChange("bank_details",e.target.name,e.target.value)} type="text"></input>
                </div>
                <div className="row mt-2"> 
                <label className="col"> Branch </label>
                <input className="col" name="branch" value={formData.bank_details.branch} onChange={(e)=> handleNestedChange("bank_details",e.target.name,e.target.value)} type="text"></input>
                </div>
                <div className="row mt-2"> 
                <label className="col"> PAN Card </label>
                <input className="col" name="branch" value={formData.bank_details.pan_card} onChange={(e)=> handleNestedChange("bank_details",e.target.name,e.target.value)} type="file"></input>
                </div>
            </Tab>
            <Tab eventKey="work_experience" title="Work Experience">
              <Button
                  className="btn btn-secondary my-2"
                  onClick={() =>
                    setFormData(draft => {
                      draft.work_experience.push({
                        company_name: "",
                        designation: "",
                        start_date: new Date(),
                        end_date: new Date(),
                        role_description: ""
                      });
                    })
                  }
                >
                  + Add Experience
              </Button>
              <form>
                {formData.work_experience.map((item,index) => (
                  <div key={index}>
                  <div className="row mt-2">
                    <label className="col"> Company Name </label>
                    <input className="col" name="company_name" type="text" value={item.company_name} onChange={(e) => handleWorkExperienceChange(index,"company_name",e.target.value)}></input>
                  </div>
                  <div className="row mt-2">
                    <label className="col"> Designation </label>
                    <input className="col" type="text" name="designation" value={item.designation} onChange={(e) => handleWorkExperienceChange(index,"designation",e.target.value)}></input>
                  </div>
                  <div className="row mt-2">
                    <label className="col"> Start Date </label>
                    <input className="col" type="date"  name="start_date" value={item.start_date.toISOString().split("T")[0]} onChange={(e) => handleWorkExperienceChange(index,"start_date",e.target.value)}></input>
                  </div>

                  <div className="row mt-2">
                    <label className="col"> End Date </label>
                    <input className="col" name="end_date" type="date"  value={item.end_date.toISOString().split("T")[0]} onChange={(e) => handleWorkExperienceChange(index,"end_date",e.target.value)}></input>
                  </div>
                  <div className="row mt-2">
                    <label className="col">Role description</label>

                  </div>
                  <div className="row mt-2">
                    <textarea className="col" name="role_description" value={item.role_description} onChange={(e) => handleWorkExperienceChange(index,"role_description",e.target.value)}> </textarea>
                  </div>

                  </div>
                ))}
              </form>
             
            </Tab>
          </Tabs>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn btn-danger" onClick={onClose}>
            Cancel
          </Button>
          <Button className="btn btn-warning" onClick={() => setShowConfirmDialog(true)}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>

     
      {showConfirmDialog && <ConfirmDialog
        show={showConfirmDialog}
        onConfirm={handleConfirmAdd}
        onCancel={() => setShowConfirmDialog(false)}
        title="Add New Intern"
        message="Are you sure you want to add a new Intern?"
      />}
    </>
  );
};


export default AddNewIntern;