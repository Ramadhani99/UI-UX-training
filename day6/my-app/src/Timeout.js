import React, { useState } from "react";

function Timeout() {
  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
    }, 5000);
  };

  return (
    <div className="wrapper flex flex-col text-center">
      <p className="h1">
        <strong>SetTimeout Example</strong>
      </p>
      <hr />
      <h1 className="mt-2">How About Them Apples</h1>
      {submitting && (
        <div className="text-info mt-2">
          submiting form please wait............
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Name</p>
            <input name="name" className="form-control" />
          </label>
        </fieldset>
        <button type="submit" className="btn btn-outline-info mt-3">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Timeout;
