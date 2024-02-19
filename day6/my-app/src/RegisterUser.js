import React from "react";

function RegisterUser() {
  return (
    <div>
      <div class="row">
        <div class="col"></div>
        <div class="col mt-3 rounded-tl-lg border-2 border-black-300 p-4">
          <p class="h3">User Profile</p>
          <form action="" class="mt-3 mb-3 was-validated">
            <div class="row mb-2">
              <div class="col">
                <label for="name" class="form-label">
                  Name :
                </label>
                <input
                  type="text"
                  class="form-control"
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
                  name="gender"
                  id="male"
                  required
                />
                Male
                <input
                  type="radio"
                  class="form-check-input"
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
                  name="pincode"
                  id="pin"
                  required
                />
              </div>
              <div class="col">
                <label for="cn" class="form-label">
                  country
                </label>
                <select name="country" id="cn" class="form-select">
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
              <button type="submit" class="btn btn-success px-5">
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
