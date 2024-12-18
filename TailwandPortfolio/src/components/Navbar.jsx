import React from "react";
import { links } from "../data";

const Navbar = () => {
  return (
    <nav className="bg-purple-100 fixed w-full">
      <div className=" py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8">
        <h2 className="text-2xl font-bold">
          My <span className="text-purple-600">Portfolio</span>
        </h2>
        <div className="flex gap-x-3">
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                href={href}
                className="capitalize text-lg hover:text-purple-600 duration-300 "
              >
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
