import { React, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../store/feature/RegisterUserSlice";
function RegisterUser() {
  const dispatch = useDispatch();

  const [inputField, setInputField] = useState({
    name: "",
    password: "",
    dob: "",
    email: "",
    gender: "",
    mobile: "",
    userType: 2,
    city: "",
    pincode: "",
    state: "",
    country: "",
  });
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
    //       alert("User successfully created");
    //       setInputField((prevState) => ({ ...prevState }));
    //     } else Promise.reject();
    //   })
    //   .catch((err) => alert("Something went wrong"));
    dispatch(registerUser(inputField));
  };
  return (
    <div>
      <div class="row">
        <div class="col"></div>
        <div class="col mt-3 text-white rounded-tl-lg border-2 border-black-300 p-4 bg-black">
          <p class="h3">User Profile</p>
          <form class="mt-3 mb-3 was-validated" action="POST">
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
                <div class="valid-feedback">Valid.</div>
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
                <div class="valid-feedback">Valid.</div>
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
                  name="dob"
                  onChange={inputsHandler}
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
                  name="gender"
                  onChange={() =>
                    inputsHandler({
                      target: { name: "gender", value: "female" },
                    })
                  }
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
                <div class="valid-feedback">Valid.</div>
                <div class="invalid-feedback">
                  Mobile number should have 10 digits
                </div>
              </div>
              <div class="col">
                <label for="email" class="form-lable">
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  onChange={inputsHandler}
                  class="form-control"
                  id="email"
                  required
                />
                <div class="valid-feedback">Valid.</div>
                <div class="invalid-feedback">Email should be valid</div>
              </div>
            </div>
            <div class="row mb-2">
              <div class="col">
                <label for="pin" class="form-label">
                  Pincode
                </label>
                <input
                  type="text"
                  class="form-control"
                  onChange={inputsHandler}
                  name="pincode"
                  id="pin"
                  required
                />
                <div class="valid-feedback">Valid.</div>
                <div class="invalid-feedback">Pincode should have 6 digits</div>
              </div>
              <div class="col">
                <label for="city" class="form-lable">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  onChange={inputsHandler}
                  class="form-control"
                  id="city"
                  required
                />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <label for="pin" class="form-label">
                  State
                </label>
                <input
                  type="text"
                  class="form-control"
                  onChange={inputsHandler}
                  name="state"
                  id="pin"
                  required
                />
              </div>
              <div class="col">
                <label for="cn" class="form-label">
                  country
                </label>
                <select
                  name="country"
                  onChange={inputsHandler}
                  id="cn"
                  class="form-select"
                >
                  <option value="tz">Tanzania</option>
                  <option value="tz">India</option>
                </select>
              </div>
            </div>
            <div class="row">
              <div class="col mt-3">
                <a
                  href="#demo"
                  class="btn btn-outline-info"
                  data-bs-toggle="collapse"
                >
                  Click to read terms and conditions
                </a>
                <div id="demo" class="collapse">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </div>
                <div class="form-check form-switch mt-3 float-end">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    onChange={inputsHandler}
                    id="mySwitch"
                    name="darkmode"
                    value="yes"
                    checked
                  />
                  <label class="form-check-label float-end" for="mySwitch">
                    I agree with terms and conditions
                  </label>
                </div>
              </div>
            </div>
            <div class="text-center mt-3 mb-3">
              <button onClick={submitButton} class="btn btn-success px-5">
                Register
              </button>
            </div>
          </form>
        </div>
        <div class="col"></div>
      </div>
    </div>
  );
}

export default RegisterUser;
