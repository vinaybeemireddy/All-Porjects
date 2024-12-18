import React from "react";
import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <section id="about" className="bg-white py-20">
      <div className="grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} alt="" className="w-full h-64" />
        <article>
          <SectionTitle text="code with me" />
          <p className="text-slate-600 mt-8 leading-loose ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            maxime repudiandae facere reprehenderit quis quas, iste sequi, vitae
            fugiat voluptatem vel, molestiae omnis magni voluptatibus deleniti
            veritatis.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
