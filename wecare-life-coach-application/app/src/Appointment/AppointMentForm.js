import React from "react";
import { Modal } from "react-bootstrap";
function AppointMentForm({ showModal, handleClose }) {
  return (
    <Modal
      show={showModal}
      onHide={handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Proceed with your appointment</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
          <form>
            <div className="row">
              <label for="dob" class="form-label">
                Appointment Date
              </label>
              <input
                type="date"
                name="dob"
                class="form-control"
                id="dob"
                required
              />
            </div>
            <br />
            <div className="row">
              <label for="slot" class="form-label">
                Preffered Slots
              </label>
              <br />
              <input
                type="radio"
                class="form-check-input "
                name="slot"
                required
              />
              9AM to 10AM
              <input
                type="radio"
                class="form-check-input ms-4"
                name="slot"
                required
              />
              10AM to 11AM
              <input
                type="radio"
                class="form-check-input ms-4"
                name="slot"
                required
              />
              11AM to 12PM
              <input
                type="radio"
                class="form-check-input ms-4"
                name="slot"
                required
              />
              2PM to 3PM
              <input
                type="radio"
                class="form-check-input ms-4"
                name="slot"
                required
              />
              3PM to 4PM
            </div>
          </form>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-success">Confirm your appointment</button>
      </Modal.Footer>
    </Modal>
  );
}

export default AppointMentForm;
