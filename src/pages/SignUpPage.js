import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const SignUpPage = () => {
  const {
    handleSubmit,
    register,
    setValue,
    watch,
    setError,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    axios
      .get("https://workintech-fe-ecommerce.onrender.com/roles")
      .then((response) => {
        setRoles(response.data);
        setValue(
          "role_id",
          response.data.find((role) => role.name === "customer").id
        );
      })
      .catch((error) => {
        console.error("Roller alınırken hata oluştu:", error);
      });
  }, [setValue]);

  const onSubmit = (data) => {
    setLoading(true);
    axios
      .post("https://workintech-fe-ecommerce.onrender.com/signup", data)
      .then((response) => {
        console.log("Başarı:", response.data);
      })
      .catch((error) => {
        console.error("Hata:", error.response.data);
        setError("submitError", {
          type: "manual",
          message:
            error.response.data.message ||
            "Gönderim sırasında bir hata oluştu.",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 xl:bg-darkBg rounded shadow-md ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="block mb-2 text-white">Name:</label>
        <input
          className="w-full p-2 border rounded"
          {...register("name", {
            required: "Name is required",
            minLength: { value: 3, message: "Min length is 3" },
          })}
        />

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

        <label className="block mt-4 mb-2 text-white">Confirm Password:</label>
        <input
          className="w-full p-2 border rounded"
          type="password"
          {...register("confirmPassword", {
            required: "Confirm Password is required",
            validate: (value) =>
              value === watch("password") || "Passwords do not match",
          })}
        />

        <label className="block mt-4 mb-2 text-white">Role:</label>
        <select className="w-full p-2 border rounded" {...register("role_id")}>
          {roles.map((role) => (
            <option key={role.id} value={role.id}>
              {role.name}
            </option>
          ))}
        </select>

        {watch("role_id") === "store" && (
          <>
            <label className="block mt-4 mb-2">Store Name:</label>
            <input
              className="w-full p-2 border rounded"
              {...register("store.name", {
                minLength: { value: 3, message: "Min length is 3" },
              })}
            />

            <label className="block mt-4 mb-2">Store Phone:</label>
            <input
              className="w-full p-2 border rounded"
              {...register("store.phone", {
                pattern: {
                  value: /^\+90\d{10}$/,
                  message: "Invalid Turkish phone number",
                },
              })}
            />

            <label className="block mt-4 mb-2">Store Tax ID:</label>
            <input
              className="w-full p-2 border rounded"
              {...register("store.tax_no", {
                pattern: { value: /^T\d{4}V\d{6}$/, message: "Invalid Tax ID" },
              })}
            />

            <label className="block mt-4 mb-2">Store Bank Account:</label>
            <input
              className="w-full p-2 border rounded"
              {...register("store.bank_account", {
                pattern: {
                  value: /^TR\d{2}\d{4}\d{4}\d{4}\d{4}\d{4}\d{4}$/,
                  message: "Invalid IBAN",
                },
              })}
            />
          </>
        )}

        {loading && <p>Loading...</p>}

        <button
          type="submit"
          className="mt-6 bg-blue-500 text-white p-2 rounded"
          disabled={loading}
        >
          Submit
        </button>

        {errors.submitError && (
          <p className="text-red-500 mt-4">{errors.submitError.message}</p>
        )}
      </form>
    </div>
  );
};

export default SignUpPage;
