import AboutImage from "../../assets/images/about-image.png"
import CV from "../../assets/images/CV.pdf"
import React from 'react'
import "./AboutMe.css"

const AboutMe = () => {
  return (
    <section>
      <div className="flex gap-5 wrapper p-block-9 border-btm">
          <div className="about-image">
              <img src={AboutImage} alt="" />
          </div>
          <div className="about-content">
                <span className='sub-text overlay-text' datatype='About Me'>About Me</span>
                <h2>Who is <span className='green-text'>Suon Ty?</span></h2>
                <p className="para">
                    a web developer passionate about clean code, moderm design, user experience, and building responsive, accesible, and hight performing degital products.
                </p>
                <div className="flex gap-2 m-block-3">
                    <div>
                        <h6>20+</h6>
                        <p>
                            Projects Completed
                        </p>
                    </div>
                    <div>
                        <h6>06+</h6>
                        <p>
                            Industry Covered
                        </p>
                    </div>
                    <div>
                        <h6>03+</h6>
                        <p>
                            Years Of Experience
                        </p>
                    </div>
                </div>
                <a href={CV} download="My CV" className='btn'>Download CV</a>
          </div>
      </div>
    </section>
  )
}

export default AboutMe
