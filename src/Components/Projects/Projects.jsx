// Projects.jsx
import React, { useEffect, useRef } from "react";
import Project1 from "../../assets/images/Project1.jpg";
import Project2 from "../../assets/images/Project2.jpg";
import Project3 from "../../assets/images/Project3.jpg";
import { FaArrowRight } from "react-icons/fa6";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Projects.css";

gsap.registerPlugin(ScrollTrigger);

const ProjectData = [
  {
    id: 1,
    title: "RED-ANT-MOBILE-ADMIN",
    description:
      "A modern, user-friendly dashboard for tracking income, expenses, analytics, and card details with quick transfer and activity summaries.",
    image: Project1,
    url: "#",
    tech: ["MySQL Server", "Laravel", "JavaScript", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "CHHUN ON GOLF RESORT",
    description:
      "We are delighted to welcome you to Chhun On Golf Resort, located only 40 minutes’ drive from the heart of Phnom Penh.",
    image: Project2,
    url: "https://www.chhunon-golfresort.com/",
    tech: ["Laravel", "Tailwind CSS", "JavaScript", "Jquery"],
  },
  {
    id: 3,
    title: "Smart Financial Dashboard",
    description:
      "A modern, user-friendly dashboard for tracking income, expenses, analytics, and card details.",
    image: Project3,
    url: "#",
    tech: ["React Js", "Next Js", "Vue Js"],
  },
];

const Projects = () => {
  const titleRef = useRef(null); // for title animation
  const projectRef = useRef([]); // for cards animation

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title & subtitle from left
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { opacity: 0, x: -100 },
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

      // Animate project cards
      projectRef.current.forEach((el, index) => {
        if (!el) return;

        gsap.fromTo(
          el,
          {
            opacity: 0,
            x: index % 2 === 0 ? -150 : 150,
          },
          {
            opacity: 1,
            x: 0,
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
    <section id="projects">
      <div className="wrapper p-block-9">
        <div className="flex between gap-4" ref={titleRef}>
          <div>
            <span className="sub-text overlay-text" datatype="My Portfolio">
              My Portfolio
            </span>
            <h2>
              Let's Have a look <br /> at{" "}
              <span className="green-text">My Portfolio</span>
            </h2>
          </div>

          <a href="#" className="btn self-end">
            View All Services
          </a>
        </div>

        <div className="flex column gap-2 mt-5">
          {ProjectData.map((project, index) => (
            <div
              key={project.id}
              className="card flex gap-5 project"
              ref={(el) => (projectRef.current[index] = el)}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="project-content">
                <ul className="flex gap-1">
                  {project.tech.map((tech, i) => (
                    <li key={i} className="list">
                      {tech}
                    </li>
                  ))}
                </ul>

                <h3 className="mt-2">{project.title}</h3>
                <p className="para">{project.description}</p>

                <a
                  className="icon-container border-inverse rotate"
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaArrowRight />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
