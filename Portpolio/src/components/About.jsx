import React from 'react'
import aboutImage from "../assets/images/about.jpeg"
const About = () => {
  return (
    <section className='section' id="about">
        <div className="section-title">
            <h2>
                about
                <span>me</span>
            </h2>
        </div>

        <div className='section-center about-center'>
            <div className='about-img'>
                <img src={aboutImage} className='about-photo' />
            </div>
            <article className='about-info'>
                <h1>web developer</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, laudantium. Nesciunt quae soluta aperiam nisi totam voluptatibus ipsa error quas? Eveniet enim reprehenderit ab esse quibusdam alias odio, expedita exercitationem!
    Aliquid, dolorum! Praesentium, debitis. Facilis beatae provident facere dignissimos tempora, et iste, unde voluptatum qui doloribus explicabo consectetur, dolore hic sapiente quia rem. Ullam, minima! Minima itaque officiis eos velit.</p>
    <a href="" className='btn'>read more</a>
            </article>
        </div>
    </section>
  )
}

export default About