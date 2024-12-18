import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  loginFailureAction,
  loginRequestAction,
  loginSuccessAction,
} from "../redux/authentication/action";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const handleLogin = () => {
    const userData = {
      email,
      password,
    };
    dispatch(loginRequestAction());

    axios
      .post("https://reqres.in/api/login", userData)
      .then((res) => {
        console.log(res.data);
        dispatch(loginSuccessAction(res.data.token));
      })
      .catch((error) => {
        console.log(error);
        dispatch(loginFailureAction());
      });
  };
  return (
    <div>
      <h1>login</h1>
      <input
        type="text"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>login</button>
    </div>
  );
};

export default Login;
