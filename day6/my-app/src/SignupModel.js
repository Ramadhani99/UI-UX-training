import { Link } from "react-router-dom";
function SignupModel() {
  return (
    <div>
      <div class="modal" id="myModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>

            <button type="button" class="btn btn-outline-success m-3">
              <a href="coach-login.html">Login as a Coach</a>{" "}
            </button>
            <button type="button" class="btn btn-outline-success m-3">
              <a href="login.html">Login as a User</a>
            </button>
          </div>
        </div>
      </div>

      <div class="modal" id="signUp">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <Link to="/register">
              <button
                type="button"
                className="btn btn-outline-success m-3"
                data-bs-dismiss="modal"
              >
                SignUp as a Coach
              </button>
            </Link>
            <Link to="/registerUser">
              <button
                type="button"
                className="btn btn-outline-success  m-3"
                data-bs-dismiss="modal"
              >
                SignUp as a User
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupModel;
