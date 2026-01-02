import { FaArrowRight } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Plans.css";

gsap.registerPlugin(ScrollTrigger);

const Plans = () => {
  const elementsRef = useRef([]); // for title/subtitle and cards

  useEffect(() => {
    const ctx = gsap.context(() => {
      elementsRef.current.forEach((el, index) => {
        if (!el) return;

        // Alternate slide directions for variety
        let x = 0, y = 0;
        if (index % 2 === 0) x = -100; // even: slide from left
        if (index % 2 !== 0) y = 100;  // odd: slide from bottom

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
    <section>
      <div className="wrapper p-block-9">
        <div className="flex between gap-4">
          <div ref={(el) => (elementsRef.current[0] = el)}>
            <span className="sub-text overlay-text" datatype="Pricing Table">
              Pricing Table
            </span>
            <h2>
              My <span className="green-text">Pricing Model</span>
            </h2>
          </div>
          <a href="#" className="btn self-end">
            Get Started
          </a>
        </div>

        <div className="flex mt-5 gap-5">
          {PlansData.map((plan, index) => (
            <div
              className="card"
              key={plan.id}
              ref={(el) => (elementsRef.current[index + 1] = el)} // cards start from index 1
            >
              <div className="bg-header flex between">
                <div>
                  <strong>{plan.title}</strong>
                  <h5 className="mt-1">{plan.price}</h5>
                  <small>/{plan.unit}</small>
                </div>
                <a href="#" className="icon-container black-inverse rotate self-start">
                  <FaArrowRight />
                </a>
              </div>
              <ul>
                {plan.features.map((list) => (
                  <li
                    className="feature flex gap-1 mt-1"
                    style={{ opacity: list.include ? 1 : 0.15 }}
                    key={list.id}
                  >
                    <span className="check">
                      <FaCheck />
                    </span>
                    {list.label}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;

const PlansData = [
  {
    id: 1,
    title: "Hourly",
    price: "$80",
    unit: "Hour",
    features: [
      { id: 1, label: "Lorem ipsum dolor sit amet", include: true },
      { id: 2, label: "Sed ut perspiciatis", include: true },
      { id: 3, label: "At vero eos et accusamus", include: true },
      { id: 4, label: "Vitae dicta sunt explicabo", include: true },
      { id: 5, label: "Veritatis et quasi architecto", include: false },
      { id: 6, label: "Beatae vitae dicta sunt", include: false },
      { id: 7, label: "Explicabo. Nemo enim", include: false },
      { id: 8, label: "Nemo enim ipsam voluptatem", include: false },
    ],
  },
  {
    id: 2,
    title: "Monthly",
    price: "$96.00",
    unit: "Month",
    features: [
      { id: 1, label: "Lorem ipsum dolor sit amet", include: true },
      { id: 2, label: "Sed ut perspiciatis", include: true },
      { id: 3, label: "At vero eos et accusamus", include: true },
      { id: 4, label: "Vitae dicta sunt explicabo", include: true },
      { id: 5, label: "Veritatis et quasi architecto", include: true },
      { id: 6, label: "Beatae vitae dicta sunt", include: true },
      { id: 7, label: "Explicabo. Nemo enim", include: false },
      { id: 8, label: "Nemo enim ipsam voluptatem", include: false },
    ],
  },
  {
    id: 3,
    title: "Quarterly",
    price: "$100.000",
    unit: "Qtr",
    features: [
      { id: 1, label: "Lorem ipsum dolor sit amet", include: true },
      { id: 2, label: "Sed ut perspiciatis", include: true },
      { id: 3, label: "At vero eos et accusamus", include: true },
      { id: 4, label: "Vitae dicta sunt explicabo", include: true },
      { id: 5, label: "Veritatis et quasi architecto", include: true },
      { id: 6, label: "Beatae vitae dicta sunt", include: true },
      { id: 7, label: "Explicabo. Nemo enim", include: true },
      { id: 8, label: "Nemo enim ipsam voluptatem", include: true },
    ],
  },
];
