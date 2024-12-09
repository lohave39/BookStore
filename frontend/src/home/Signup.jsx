import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Signup() {
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
      <div className="flex h-screen items-center justify-center p-5">
        <div id="my_modal_5" className="border-[2px] shadow-md rounded-md p-5">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-pink-500">Sign Up:</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="m-4 space-y-2">
                <label>Email :</label>
                <br />
                <input
                  type="text"
                  placeholder="Enter your Email"
                  className="w-80 px-3 py-3 border rounded-md outline-none"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                    
                      message: "Enter a valid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>
              <div className="m-4 space-y-2">
                <label>Name:</label>
                <br />
                <input
                  type="text"
                  placeholder="Enter your Name"
                  className="w-80 px-3 py-3 border rounded-md outline-none"
                  {...register("name", {
                    required: "Name is required",
                  })}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>
              <div className="m-4 space-y-2">
                <label>Password:</label>
                <br />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-80 px-3 py-3 border rounded-md outline-none"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters long",
                    },
                  })}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <div className="flex justify-between">
                <button
                  type="submit"
                  handleSubmit={onSubmit}
                  className="bg-pink-400 w-30 text-white rounded-md px-3 py-2 hover:bg-pink-800 duration-200"
                >
                  Sign Up
                </button>
                <p>
                  Have an Account?{" "}
                  <Link
                    to="/login"
                    className="underline text-blue-500 cursor-pointer"
                  >
                    Login
                  </Link>
                </p>
              </div>
            </form>

            <div className="modal-action">
              <Link to="/" className="btn">
                Close
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
