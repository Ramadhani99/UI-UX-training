import { useState } from "react";
function Register() {
  const [inputField, setInputField] = useState({
    name: "",
    password: "",
    dob: "",
    gender: "",
    mobile: "",
    speciality: "",
  });
  const inputsHandler = (e) => {
    const { name, value } = e.target;
    setInputField((prevState) => ({ ...prevState, [name]: value }));
  };

  const submitButton = () => {
    alert(
      inputField.name +
        " " +
        inputField.password +
        " " +
        inputField.dob +
        " " +
        inputField.gender +
        " " +
        inputField.mobile +
        " " +
        inputField.speciality
    );
  };

  return (
    <>
      <div class="row mt-6">
        <div class="col"></div>
        <div class="col mt-3 rounded-tl-lg border-1  text-white border-black-300 p-2 bg-black">
          <p class="h3 text-center">Life Coach Profile</p>
          <form action="" class="mt-3 mb-3 was-validated">
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
                  onChange={inputsHandler}
                  name="gender"
                  id="male"
                  required
                />
                Male
                <input
                  type="radio"
                  class="form-check-input"
                  onChange={inputsHandler}
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

            <div class="text-center mt-3 mb-3">
              <button
                type="submit"
                onClick={submitButton}
                class="btn btn-success px-5"
              >
                Register
              </button>
            </div>
          </form>
        </div>
        <div class="col"></div>
      </div>
    </>
  );
}

export default Register;
