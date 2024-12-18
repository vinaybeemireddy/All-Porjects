import React from "react";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import heroImag from "../assets/hero.svg";
const Title = () => {
  return (
    <div className="bg-purple-100 py-24 px-5">
      <div className="grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-6xl font-bold tracking-wider">I'm Surya</h1>
          <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide ">
            Front-End Developer
          </p>
          <p className="mt-2 text-lg text-slate-700 capitalize tracking-wide ">
            Turning ideas into reality
          </p>
          <div className="flex gap-x-3 mt-3">
            <a href="#">
              <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a href="#">
              <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a href="#">
              <FaTwitterSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img src={heroImag} alt="your image" />
        </article>
      </div>
    </div>
  );
};

export default Title;
