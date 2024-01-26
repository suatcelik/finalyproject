import React from "react";
import { useForm } from "react-hook-form";

function LoginPage() {
  const {
    register,

    formState: { errors },
  } = useForm();
  return (
    <div className="max-w-md mx-auto mt-8 p-6 xl:bg-darkBg rounded shadow-md ">
      <form>
        <label className="block mt-4 mb-2 text-white">Email:</label>
        <input
          className="w-full p-2 border rounded"
          {...register("email", {
            required: "Email is required",
            pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
          })}
        />

        <label className="block mt-4 mb-2 text-white">Password:</label>
        <input
          className="w-full p-2 border rounded"
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: 8,
          })}
        />
        <button
          type="submit"
          className="mt-6 bg-blue-500 text-white p-2 rounded"
        >
          Submit
        </button>

        {errors.submitError && (
          <p className="text-red-500 mt-4">{errors.submitError.message}</p>
        )}
      </form>
    </div>
  );
}

export default LoginPage;
