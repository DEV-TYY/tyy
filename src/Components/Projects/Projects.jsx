import  Project1 from "../../assets/images/Project1.jpg"
import  Project2 from "../../assets/images/Project2.jpg"
import  Project3 from "../../assets/images/Project3.jpg"
import { FaArrowRight } from "react-icons/fa6";
import "./Projects.css"
import React from 'react'

const Projects = () => {
    const renderProjectData = ProjectData.map(project => {
        return(
            <div className="card flex gap-5 project" key={project.id}>
                <div className="project-image">
                    <img src={project.image} alt="" />
                </div>
                <div className="project-content">
                    <ul className="flex gap-1">
                        {project.tech.map(technology => {
                            return(
                                <li key={technology.id} className="list">{technology.list}</li>
                            )
                        })}
                    </ul>
                    <h3 className="mt-2">{project.title}</h3>
                    <p className="para">{project.description}</p>
                    <a className="icon-container border-inverse rotate" href="#"><FaArrowRight/></a>
                </div>
            </div>
        )
    })
  return (
    <section>
      <div className='wrapper p-block-9'>
        <div className="flex between gap-4">
            <div>
                <span className='sub-text overlay-text' datatype='My Portfolio'>My Portfolio</span>
                <h2>Let's Have a look<br/> at<span className='green-text'> My Portfolio</span></h2>
            </div>
            <a href="#" className='btn self-end'>View All Services</a>
        </div>
        <div className="flex column gap-2 mt-5">
             {renderProjectData}
        </div>
      </div>
    </section>
  )
}

export default Projects

const ProjectData = [
    {
        id: 1,
        title: "Smart Financial Dashboard for Digital Management",
        description: "A modern, user-friendly dashboard for tracking income, expenses, analytics, and card details with quick transfer and activity summaries.",
        image: Project1,
        tech: [
            {
                id: 1,
                list: 'React Js'
            },
            {
                id: 2,
                list: 'Next Js'
            },
            {
                id: 3,
                list: 'Vue Js'
            },

        ]
    },
    {
        id: 2,
        title: "Smart Financial Dashboard for Digital Management",
        description: "A modern, user-friendly dashboard for tracking income, expenses, analytics, and card details with quick transfer and activity summaries.",
        image: Project2,
        tech: [
            {
                id: 1,
                list: 'React Js'
            },
            {
                id: 2,
                list: 'Next Js'
            },
            {
                id: 3,
                list: 'Vue Js'
            },

        ]
    },
    {
        id: 3,
        title: "Smart Financial Dashboard for Digital Management",
        description: "A modern, user-friendly dashboard for tracking income, expenses, analytics, and card details with quick transfer and activity summaries.",
        image: Project3,
        tech: [
            {
                id: 1,
                list: 'React Js'
            },
            {
                id: 2,
                list: 'Next Js'
            },
            {
                id: 3,
                list: 'Vue Js'
            },

        ]
    }
]