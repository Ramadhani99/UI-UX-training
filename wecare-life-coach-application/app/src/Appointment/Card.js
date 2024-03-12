import { React, useState, useEffect } from "react";
import axios from "axios";
import "./Card.css";
import AppointMentForm from "./AppointMentForm";
function Card() {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  useEffect(() => {
    axios
      .get("http://localhost:4000/users/")
      .then(({ data }) => {
        setUsers(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container Cards">
      {users.map((param, index) => {
        return (
          <div key={index} className="parentContainer">
            <div className="Card">
              <div className="img-box">
                <img
                  src="coach.png"
                  alt=""
                  class="rounded-circle mx-auto d-block"
                  srcset=""
                />
              </div>
              <div className="detail">
                <span>
                  <span>Name: </span>
                  {param.name}
                </span>
                <span>
                  <span>CoachId: </span>
                </span>
                <span>
                  <span>Speciality: </span>
                  {param.speciality}
                </span>
                <span>
                  <span>Phone: </span>
                  {param.mobile}
                </span>
                <button className="btn btn-sm btn-primary" onClick={handleShow}>
                  Book an appointment
                </button>
              </div>
            </div>
          </div>
        );
      })}
      ;
      <AppointMentForm showModal={showModal} handleClose={handleClose} />
    </div>
  );
}

export default Card;
