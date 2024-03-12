import { React, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../store/feature/RegisterUserSlice";
function RegisterCoach() {
  const dispatch = useDispatch();
  const history = useNavigate();
  const [inputField, setInputField] = useState({
    name: "",
    password: "",
    dob: "",
    email: "",
    gender: "",
    mobile: "",
    userType: 1,
    speciality: "",
  });
  //selector
  const { loading, User } = useSelector((state) => state.userKey);
  const inputsHandler = (e) => {
    const { name, value } = e.target;
    setInputField((prevState) => ({ ...prevState, [name]: value }));
  };

  const submitButton = (e) => {
    e.preventDefault();
    // axios
    //   .post("http://localhost:4000/users", inputField)
    //   .then((res) => {
    //     if (res.status === 200) {
    //       history("/createAccount");
    //     } else Promise.reject();
    //   })
    //   .catch((err) => alert("Something went wrong"));
    dispatch(registerUser(inputField));
  };

  if (User) {
    history("/createAccount");
  }

  return (
    <>
      <div class="row mt-6">
        <div class="col"></div>
        <div class="col mt-3 rounded-tl-lg border-1  text-white border-black-300 p-2 bg-black">
          <p class="h3 text-center">Life Coach Profile</p>
          <form type="POST" class="mt-3 mb-3 was-validated">
            <div class="row mb-2">
              <div class="col">
                <label for="name" class="form-label">
                  Name :
                </label>
                <input
                  type="text"
                  class="form-control"
                  onChange={inputsHandler}
                  name="name"
                  id="name"
                  required
                />

                <div class="invalid-feedback">
                  Name should have 3 to 50 characters
                </div>
              </div>
              <div class="col">
                <label for="pwd" class="form-label">
                  Password :
                </label>
                <input
                  type="text"
                  name="password"
                  onChange={inputsHandler}
                  class="form-control"
                  id="pwd"
                  required
                />

                <div class="invalid-feedback">
                  Password should have 5 to 10 characters
                </div>
              </div>
            </div>
            <div class="row mb-2">
              <div class="col">
                <label for="dob" class="form-label">
                  Date Of Birth
                </label>
                <input
                  type="date"
                  onChange={inputsHandler}
                  name="dob"
                  class="form-control"
                  id="dob"
                  required
                />
                <div class="valid-feedback">Valid.</div>
                <div class="invalid-feedback">
                  Age should be between 20 and 100 years
                </div>
              </div>
              <div class="col">
                <label class="form-label">Gender</label>
                <br />
                <input
                  type="radio"
                  class="form-check-input me-2"
                  onChange={() =>
                    inputsHandler({ target: { name: "gender", value: "male" } })
                  }
                  name="gender"
                  id="male"
                  required
                />
                Male
                <input
                  type="radio"
                  class="form-check-input"
                  onChange={() =>
                    inputsHandler({
                      target: { name: "gender", value: "female" },
                    })
                  }
                  name="gender"
                  id="female"
                  required
                />
                Female
              </div>
            </div>
            <div class="row mb-2">
              <div class="col">
                <label for="mob" class="form-label">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  class="form-control"
                  onChange={inputsHandler}
                  name="mobile"
                  id="mob"
                  required
                />

                <div class="invalid-feedback">
                  Mobile number should have 10 digits
                </div>
              </div>
              <div class="col">
                <label for="spty" class="form-lable">
                  Speciality:
                </label>
                <input
                  type="text"
                  name="speciality"
                  onChange={inputsHandler}
                  class="form-control"
                  id="spty"
                  required
                />

                <div class="invalid-feedback">This field is required</div>
              </div>
            </div>
            <div className="row">
              <div class="col">
                <label for="email" class="form-lable">
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  class="form-control"
                  id="email"
                  required
                />
                <div class="valid-feedback">Valid.</div>
                <div class="invalid-feedback">Email should be valid</div>
              </div>
            </div>

            <div class="text-center mt-3 mb-3">
              <button onClick={submitButton} class="btn btn-success px-5">
                {loading ? "please wait...." : "Register"}
              </button>
            </div>
          </form>
        </div>
        <div class="col"></div>
      </div>
    </>
  );
}

export default RegisterCoach;
