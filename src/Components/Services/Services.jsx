import React, { useEffect, useRef } from "react";
import "./Services.css";
import { BsPencilFill } from "react-icons/bs";
import { FaPenNib, FaLaptopCode } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const titleRef = useRef(null); // For title animation
  const cardsRef = useRef([]);   // For cards animation

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title & subtitle from right
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { opacity: 0, x: 100 }, // slide from right
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 85%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }

      // Animate service cards
      cardsRef.current.forEach((el, index) => {
        if (!el) return;

        let x = 0;
        let y = 0;

        if (index === 0) x = -150; // left
        if (index === 1) y = 100;  // bottom
        if (index === 2) x = 150;  // right

        gsap.fromTo(
          el,
          { opacity: 0, x, y },
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="services">
      <div className="wrapper p-block-9 border-btm">
        <div className="flex between gap-4" ref={titleRef}>
          <div>
            <span className="sub-text overlay-text" datatype="Services">
              My Specialization
            </span>
            <h2>
              <span className="green-text">Services</span> I Provide
            </h2>
          </div>
          <a href="#" className="btn self-end">
            View All Services
          </a>
        </div>

        <div className="flex gap-2 stretch mt-5">
          {ServicesData.map((service, index) => (
            <div
              className="card design"
              key={service.id}
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <span className="service-icon">{service.icon}</span>
              <h4 className="m-block-1">{service.title}</h4>
              <p className="m-block-1 hide-text">{service.description}</p>
              <a href="#" className="link">
                Learn More&nbsp;
                <FaArrowRight className="arrow green-text" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

const ServicesData = [
  {
    id: 1,
    title: "UI/UX Design",
    description:
      "I offer professional UI/UX design services that blend aesthetics with functionality, creating...",
    icon: <BsPencilFill />,
  },
  {
    id: 2,
    title: "Application Design",
    description:
      "I provide professional app services, creating user-friendly and visually engaging...",
    icon: <FaPenNib />,
  },
  {
    id: 3,
    title: "Web Development",
    description:
      "I offer professional website design services that combine creativity and functionality...",
    icon: <FaLaptopCode />,
  },
];
