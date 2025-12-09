import { FaGraduationCap } from "react-icons/fa6";
import { FaSuitcase } from "react-icons/fa6";
import React from 'react'
import "./Education.css"

const Education = () => {
    const Card = (props) => {
        return(
            <div className="card design">
                <div className="flex gap-1 border-btm p-bottom-1">
                    <div className='icon-container green-inverse'>
                        {props.icon}
                    </div>
                    <h3>{props.title}</h3>
                </div>
                <div className="mt-2">
                    {props.item.map(education => {
                        return(
                            <div key={education.id} className='flex between mt-2'>
                                <div>
                                    <span className='sub-text'>{education.institude}</span>
                                    <p>{education.subtitle}</p>
                                </div>
                                <div className='list'>{education.date}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
  return (
    <section>
        <div className='wrapper p-block-9'>
            <div className='text-center'>
                <span className='sub-text overlay-text middle' datatype='Education & Work'>Education & Work</span>
                <h2>My <span className='green-text'>Academic &<br/> Professional</span> Journey</h2>
            </div>              
            <div className="flex gap-5 mt-5">
                <Card item={EducationData} title="Education" icon={<FaGraduationCap />}/>
                <Card item={WorkExperience} title="Work Experience" icon={<FaSuitcase />}/>

            </div>
        </div>
    </section>
  )
}

export default Education

const EducationData = [
    {
        id: 1,
        institude: 'Bun Rany Hun Sen Memot High School',
        subtitle: "High school",
        date: "2014-2019"
    },
    {
        id: 2,
        institude: 'Royal University of Phnom Penh',
        subtitle: "University",
        date: "2020-2024"
    }
]

const WorkExperience = [
    {
        id: 1,
        institude: "TURBOTECH",
        date: "2023 - 2025"
    }
]