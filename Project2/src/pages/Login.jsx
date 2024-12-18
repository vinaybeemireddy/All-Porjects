import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { login } from "../redux/authReducer/action";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const auth = useSelector((store) => store.authReducer.isAuth);
  const error = useSelector((store) => store.authReducer.isError);

  const handleLogin = () => {
    let userData = {
      email,
      password,
    };
    dispatch(login(userData));
    setEmail("");
    setPassword("");
  };
  return (
    <DIV auth={auth} error={error}>
      <h1>{auth ? "Login Successful" : "Login to continue"}</h1>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="User Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="User Password"
      />
      <button onClick={handleLogin}>Log In</button>
    </DIV>
  );
};

const DIV = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  margin: auto;
  border: 1px solid gray;
  padding: 40px;
  gap: 10px;

  h1 {
    color: ${({ auth }) => (auth ? "green" : "red")};
  }

  input {
    height: 40px;
    font-size: larger;
    width: 100%;
    border: ${({ error }) => (error ? "1px solid red" : "1px solid gray")};
  }

  button {
    width: 50%;
    height: 35px;
    cursor: pointer;
    border: none;
  }
`;
export default Login;
