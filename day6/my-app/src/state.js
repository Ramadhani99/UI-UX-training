import { useState } from "react";

function State() {
  const [name, setName] = useState("RevenueAuthorityof Tanzania Employee");
  const [email, setEmail] = useState("xxxxxxx@rev.com");
  const [count, setCount] = useState(0);

  const [input, setInput] = useState({ name: "", status: "" });

  const inputsHandler = (e) => {
    setInput({
      [e.target.name]: [e.target.value],
    });
  };

  const submitButton = () => {
    alert(input.name.length);
    if (input.name.length > 5) {
      setInput({ status: "Valid" });
    } else {
      setInput({ status: "invalid" });
    }
  };

  const changeName = () => {
    setName("new RUT Employee");
  };
  const updateEmail = () => {
    setEmail("xxxxxxxxxxxxx@rev.com");
  };
  return (
    <div>
      <p>My name is {name}</p>
      <button onClick={changeName} class="btn">
        {" "}
        update name{" "}
      </button>
      <div>
        <h1> Email is : {email}</h1>
        <button onClick={updateEmail} class="btn">
          updateEmail
        </button>
        <button onClick={() => setEmail("yyyyyyyy@adp.com")} class="btn">
          updateEmail
        </button>
      </div>
      <hr />
      {/* Count example */}
      <button class="btn btn-primary" onClick={() => setCount(count + 1)}>
        ++
      </button>
      <button class="btn btn-warning" onClick={() => setCount(count - 1)}>
        --
      </button>
      {count}

      <hr />
      <from class="mt-4">
        <input
          type="text"
          class="form-control"
          onChange={inputsHandler}
          name="name"
          value={input.name}
          placeholder="write name"
        />
        <button class="btn btn-success" onClick={submitButton}>
          Submit
        </button>
      </from>
      <p class="text-green-900">{input.name}</p>
      <p class="text-red-900">{input.status}</p>
    </div>
  );
}

export default State;
