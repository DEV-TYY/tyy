// AboutMe.jsx
import React, { useEffect, useRef } from "react";
import AboutImage from "../../assets/images/about-image.png";
import CV from "../../assets/images/CV.pdf";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./AboutMe.css";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const statsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image animation (slide left)
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: -150 },
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

      // Content animation (slide right)
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, x: 150 },
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

      // Stats stagger animation
      gsap.fromTo(
        statsRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
          },
        }
      );
    });

    return () => ctx.revert(); // StrictMode safe
  }, []);

  return (
    <section id="about">
      <div className="flex gap-5 wrapper p-block-9 border-btm">
        {/* IMAGE */}
        <div className="about-image" ref={imageRef}>
          <img src={AboutImage} alt="About Me" />
        </div>

        {/* CONTENT */}
        <div className="about-content" ref={contentRef}>
          <span className="sub-text overlay-text" datatype="About Me">
            About Me
          </span>

          <h2>
            Who is <span className="green-text">Suon Ty?</span>
          </h2>

          <p className="para">
            A web developer passionate about clean code, modern design, user
            experience, and building responsive, accessible, and high
            performing digital products.
          </p>

          <div className="flex gap-2 m-block-3">
            {[
              { value: "20+", label: "Projects Completed" },
              { value: "06+", label: "Industry Covered" },
              { value: "03+", label: "Years Of Experience" },
            ].map((item, index) => (
              <div
                key={index}
                ref={(el) => (statsRef.current[index] = el)}
              >
                <h6>{item.value}</h6>
                <p>{item.label}</p>
              </div>
            ))}
          </div>

          <a href={CV} download="My CV" className="btn">
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
