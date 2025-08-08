import React from "react";
import {Modal} from "react-bootstrap";


const ConfirmDialog = ({show, onConfirm, onCancel , title , message}) =>
{
    return(
    <Modal show = {show} centered backdrop="static">
        <Modal.Header > 
        <Modal.Title> {title} </Modal.Title>
        </Modal.Header>
        <Modal.Body> {message} </Modal.Body>
        <Modal.Footer>
            <button className="btn btn-secondary" onClick={onCancel}> Cancel </button> 
            <button className="btn btn-danger" onClick={onConfirm}> Confirm </button>
        </Modal.Footer>
    </Modal>
    );
}

export default ConfirmDialog;

