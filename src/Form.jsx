import React from "react";
import { useForm } from "react-hook-form";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // You can do whatever you want with the form data here
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <form
        className="bg-white p-8 shadow-md rounded-md w-80"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-3xl font-bold mb-6">Log in to Form</h2>
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2" htmlFor="email">
            Email or Phone
          </label>
          <input
            className={`border border-gray-300 rounded-md w-full p-2 ${
              errors.email ? "border-red-500" : ""
            }`}
            type="text"
            id="email"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">Invalid email address</span>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2" htmlFor="password">
            Password
          </label>
          <input
            className={`border border-gray-300 rounded-md w-full p-2 ${
              errors.password ? "border-red-500" : ""
            }`}
            type="password"
            id="password"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className="text-red-500 text-sm">Password is required</span>
          )}
        </div>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-md w-full font-medium hover:bg-blue-600"
          type="submit"
        >
          Log In
        </button>
      </form>
    </div>
  );
}

export default Form;
