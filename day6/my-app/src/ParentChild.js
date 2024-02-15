import { useState } from "react";
function ParentChild() {
  //parent
  //state - mutable ,props- immutable
  // eslint-disable-next-line
  const [input, setInput] = useState({ name: "Sudaksha ReactUI Developer" });
  return (
    <div className="App">
      Welcome to React training Parent compoent property : State : {input.name}
      <Message city="Hyderabad" />
      <Country name="Tanzania" />
    </div>
  );
}

//arraow function
const Country = ({ name }) => {
  return <div> Country name is from Parent : {name} </div>;
};
// <Message />   named functions
function Message({ city }) {
  return (
    <p>
      {" "}
      <h1>From Child {city}</h1>{" "}
    </p>
  );
}
export default ParentChild;
