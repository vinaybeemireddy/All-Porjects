import React from "react";
import { Form, Link, redirect } from "react-router-dom";
import { FormInput } from "../components";
import SubmitButton from "../components/SubmitButton";
import { toast } from "react-toastify";
import { customFetch } from "../utils";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  try {
    const response = await customFetch.post("/auth/local/register", data);
    toast.success("account created successfully");
    return redirect("/login");
  } catch (error) {
    console.log(error);
    return null;
  }
};

const Register = () => {
  return (
    <section className=" grid place-items-center h-screen">
      <Form
        method="POST"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Register</h4>
        <FormInput type="text" label="username" name="username" />
        <FormInput type="email" label="email" name="email" />
        <FormInput type="password" label="password" name="password" />
        <div className="mt-4">
          <SubmitButton text="register" />
        </div>
        <p className="text-center">Already a member?</p>
        <Link
          to="/login"
          className=" text-center link-hover link-primary capitalize"
        >
          login
        </Link>
      </Form>
    </section>
  );
};

export default Register;
