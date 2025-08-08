import React, {useState} from "react";
import {Modal,Tabs,Tab, Button} from "react-bootstrap";
import { useImmer } from "use-immer";

const EditProfileModal = ({showModal,onClose,employee}) =>
{
    const [formData, setFormData] = useImmer(employee);
    const [isEdited, setIsEdited] = useState(false);
//this function is written so that the file can be sent to the server , stored there and the path of the stored file is received 
    const handleFileUpload = async (e)=>
    {
        const file = e.target.files[0];
        if(!file)
            return;
        const uploadData = new FormData();
        uploadData.append("profile",file);

        try
        {
            const res = await fetch("/api/upload-profile",{
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
                            <h6> Enter the new details:</h6>
                            <form>
                                <div className="row mt-2">
                                <label className="col" htmlFor={`password-${formData.employeeID}`}>Password</label>
                                <input className="col" id={`password-${formData.employeeID}`} type="password" value={formData.password} onChange={handleUpdate}/>     
                                </div>
                                <div className="row mt-2">
                                <label className="col" htmlFor={`profile-${formData.employeeID}`}>Profile Picture</label>
                                <input className="col" type="file" id={`profile-${formData.employeeID}`} onChange={handleFileUpload}/>
                                </div>
                                <div className="row mt-2">
                                <label className="col" htmlFor={`department-${formData.employeeID}`}> Department</label>
                                <input className="col" type="text" id={`department-${formData.employeeID}`} value={formData.department} onChange={handleUpdate}/>
                                </div>
                                <div className="row mt-2">
                                <label className="col" htmlFor={`designation-${formData.employeeID}`} > Designation </label>
                                <input className="col" type="text" id={`designation-${formData.employeeID}`} value={formData.designation} onChange={handleUpdate}/> 
                                </div>         
                            </form>

                        </Tab>
                        <Tab eventKey="contact" title="Contact">
                            <h6> Enter the new Details </h6>
                            <form>
                            <div className="row mt-2">
                                <label className="col" htmlFor={`password-${formData.employeeID}`}>Password</label>
                                <input className="col" id={`password-${formData.employeeID}`} type="password" value={formData.password} onChange={handleUpdate}/>     
                            </div>

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
                            </form>
                        </Tab>
                        <Tab eventKey="address" title="Address">
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
                    </Tabs>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="btn btn-success" onClick={handleSubmit}> Update Details</Button>
                </Modal.Footer>
            </Modal>
    )

};
export default EditProfileModal;