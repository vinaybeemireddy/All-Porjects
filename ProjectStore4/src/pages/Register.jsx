import React from "react";
import { Form, Link } from "react-router-dom";
import { FormInput } from "../components";
import SubmitButton from "../components/SubmitButton";

const Register = () => {
  return (
    <section className=" grid place-items-center h-screen">
      <Form
        method="post"
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
