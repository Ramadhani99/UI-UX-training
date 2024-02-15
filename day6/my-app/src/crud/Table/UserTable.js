import React from "react";

const UserTable = (props) => (
  <table className="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Salary</th>
        <th>Department</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.salary}</td>
            <td>{user.department}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(user);
                }}
                className="btn btn-sm btn-outline-warning me-2 px-2"
              >
                Edit
              </button>
              <button
                onClick={() => props.deleteUser(user.id)}
                className="btn btn-sm btn-outline-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default UserTable;
