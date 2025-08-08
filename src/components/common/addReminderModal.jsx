import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { RxCross2 } from "react-icons/rx";
import { TiTick } from "react-icons/ti";

const AddReminderModal = ({ show, onClose, onAdd }) => {
  const [text, setText] = useState("");
  const [date, setDate] = useState(null);
  const [color, setColor] = useState("default");

  const handleSubmit = () => {
    if (text && date) {
      onAdd({ text, date, color });
      onClose();
      setText("");
      setDate("");
      setColor("default");
    }
  };

  return (
    <Modal show={show} onHide={onClose} centered backdrop="static" animation={true}>
      <Modal.Header closeButton>
        <Modal.Title>Add Note/Reminder</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3 mt-3" controlId="reminderText">
            <Form.Label>Text</Form.Label>
            <Form.Control
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter Text"
            />
          </Form.Group>
          <Form.Group className="mb-3 mt-3" controlId="reminderDate">
            <Form.Label>Date</Form.Label>
            <Form.Control
             type="date"
             value={date || ""}
             onChange={(e) => setDate(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3 mt-3" controlId="reminderColor">
            <Form.Label>Colour</Form.Label>
            <Form.Select value={color} onChange={(e) => setColor(e.target.value)}>
              <option value="light">Normal</option>
              <option value="warning">Important (Yellow)</option>
              <option value="danger">High Importance (Red)</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={onClose}>
          Cancel <RxCross2 />
        </Button>
        <Button variant="success" onClick={handleSubmit}>
          Save <TiTick />
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddReminderModal;
