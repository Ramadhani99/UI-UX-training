import React, { useState, useEffect } from "react";

const EditUserForm = (props) => {
  const [user, setUser] = useState(props.currentUser);

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        props.updateUser(user.id, user);
      }}
    >
      <label className="form-label">Name</label>
      <input
        type="text"
        name="name"
        className="form-control"
        value={user.name}
        onChange={handleInputChange}
      />
      <label className="form-label">Salary</label>
      <input
        type="text"
        name="salary"
        className="form-control"
        value={user.salary}
        onChange={handleInputChange}
      />
      <label className="form-label">Department</label>
      <input
        type="text"
        name="department"
        className="form-control"
        value={user.department}
        onChange={handleInputChange}
      />

      <button className="btn btn-warning mt-2 float-end">Update user</button>
      <button
        onClick={() => props.setEditing(false)}
        className="btn btn-danger mt-2 float-start"
      >
        Cancel
      </button>
    </form>
  );
};

export default EditUserForm;
