import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import Model from "./Model";
function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
          <button className="navbar-brand" href="#">
            <Link to="/">
              We<span className="text-success">Ca</span>
              <span className="text-info">re</span>
            </Link>
          </button>

          <div className="d-flex float-end mt-2">
            <Button />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
