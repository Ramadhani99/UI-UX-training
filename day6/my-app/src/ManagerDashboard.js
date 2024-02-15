import React, { useState } from "react";
import TeamDetails from "./TeamDetails";

import Timeout from "./Timeout";
import ListExample from "./ListExample";
import ApiCall from "./ApiCall";

function ManagerDashboard() {
  const [status, setApprove] = useState("Pending");

  const leaveapprove = () => {
    setApprove("Approved");
  };
  const leaveReject = () => {
    setApprove("Rejected");
  };
  return (
    <div className="grid grid-cols-2 gap-4 mt-2">
      <div className="container-fluid text-center mt-3 ">
        <p className="h1">
          <strong>Parent and Child example</strong>
        </p>
        <h1 className="">
          Leave <span className="text-info">Re</span> quest
        </h1>

        <TeamDetails status={status} />
        <div className="flex gap-1 float-end">
          <button
            type="submit"
            className="btn btn-success"
            onClick={leaveapprove}
          >
            Approved
          </button>
          <button
            type="submit"
            className="btn btn-danger"
            onClick={leaveReject}
          >
            Rejected
          </button>
        </div>
      </div>
      <Timeout />
      <ListExample />
      <ApiCall />
    </div>
  );
}

export default ManagerDashboard;
