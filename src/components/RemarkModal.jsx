import React, { useState } from "react";
import {Modal } from "react-bootstrap";
const RemarkModal = ({show , onClose , onAdd}) =>
{
    const[remark,setRemark] = useState("");
    const handleAdd = () =>
    {
        onAdd(remark);
        setRemark("");
        onClose();
    }
    return(
        <Modal show={show} onHide= {onClose} centered backdrop="static">
            <Modal.Header closeButton> 
                <Modal.Title>
                    Add Remarks
                </Modal.Title> 
             </Modal.Header>
             <Modal.Body> 
                <label htmlFor="remark">Remark: </label>
                <textarea id="remark" className="mt-2 form-control" placeholder="Enter your remark here" value={remark} onChange={(e)=> setRemark(e.target.value)}></textarea>
             </Modal.Body>
             <Modal.Footer>
                <button className="btn btn-success" onClick={handleAdd}>Add Remark</button>
                <button className="btn btn-danger" onClick={onClose}> Cancel</button>
             </Modal.Footer>
        </Modal>
    )
};

export default RemarkModal;