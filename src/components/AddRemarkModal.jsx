import React , {useState} from "react";
import { Modal } from "react-bootstrap";
import ConfirmDialog from "./ConfirmDialog";



const AddRemarkModal = ({show , onAdd , onClose, selectedRequest}) =>
{
    const [remark,setRemark] = useState("");
    
    const [showConfirmDialog,setShowConfirmDialog] = useState(false);
    const handleConfirm = ()=>
    {
        onAdd(remark,selectedRequest);
    }
    return(
        <>
        <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
            <Modal.Title> Add Remarks </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <label htmlFor={`remark-${selectedRequest?.employee_id}`}>
                Enter your Remark for {selectedRequest?.name}'s Leave Request</label>
                <textarea id={`remark-${selectedRequest?.employee_id}`} className="mt-2 form-control" value={remark} onChange={(e)=>{setRemark(e.target.value)} }></textarea>
            </Modal.Body>
            <Modal.Footer>
            <button className="btn btn-warning" onClick={()=> setShowConfirmDialog(true)}> Add </button>
            <button className="btn btn-danger"   onClick={onClose}>Cancel</button>
            </Modal.Footer>
        </Modal>
        {showConfirmDialog && <ConfirmDialog show={showConfirmDialog} onConfirm={handleConfirm} onCancel={()=> setShowConfirmDialog(false)} title="Confirm Adding Remark" message="Are you sure you want to add Remark?" />}
        </>
    );
};
export default AddRemarkModal;
