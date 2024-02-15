import { useForm } from "react-hook-form"; //npm install react-hook-form
import ParentChild from "./ParentChild";
const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = (values) => alert(values.email + " " + values.password);
  return (
    <div className="app">
      <ParentChild />
      <hr />
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Register</h1>
        <div className="container">
          <div className="col">
            <label className="form-label">Email</label>
            <input
              className="form-control"
              type="email"
              {...register("email", {
                required: "Email cannot be empty",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address",
                },
              })}
            />

            <span className="text-danger">
              {errors.email && errors.email.message}
            </span>
          </div>
          <div className="col">
            <label className="form-label">Password</label>
            <input
              className="form-control"
              type="password"
              {...register("password", {
                required: "PAssword cannot be empty",
                pattern: {
                  value:
                    /^(?=.[0-9])(?=.[a-zA-Z])(?=.[!@#$%^&])[a-zA-Z0-9!@#$%^&*]{8,20}$/,
                  message:
                    "Password requirements: 8-20 characters, 1 number, 1 letter, 1 symbol.",
                },
              })}
            />
            <span className="text-danger">
              {errors.password && errors.password.message}
            </span>
          </div>
          <button className="btn btn-primary mt-4 float-end" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default Login;
