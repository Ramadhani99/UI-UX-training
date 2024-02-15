import React from "react";
import SignupModel from "./SignupModel";
import Button from "./Button";

function Home() {
  return (
    <div className="text-center m-4">
      <p class="h1 text-orange-300">WE ARE AT THE HEART OF APPROPIATE CARE</p>
      <hr />
      <div class="conatiner flex flex-row">
        <div className="flex-initial w-50">
          <p class="h4 px-4">
            Wecare stands as a beacon of hope for those in need, providing a
            compassionate and understanding environment for individuals facing
            various challenges. Through its dedicated team, personalized
            approach, and commitment to community well-being, Wecare continues
            to make a meaningful difference in the lives of many
          </p>
          <Button />
        </div>
        <div className="flex-initial w-50">
          <img src="/logo.png" alt="image" class="float-start" />
        </div>
      </div>

      <SignupModel />
    </div>
  );
}

export default Home;
