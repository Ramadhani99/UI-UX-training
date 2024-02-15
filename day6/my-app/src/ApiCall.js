import React, { useState, useEffect } from "react";

function ApiCall() {
  const { data } = UserFetch("https://api.github.com/users");
  return (
    <div>
      <p className="h1"> FETCH API EXAMPLE </p>
      <table className="table">
        <thead>
          <tr>
            <th>NAME</th>
            <th>TYPE</th>
            <th>SITEADIMN</th>
            <th>NODE</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((user, index) => (
              <tr key={index}>
                <td> {user.login} </td>

                <td> {user.type} </td>
                <td> {user.site_admin} </td>
                <td> {user.node_id} </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

function UserFetch(url) {
  //props given parent
  const [data, setData] = useState(null);

  // change detected
  useEffect(() => {
    fetch(url) //axios
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(`Error: ${err}`));
  }, []);

  return { data };
}

export default ApiCall;
