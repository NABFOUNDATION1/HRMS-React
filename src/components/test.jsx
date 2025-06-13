// TestModal.jsx
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function TestModal() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
        Launch Modal
      </Button>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Hello</Modal.Title>
        </Modal.Header>
        <Modal.Body>This is a test modal.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TestModal;