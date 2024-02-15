import { Link } from "react-router-dom";
import SignupModel from "./SignupModel";
function Button() {
  return (
    <>
      <Link to="/quiz">
        <button type="button" class="btn btn-outline-warning me-1">
          QUIZ
        </button>
      </Link>
      <Link to="/crud">
        <button type="button" class="btn btn-outline-warning me-1">
          CRUD EXAMPLE
        </button>
      </Link>
      <Link to="/filter">
        <button className="btn btn-outline-warning">FilterTable</button>
      </Link>
      <button
        type="button"
        class="btn btn-outline-warning me-1"
        data-bs-toggle="modal"
        data-bs-target="#myModal"
      >
        Signin
      </button>
      <button
        type="button"
        class="btn btn-outline-warning me-1"
        data-bs-toggle="modal"
        data-bs-target="#signUp"
      >
        SignUp
      </button>
      <SignupModel />
    </>
  );
}

export default Button;
