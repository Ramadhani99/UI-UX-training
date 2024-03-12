import React from "react";
import { Button, Modal } from "react-bootstrap";

import { Link } from "react-router-dom";

function Model({ showModal, handleClose }) {
  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Example Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Link to="/register">
          <button
            type="button"
            className="btn btn-outline-success m-3"
            data-bs-dismiss="modal"
            onClick={handleClose}
          >
            SignUp as a Coach
          </button>
        </Link>
        <Link to="/registerUser">
          <button
            type="button"
            onClick={handleClose}
            className="btn btn-outline-success  m-3"
            data-bs-dismiss="modal"
          >
            SignUp as a User
          </button>
        </Link>
      </Modal.Body>
    </Modal>
  );
}

export default Model;
