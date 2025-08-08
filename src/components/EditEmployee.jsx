import React, {useState} from "react";
import {Modal,Tabs,Tab, Button} from "react-bootstrap";
import { useImmer } from "use-immer";

const EditEmployee = ({showModal,onClose,employee}) =>
{
    console.log("Modal Rendering");
    const [formData, setFormData] = useImmer(employee);
    const [isEdited, setIsEdited] = useState(false);
//this function is written so that the file can be sent to the server , stored there and the path of the stored file is received 
    const handleFileUpload = async (e,path)=>
    {
        const file = e.target.files[0];
        if(!file)
            return;
        const uploadData = new FormData();
        uploadData.append("profile",file);

        try
        {
            const res = await fetch(`/api/upload/${path}`,{
                method: "POST",
                body: uploadData
            });

            if(!res.ok)
            throw new Error("File Upload Failed");

            const data = await res.json();
            if(data.filePath)
            {
                setFormData((draft)=> {draft.profile = data.filePath});
                setIsEdited(true);
            }
        }
        catch(err)
        {
            console.error("Upload Failed",err);
        }
    };

    const handleUpdate = (e) =>
    {
        const{name,value} = e.target;
        setFormData((draft)=> {draft[name] = value;
            setIsEdited(true);

         });
    }
    const handleNestedUpdate = (section,key,value) =>
    {
        setFormData((draft) =>
        {
            draft[section][key] = value;
            setIsEdited(true);
        });
    };
    const handleWorkExperienceChange = (index, field, value) => {
        setFormData(draft => {
          draft.work_experience[index][field] = value;
          setIsEdited(true);
        });
      };
    const handleSubmit = (e)=>
    {
        e.preventDefault();
        if(isEdited)
        {
            const confirm = window.confirm("Are you sure you want to make these changes ?");
            if(confirm)
            { 
                //api call to be made here to save the data 
                 console.log("Updated employee data:", formData);
                 onClose();
            }
            else
            {
                alert("No changes made");
            }

        }
    };


    return(
            <Modal show={showModal} onHide={onClose} centered backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>{employee.firstName}'s Profile </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Tabs defaultActiveKey="profile" id="edit-profile-tabs" className="mb-3">
                        <Tab eventKey="profile" title="Profile">
                            <h6> Edit Basic details:</h6>
                            <form>
                                <div className="row mt-2">
                                <label className="col" htmlFor={`firstName-${formData.employeeID}`}>First Name</label>
                                <input name="firstName" className="col" id={`password-${formData.employeeID}`} type="text" value={formData.firstName} onChange={handleUpdate}/>     
                                </div>
                                <div className="row mt-2">
                                <label className="col" htmlFor={`lastName-${formData.employeeID}`}>Last Name</label>
                                <input name="lastName" className="col" id={`password-${formData.employeeID}`} type="text" value={formData.lastName} onChange={handleUpdate}/>     
                                </div>
                                <div className="row mt-2">
                                <label className="col" htmlFor={`fullName-${formData.employeeID}`}>Full Name as per Aadhar</label>
                                <input name="fullName" className="col" id={`password-${formData.employeeID}`} type="text" value={formData.fullName} onChange={handleUpdate}/>     
                                </div>
                                <div className="row mt-2">
                                <label className="col" htmlFor={`employeeID-${formData.employeeID}`}>Employee ID</label>
                                <input name="employeeID" className="col" id={`password-${formData.employeeID}`} type="text" value={formData.employeeID} onChange={handleUpdate} disabled/>     
                                </div>
                                <div className="row mt-2">
                                <label className="col" htmlFor={`userID-${formData.employeeID}`}>User ID</label>
                                <input name="userID" className="col" id={`password-${formData.employeeID}`} type="text" value={formData.userID} onChange={handleUpdate}/>     
                                </div>
                                <div className="row mt-2">
                                <label className="col" htmlFor={`password-${formData.employeeID}`}>Password</label>
                                <input name="password" className="col" id={`password-${formData.employeeID}`} type="password" value={formData.password} onChange={handleUpdate}/>     
                                </div>
                                <div className="row mt-2">
                                <label className="col" htmlFor={`gender-${formData.employeeID}`}>Gender</label>
                                <input name="gender" className="col" type="text" id={`gender-${formData.employeeID}`} value={formData.gender} onChange={handleFileUpload}/>
                                </div>
                                <div className="row mt-2">
                                <label className="col" htmlFor={`dob-${formData.employeeID}`}> Date Of Birth</label>
                                <input name="dob" className="col" type="date" id={`dob-${formData.employeeID}`} value={formData.dob?.toISOString().split("T")[0]} onChange={handleUpdate}/>
                                </div>
                                <div className="row mt-2">
                                <label className="col" htmlFor={`designation-${formData.employeeID}`} > Designation </label>
                                <input name="designation "className="col" type="text" id={`designation-${formData.employeeID}`} value={formData.designation} onChange={handleUpdate}/> 
                                </div>    
                                <div className="row mt-2">
                                <label className="col" htmlFor={`department-${formData.employeeID}`} > Department </label>
                                <input name="department" className="col" type="text" id={`department-${formData.employeeID}`} value={formData.department} onChange={handleUpdate}/> 
                                </div>         
                            </form>

                        </Tab>
                        <Tab eventKey="contact" title="Contact">
                            <h6> Edit Contact Details </h6>
                            <form>
                            

                            <div className="row mt-2">
                            <label className="col" htmlFor={`phone-${formData.employeeID}`}>Contact Number</label>
                            <input className="col" id={`phone-${formData.employeeID}`} type="text" value={formData.contact.phone} onChange={(e)=> handleNestedUpdate("contact","phone",e.target.value)}/>
                            </div>


                            <div className="row mt-2">
                            <label className="col" htmlFor={`email-${formData.employeeID}`}>Email Address </label>
                            <input className="col" id={`email-${formData.employeeID}`} type="text" value={formData.contact.email} onChange={(e)=> handleNestedUpdate("contact","email",e.target.value)}/>
                            </div>

                            <div className="row mt-2">
                            <label className="col" htmlFor={`alternate_phone-${formData.employeeID}`}>Alternate Contact Number </label>
                            <input className="col" id={`alternate_phone-${formData.employeeID}`} type="text" value={formData.contact.alternate_phone} onChange={(e)=> handleNestedUpdate("contact","alternate_phone",e.target.value)}/>
                            </div>

                            <div className="row mt-2">
                            <label className="col" htmlFor={`telecom-${formData.employeeID}`}>Telecom</label>
                            <input className="col" id={`telecom-${formData.employeeID}`} type="text" value={formData.contact.telecom} onChange={(e)=> handleNestedUpdate("contact","telecom",e.target.value)}/>
                            </div>
                            <div className="row mt-2">
                            <label className="col" htmlFor={`name-${formData.employeeID}`}>Emergency Contact </label>
                            <input className="col" id={`name-${formData.employeeID}`} type="text" value={formData.emergency_contact.name} onChange={(e)=> handleNestedUpdate("emergency_contact","name",e.target.value)}/>
                            </div>
                            <div className="row mt-2">
                            <label className="col" htmlFor={`relation-${formData.employeeID}`}>Relation</label>
                            <select id={`relation-${formData.employeeID}`} value={formData.emergency_contact.relation} onChange={(e)=> handleNestedUpdate("emergency_contact","relation",e.target.value)} >
                                <option> Parent </option>
                                <option> Spouse </option>
                                <option> Guardian</option>
                                <option> Other </option>
                            </select>
                            </div>
                            </form>
                        </Tab>
                        <Tab eventKey="address" title="Address">
                            <h6>Edit Address Details</h6>
                        <form>
                            <div className="row mt-2">
                            <label className="col" htmlFor={`line-${formData.employeeID}`}>Address</label>
                            <textarea className="col" id={`line-${formData.employeeID}`} type="textArea" value={formData.address.line} onChange={(e)=> handleNestedUpdate("address","line",e.target.value)}></textarea>
                            </div>

                            <div className="row mt-2">
                            <label className="col" htmlFor={`city-${formData.employeeID}`}>City </label>
                            <input className="col" id={`city-${formData.employeeID}`} type="text" value={formData.address.city} onChange={(e)=> handleNestedUpdate("address","city",e.target.value)}/>
                            </div>

                            <div className="row mt-2">
                            <label className="col" htmlFor={`state-${formData.employeeID}`}>State </label>
                            <input className="col" id={`state-${formData.employeeID}`} type="text" value={formData.address.state} onChange={(e)=> handleNestedUpdate("address","state",e.target.value)}/>
                            </div>


                            <div className="row mt-2">
                            <label className="col" htmlFor={`postal_code-${formData.employeeID}`}>Postal Code</label>
                            <input className="col" id={`postal_code-${formData.employeeID}`} type="text" value={formData.address.postal_code} onChange={(e)=> handleNestedUpdate("address","postal_code",e.target.value)}/>
                            </div>

                            <div className="row mt-2">
                            <label className="col" htmlFor={`country-${formData.employeeID}`}>Country</label>
                            <input className="col" id={`country-${formData.employeeID}`} type="text" value={formData.address.country} onChange={(e)=> handleNestedUpdate("address","country",e.target.value)}/>
                            </div>   
                            </form>
                        </Tab>
                        <Tab eventKey="education" title="Education">
                        <form>
                        <div className="row mt-2">
                            <label className="col" htmlFor={`10thBoard-${formData.employeeID}`}>10th Board</label>
                            <input className="col" type="file" id={`10thBoard-${formData.employeeID}`} onChange={(e)=>handleFileUpload(e,"education/certificates")}/>
                        </div>
                        <div className="row mt-2">
                            <label className="col" htmlFor={`12thBoard-${formData.employeeID}`}>12th Board</label>
                            <input className="col" type="file" id={`12thBoard-${formData.employeeID}`} onChange={(e)=>handleFileUpload(e,"education/certificates")}/>
                        </div>
                        <div className="row mt-2">
                            <label className="col" htmlFor={`undergraduate-${formData.employeeID}`}>UnderGraduate Degree</label>
                            <input className="col" type="file" id={`undergraduate-${formData.employeeID}`} onChange={(e)=>handleFileUpload(e,"education/certificates")}/>
                        </div>
                        <div className="row mt-2">
                            <label className="col" htmlFor={`postgraduate-${formData.employeeID}`}>Post Graduate Degree</label>
                            <input className="col" type="file" id={`postgraduate-${formData.employeeID}`} onChange={(e)=>handleFileUpload(e,"education/certificates")}/>
                        </div>            
                        </form>
                        </Tab>
                        <Tab eventKey="work_experience" title="Work">
                            <form>
                            {formData.work_experience.map((NavItem,index) => (
                            <>
                                <div className="row mt-2">
                                    <label className="col" htmlFor={`company_name-${index}-${formData.employeeID}`}> Company Name  </label>
                                    <input className="col" type="text" id= {`company_name-${index}-${formData.employeeID}`} value= {NavItem.company_name} onChange={(e)=>handleWorkExperienceChange({index},"company_name",e.target.value)}/>
                                </div>
                                <div className="row mt-2">
                                    <label className="col" htmlFor={`designation-${index}-${formData.employeeID}`}> Designation  </label>
                                    <input className="col" type="text" id= {`designation-${index}-${formData.employeeID}`} value={NavItem.designation} onChange={(e)=>handleWorkExperienceChange({index},"designation",e.target.value)}/>
                                </div>
                                <div className="row mt-2">
                                    <label className="col" htmlFor={`start_date-${index}-${formData.employeeID}`}> Start Date  </label>
                                    <input className="col" type="date" id= {`startDate-${index}-${formData.employeeID}`} value={NavItem.start_date ? NavItem.start_date.toISOString().split("T")[0] : ""} onChange={(e)=>handleWorkExperienceChange({index},"start_date",e.target.value)}/>
                                </div>
                                <div className="row mt-2">
                                    <label className="col" htmlFor={`end_date-${index}-${formData.employeeID}`}> End Date  </label>
                                    <input className="col" type="date" id= {`startDate-${index}-${formData.employeeID}`} value={NavItem.start_date ? NavItem.start_date.toISOString().split("T")[0] : ""}  onChange={(e)=>handleWorkExperienceChange({index},"start_date",e.target.value)}/>
                                </div>

                            </>

                            ))}
                           
                            </form>
                            
                        </Tab>

                    </Tabs>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="btn btn-success" onClick={handleSubmit}> Update Details</Button>
                    <Button className="btn btn-danger" onClick={onClose}> Cancel </Button>
                </Modal.Footer>
            </Modal>
    )

};
export default EditEmployee;