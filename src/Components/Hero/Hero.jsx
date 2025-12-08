import React from 'react'
import HeroImage from "../../assets/images/hero-image.png"
import CV from "../../assets/images/CV.pdf"
import "./Hero.css"

const Hero = () => {
  return (
    <section>
        <div className='hero-section flex wrapper gap-4'>
            <div className='hero-content'>
                <span className='sub-text'>Hello there!</span>
                <h1>
                    <span className='green-text'>I'm Suon Ty,</span>
                    <br/>Web Developer based in Turbo Tech.
                </h1>
                <p className='para'>I'm an experienced web desinger with 3 years in the field, Collaborating with various completes and startups</p>
                <div className='flex gap-2'>
                    <a href="#" className='btn'>View My works</a>
                    <a href={CV} download="My CV" className='btn border-btn'>Download CV</a>
                </div>
            </div>
            <div className='hero-image'>
                <img src={HeroImage} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Hero
