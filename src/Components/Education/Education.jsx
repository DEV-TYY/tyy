import { FaGraduationCap, FaSuitcase } from "react-icons/fa6";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Education.css";

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const elementsRef = useRef([]); // use single ref array for title & cards

  useEffect(() => {
    const ctx = gsap.context(() => {
      elementsRef.current.forEach((el, index) => {
        if (!el) return;

        let x = 0, y = 0;
        if (index === 0) x = 100; // Title slides from right
        else if (index % 2 === 0) x = -100; // even cards slide from left
        else y = 100; // odd cards slide from bottom

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

        // Animate children inside cards sequentially
        if (index !== 0) {
          const children = el.querySelectorAll(".flex.between.mt-2");
          gsap.fromTo(
            children,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.15,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
              },
            }
          );
        }
      });
    });

    return () => ctx.revert();
  }, []);

  const Card = ({ item, title, icon, index }) => {
    return (
      <div className="card design" ref={(el) => (elementsRef.current[index] = el)}>
        <div className="flex gap-1 border-btm p-bottom-1">
          <div className="icon-container green-inverse">{icon}</div>
          <h3>{title}</h3>
        </div>
        <div className="mt-2">
          {item.map((edu) => (
            <div key={edu.id} className="flex between mt-2">
              <div>
                <span className="sub-text">{edu.institude}</span>
                {edu.subtitle && <p>{edu.subtitle}</p>}
              </div>
              <div className="list">{edu.date}</div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="educations">
      <div className="wrapper p-block-9">
        <div className="text-center" ref={(el) => (elementsRef.current[0] = el)}>
          <span
            className="sub-text overlay-text middle"
            datatype="Education & Work"
          >
            Education & Work
          </span>
          <h2>
            My <span className="green-text">Academic &<br /> Professional</span> Journey
          </h2>
        </div>
        <div className="flex gap-5 mt-5">
          <Card item={EducationData} title="Education" icon={<FaGraduationCap />} index={1} />
          <Card item={WorkExperience} title="Work Experience" icon={<FaSuitcase />} index={2} />
        </div>
      </div>
    </section>
  );
};

export default Education;

// Data
const EducationData = [
  {
    id: 1,
    institude: "Bun Rany Hun Sen Memot High School",
    subtitle: "High school",
    date: "2014-2019",
  },
  {
    id: 2,
    institude: "Royal University of Phnom Penh",
    subtitle: "University",
    date: "2020-2024",
  },
];

const WorkExperience = [
  {
    id: 1,
    institude: "TURBOTECH",
    date: "2023 - 2026",
  },
];
