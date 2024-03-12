import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useAuth } from "../Auth/AuthProvider";
import { useNavigate } from "react-router-dom";

const LoginUser = () => {
  const { isAuthenticated, login, logout } = useAuth();

  //history
  const history = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = (values) => {
    axios
      .post("http://localhost:4000/users/login", values)
      .then((res) => {
        if (res.status === 200) {
          // alert("User successfully created");
          console.log(res);
          const token = res.data.token;

          // Call the login function from the authentication context
          login(token);
          history("/coacher");

          // setInputField((prevState) => ({ ...prevState }));
        } else Promise.reject();
      })
      .catch((err) => alert("Something went wrong" + err));
  };
  return (
    <div>
      <div className="row mt-3">
        <div className="col"></div>
        <div className="col text-white bg-black m-4">
          <div class="mb-3 text-center">
            <p class="h4 mb-2 ">Login as a User</p>
            <img
              src="login.png"
              alt=""
              class="rounded-circle mx-auto d-block"
              width="30%"
              srcset=""
            />
          </div>
          <form onSubmit={handleSubmit(onSubmit)} method="POST">
            <div className="container">
              <div className="col">
                <label className="form-label">UserId</label>
                <input
                  className="form-control"
                  type="text"
                  {...register("userId", {
                    required: "UserId cannot be empty",
                  })}
                />

                <span className="text-danger">
                  {errors.userId && errors.userId.message}
                </span>
              </div>
              <div className="col">
                <label className="form-label">Password</label>
                <input
                  className="form-control"
                  type="password"
                  {...register("password", {
                    required: "PAssword cannot be empty",
                  })}
                />
                <span className="text-danger">
                  {errors.password && errors.password.message}
                </span>
              </div>
              <button
                className="btn btn-primary mt-4 mb-4 float-end"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
};
export default LoginUser;
