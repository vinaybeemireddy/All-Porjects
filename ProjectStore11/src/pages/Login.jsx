import React from "react";
import { Form, Link, useNavigate } from "react-router-dom";
import { FormInput } from "../components";
import SubmitButton from "../components/SubmitButton";
import { customFetch } from "../utils";
import { useDispatch } from "react-redux";
import { loginUser } from "../features/user/userSlice";
import { toast } from "react-toastify";

export const action =
  (store) =>
  async ({ request }) => {
    // console.log(store);
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
      const response = await customFetch.post("/auth/local", data);
      store.dispatch(loginUser(response.data));
      toast.success("logged in successfully");
      return redirect("/");
    } catch (error) {
      console.log(error);
      return null;
    }
    return store;
  };
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginAsGuestUser = async () => {
    try {
      const response = await customFetch.post("/auth/local", {
        identifier: "test@test.com",
        password: "secret",
      });
      dispatch(loginUser(response.data));
      toast.success("welcome guest user");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="POST"
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
        <button
          type="button"
          className="btn btn-secondary btn-block"
          onClick={loginAsGuestUser}
        >
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
