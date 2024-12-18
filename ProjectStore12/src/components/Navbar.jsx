import React from "react";
import { NavLink } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { BsCart3 } from "react-icons/bs";

import NavLinks from "./NavLinks";
import ToggleComponent from "./ToggleComponent";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);

  return (
    <nav>
      <div className="navbar align-element justify-between">
        <div>
          {/* Title  */}
          <NavLink
            to="/"
            className="hidden lg:flex btn btn-primary tex-3xl  items-center"
          >
            Store
          </NavLink>
          {/* Dropdown  */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBarsStaggered />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded w-52"
            >
              <NavLinks />
            </ul>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal">
              <NavLinks />
            </ul>
          </div>
        </div>
        <div className="gap-5 mr-10">
          {/* Theme icons */}
          <ToggleComponent />

          {/* Cart Link */}
          <NavLink to="cart" class="btn btn-ghost btn-circle btn-md ml-4">
            <div className="indicator">
              <BsCart3 className="h-6 w-6" />
              <span className="badge badge-sm badge-primary indicator-item">
                {numItemsInCart}
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
