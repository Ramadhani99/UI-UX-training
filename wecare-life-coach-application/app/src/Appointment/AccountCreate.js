import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function AccountCreate() {
  const { User } = useSelector((state) => state.userKey);
  return (
    <div className="container text-center">
      <div>
        <img
          src={User?.userType === 1 ? "coach.png" : "login.png"}
          alt=""
          class="rounded-circle mx-auto d-block"
          width="30%"
          srcset=""
        />
      </div>

      <h2>
        {User?.userType !== 1
          ? "Your account has been created"
          : "You are a Coaach now!"}{" "}
      </h2>
      <h2>
        {User?.userType === 1 ? "Your Coach ID is" : "Your User ID is"}{" "}
        <span className="text-info">{User?.userId}</span>
        {User?.userType === 1 ? (
          <Link to="/loginCoach">
            <button type="button" className="btn btn-success m-3">
              SignIn as a Coach
            </button>
          </Link>
        ) : (
          <Link to="/loginUser">
            <button type="button" className="btn btn-success m-3">
              SignIn as a User
            </button>
          </Link>
        )}
      </h2>
    </div>
  );
}
