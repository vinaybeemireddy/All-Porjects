import React, { useState } from "react";
import { BsFillSunFill } from "react-icons/bs";
import { BsFillMoonFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../features/user/userSlice";

const ToggleComponent = () => {
  const dispatch = useDispatch();
  const handleTheme = () => {
    dispatch(toggleTheme());
  };
  return (
    <div className="navbar-end">
      <label className="swap swap-rotate">
        {/* this hidden checkbox controls the state */}
        <input type="checkbox" onChange={handleTheme} />
        {/* //sun icon */}
        <BsFillSunFill className="swap-on h-4 w-4" />
        {/* //moon icon */}
        <BsFillMoonFill className="swap-off h-4 w-4" />
      </label>
    </div>
  );
};

export default ToggleComponent;
