import React from "react";
import Button from "./Button";

function Header() {
  return (
    <div>
      <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
        <div class="container-fluid">
          <Link to="/">
            <button class="navbar-brand" href="#">
              We<span className="text-success">Ca</span>
              <span className="text-info">re</span>
            </button>
          </Link>
          <div class="d-flex float-end mt-2">
            <Button />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
