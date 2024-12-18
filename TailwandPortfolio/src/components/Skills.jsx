import React from "react";
import SectionTitle from "./SectionTitle";
import { skills } from "../data";

const Skills = () => {
  return (
    <section className="py-20 px-5" id="skills">
      <SectionTitle text={"tech stack"} />
      <div className=" py-16 grid gap-8 md:grid-cols-2 lg:gridos-3">
        {skills.map((skill) => {
          const { icon, title, text } = skill;
          return (
            <article>
              <span>{icon}</span>
              <h4 className="mt-6 font-bold">{title}</h4>
              <p className="mt-2 text-slate-500">{text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
