import React from 'react'
import "./Services.css"
import { BsPencilFill } from "react-icons/bs";
import { FaPenNib, FaLaptopCode  } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

const Services = () => {
  const renderServiceData =  ServicesData.map(service =>{
    return(
     <div className="card design" key={service.id}>
          <span className="service-icon">{service.icon}</span>
          <h4 className='m-block-1'>{service.title}</h4>
          <p className='m-block-1 hide-text'>{service.description}</p>
          <a href="#" className='link'>
            Learn More
            &nbsp;
            <FaArrowRight className='arrow green-text'/>
          </a>
     </div>
    )
  })
  return (
    <section>
      <div className="wrapper p-block-9 border-btm">
        <div className="flex between gap-4">
            <div>
                <span className='sub-text overlay-text' datatype='Services'>My Specialization</span>
                <h2><span className='green-text'>Services</span> I Provide</h2>
            </div>
            <a href="#" className='btn self-end'>View All Services</a>
        </div>
        <div className='flex gap-2 stretch mt-5'>
            {renderServiceData}
        </div>
      </div>
    </section>
  )
}

export default Services

const ServicesData = [
    {
        id:1,
        title: "UI/UX Design",
        description: "I offer professional UI/UX design services that blend aesthetics with functionality, creating...",
        icon: <BsPencilFill />,
    },
    {
      id:2,
      title: "Application Design",
      description: "I provide profestional app services, creating user-friendly and visually engoging...",
      icon: <FaPenNib />
    },
    {
      id:3,
      title: "Application Design",
      description: "I offer professional website design services that combine creativity and functionality to build...",
      icon: <FaLaptopCode />
    }
]
