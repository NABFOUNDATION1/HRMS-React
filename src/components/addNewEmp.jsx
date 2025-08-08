import React, { useState } from "react";
import { Modal, Tabs, Tab, Button } from "react-bootstrap";
import { useImmer } from "use-immer";
import ConfirmDialog from "./ConfirmDialog";

const AddNewEmp = ({ show, onClose, onAdd }) => {
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  const [formData, setFormData] = useImmer({
    firstName: "",
    lastName: "",
    fullName: "",
    employeeID: "",
    userID: "",
    password: "",
    dob: new Date(),
    gender: "",
    designation: "",
    department: "",
    contact: {
      phone: "",
      email: "",
      alternate_phone: ""
    },
    address: {
      line: "",
      city: "",
      state: "",
      postal_code: "",
      country: ""
    },
    blood_group: "",
    emergency_contact: {
      name: "",
      relation: "",
      phone: ""
    },
    bank_details: {
      account_number: "",
      acc_holder_name: "",
      ifsc_code: "",
      branch: "",
      passbook: "",
      pan_card: ""
    },
    profile: "",
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
        role_description: ""
      }
    ]
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((draft) => {
      draft[name] = value;
    });
  };

  const handleConfirmAdd = () => {
    onAdd(formData);
    setShowConfirmDialog(false);
    onClose();
  };

  return (
    <>
      <Modal show={show} centered backdrop="static" onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Employee</Modal.Title>
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
        title="Add New Employee"
        message="Are you sure you want to add a new Employee?"
      />}
    </>
  );
};

export default AddNewEmp;