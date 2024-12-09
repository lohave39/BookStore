import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    // Add further logic to handle form submission, like API calls.

    reset(); 
  };

  return (
    <div>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Login</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="m-4 space-y-2">
              <label htmlFor="email">Email:</label>
              <br />
              <input
                id="email"
                type="email"
                placeholder="Enter your Email"
                className={`w-80 px-3 py-3 border rounded-md outline-none ${
                  errors.email ? "border-red-500" : ""
                }`}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Enter a valid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
            <div className="m-4 space-y-2">
              <label htmlFor="password">Password:</label>
              <br />
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className={`w-80 px-3 py-3 border rounded-md outline-none ${
                  errors.password ? "border-red-500" : ""
                }`}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters long",
                  },
                })}
              />
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password.message}</p>
              )}
            </div>
            <div className="flex justify-between items-center">
              <button
                type="submit"
                className="bg-pink-400 text-white rounded-md px-3 py-2 hover:bg-pink-800 duration-200"
              >
                Login
              </button>
              <p className="flex items-center">
                Not Registered? Please{" "}
                <Link
                  to="/signup"
                  className="underline text-blue-500 cursor-pointer ml-1"
                >
                  SignUp
                </Link>
              </p>
            </div>
          </form>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
