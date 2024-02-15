import React from "react";

function TeamDetails({ status }) {
  return (
    <div className="container flex flex-column">
      <table className="table">
        <thead>
          <tr>
            <th>S/N</th>
            <th>Employee Name</th>
            <th>Leave Type</th>
            <th>Days</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Ramadhani Sadick</td>
            <td>Parenty Leave</td>
            <td>8</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Emmanuel Chanila</td>
            <td>Maternity Leave</td>
            <td>83</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Abdallah Khamisi</td>
            <td></td>
            <td>8</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Ramadhani Sadick</td>
            <td>Emergency Leave</td>
            <td>32</td>
          </tr>
        </tbody>
      </table>
      <div>Leave Status: {status}</div>
    </div>
  );
}

export default TeamDetails;
