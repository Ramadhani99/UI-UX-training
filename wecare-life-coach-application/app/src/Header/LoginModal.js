import React from "react";
import { Modal } from "react-bootstrap";

import { Link } from "react-router-dom";
function LoginModal({ showModal, handleClose }) {
  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Example Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Link to="/loginCoach">
          <button
            type="button"
            className="btn btn-outline-success m-3"
            onClick={handleClose}
          >
            SignIn as a Coach
          </button>
        </Link>
        <Link to="/loginUser">
          <button
            type="button"
            className="btn btn-outline-success  m-3"
            onClick={handleClose}
          >
            SignIn as a User
          </button>
        </Link>
      </Modal.Body>
    </Modal>
  );
}

export default LoginModal;
