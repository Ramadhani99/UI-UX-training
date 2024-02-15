import React, { useState, Fragment } from "react";
import AddUserForm from "./crud/Form/AddUserForm";
import EditUserForm from "./crud/Form/EditUserForm";
import UserTable from "./crud/Table/UserTable";

function Crud() {
  const usersData = [
    { id: 1001, name: "Tania", salary: 50000, department: "IT" },
    { id: 1002, name: "Craig", salary: 90000, department: "IT" },
    { id: 1003, name: "Ben", salary: 80000, department: "IT" },
  ];

  const initialFormState = { id: null, name: "", salary: "", department: "" };

  // Setting state
  const [users, setUsers] = useState(usersData);
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  // CRUD operations
  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setEditing(false);

    setUsers(users.filter((user) => user.id !== id));
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);

    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  const editRow = (user) => {
    setEditing(true);

    setCurrentUser({
      id: user.id,
      name: user.name,
      salary: user.salary,
      department: user.department,
    });
  };

  return (
    <div className="container">
      <p className="h1">CRUD App with Hooks</p>
      <div className="flex-row">
        <div className="flex-large gap-2 p-16">
          {editing ? (
            <Fragment>
              <p className="h2 text-success">
                Edit user{" "}
                <span className="font-black decoration-transparent">
                  {currentUser.name}
                </span>
              </p>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </Fragment>
          ) : (
            <Fragment>
              <p className="h2 text-success">Add user</p>
              <AddUserForm addUser={addUser} />
            </Fragment>
          )}
        </div>
        <div className="flex-large p-16">
          <p className="h2 text-success">View user</p>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
}

export default Crud;
