import { useState } from "react";
const ListExample = () => {
  var names = ["Dar es salaam", "Morogoro", "Arusha", "Tanga"];

  var employeeLeaves = [
    { name: "Ramadhnai", type: "Annual Leave", days: 30, status: "pending" },
    { name: "Sadick", type: "Partenity Leave", days: 30, status: "pending" },
    { name: "Khamisi", type: "Sick Leave", days: 30, status: "Accepted" },
    { name: "Matiya", type: "Emergency Leave", days: 30, status: "Rejected" },
  ];

  const [listItems, setInput] = useState({
    names: names,
  });

  return (
    <div className="flex flex-col text-center">
      <p className="h1">
        <strong>ArrayList and Object Array Example</strong>
      </p>
      <hr />
      <h2>
        Welcome,{" "}
        <ul>
          {names.map((index, name) => (
            <li key={index}>
              {index}, {name}
            </li>
          ))}
        </ul>
      </h2>
      <ul>
        {employeeLeaves.map((item, index) => (
          <li key={index}>
            SN {index + 1} NAME: {item.name} DAYS: {item.days} LEAVE TYPE:{" "}
            {item.type} STATUS:{" "}
            <span className="text-green-400">{item.status}</span>
          </li>
        ))}
      </ul>

      <br />
    </div>
  );
};

export default ListExample;
