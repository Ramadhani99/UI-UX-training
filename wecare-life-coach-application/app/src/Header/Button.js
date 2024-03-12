import { React, useState } from "react";
import { Link } from "react-router-dom";
import Model from "./Model";
import LoginModal from "./LoginModal";

function Button() {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  //Login
  const [showloginModal, setShowLoginModal] = useState(false);

  const handleShowLogin = () => setShowLoginModal(true);
  const handleCloseLogin = () => setShowLoginModal(false);

  return (
    <div>
      <button
        type="button"
        className="btn btn-outline-warning me-1"
        onClick={handleShowLogin}
      >
        SignIn
      </button>
      <button
        type="button"
        className="btn btn-outline-warning me-1"
        onClick={handleShow}
      >
        SignUp
      </button>

      <Model showModal={showModal} handleClose={handleClose} />
      <LoginModal showModal={showloginModal} handleClose={handleCloseLogin} />
    </div>
  );
}

export default Button;
