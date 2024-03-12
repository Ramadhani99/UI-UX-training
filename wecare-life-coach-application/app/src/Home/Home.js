import React from "react";
import Button from "../Header/Button";
import "./Home.css";
function Home() {
  return (
    <div className="container ">
      <div className="row banner">
        <div className="col-4">
          <img src="/banner.png" alt="image" className="float-start" />
        </div>
        <div className="col-8">
          <p className="h3 text-orange-300">
            WE ARE AT THE <span className="text-danger">HEART</span> OF
            APPROPIATE CARE
          </p>
          <p className="h4 ">
            Wecare stands as a beacon of hope for those in need, providing a
            compassionate and understanding environment for individuals facing
            various challenges. Through its dedicated team, personalized
            approach, and commitment to community well-being, Wecare continues
            to make a meaningful difference in the lives of many
          </p>
          <div className="float-end">
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
