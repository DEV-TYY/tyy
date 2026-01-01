import React, { useEffect, useRef } from "react";
import HeroImage from "../../assets/images/hero-image.png";
import CV from "../../assets/images/CV.pdf";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Hero.css";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // LEFT → slide from left
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, x: -150 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 85%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // RIGHT → slide from right
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: 150 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 85%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="home">
      <div className="hero-section flex wrapper gap-5 mt-5">
        <div className="hero-content" ref={contentRef}>
          <span className="sub-text">Hello there!</span>

          <h1>
            <span className="green-text">I'm Suon Ty,</span>
            <br />
            Web Developer based in Turbo Tech.
          </h1>

          <p className="para">
            I'm an experienced web designer with 3 years in the field,
            collaborating with various companies and startups.
          </p>

          <a href={CV} download className="btn border-btn">
            Download CV
          </a>
        </div>

        <div className="hero-image" ref={imageRef}>
          <img src={HeroImage} alt="Hero" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

