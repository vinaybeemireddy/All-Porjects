import React from 'react'
import { services } from '../data'

const Services = () => {
  return (
    <section id="services">
        <div className="section-title" >
            <h2>
                Services
                <span>me</span>
            </h2>
        </div>
        <div className='section-center services-center' >
            {services.map((service)=>{
                return(
                    <article className='service'>
                        <span className='service-icon'>
                            <i>{service.icon}</i>
                        </span>

                        <div className='service-info'>
                            <h4 className='service-title'>{service.title}</h4>
                            <p className='service-text'>{service.text}</p>
                        </div>
                    </article>
                )
            })}
        </div>
    </section>
  )
}

export default Services