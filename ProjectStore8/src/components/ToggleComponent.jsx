import React, { useState } from "react";
import { BsFillSunFill } from "react-icons/bs";
import { BsFillMoonFill } from "react-icons/bs";

const ToggleComponent = () => {
  const [theme, setTheme] = useState(false);
  const handleTheme = () => {
    setTheme(!theme);
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
