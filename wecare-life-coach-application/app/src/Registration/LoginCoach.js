import React from "react";
import { useForm } from "react-hook-form";

const LoginCoach = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = (values) => alert(values.email + " " + values.password);
  return (
    <div>
      <div className="row mt-3">
        <div className="col"></div>
        <div className="col text-white bg-black">
          <div class="mb-3 text-center">
            <p class="h4 mb-2 ">Login as a Coach</p>
            <img
              src="coach.png"
              alt=""
              class="rounded-circle mx-auto d-block"
              width="30%"
              srcset=""
            />
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="container">
              <div className="col">
                <label className="form-label">CoachId</label>
                <input
                  className="form-control"
                  type="text"
                  {...register("userId", {
                    required: "Email cannot be empty",
                  })}
                />

                <span className="text-danger">
                  {errors.userId && errors.userId.message}
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
              <button
                className="btn btn-primary mt-4 mb-4 float-end"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
};

export default LoginCoach;
