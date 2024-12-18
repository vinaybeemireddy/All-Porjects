import React from "react";
import { Form } from "react-router-dom";
import { FormInput } from "../components";

const Login = () => {
  return <section className="h-screen grid place-items-center">
    <Form className="card w-96 bg-base-100 shadow-lg flex flex-col gap-y-4">
      <h4>Login</h4>
      <FormInput type="email" label="email" name="identity" defaultValue="test@test.email"/>
      <FormInput type="password" label="password" name="password" defaultValue="secret"/>
      <div>
        <button>Login</button> 
      </div>
    </Form>
  </section>
};

export default Login;
