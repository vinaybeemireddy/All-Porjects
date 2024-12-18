import React from "react";
import { Form, Link } from "react-router-dom";
import { FormInput } from "../components";
import SubmitButton from "../components/SubmitButton";

const Login = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card w-96 bg-base-100 shadow-lg flex flex-col gap-y-4 p-8"
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <FormInput
          type="email"
          label="email"
          name="identifier"
          defaultValue="test@test.com"
        />

        <FormInput
          type="password"
          label="password"
          name="password"
          defaultValue="secret"
        />
        <div>
          <SubmitButton text="login" />
        </div>
        <button type="button" className="btn btn-secondary btn-block">
          guest User
        </button>
        <p className="text-center">Not a member yet</p>
        <Link
          to="/register"
          className=" link-hover link-primary capitalize text-center"
        >
          register
        </Link>
      </Form>
    </section>
  );
};

export default Login;
