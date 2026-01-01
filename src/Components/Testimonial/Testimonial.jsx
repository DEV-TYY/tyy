import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { FaStar } from "react-icons/fa";
import Slider from "react-slick";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Testimonial.css";

gsap.registerPlugin(ScrollTrigger);

const Testimonial = () => {
  const sliderRef = useRef(null);
  const elementsRef = useRef([]); // for title and cards

  useEffect(() => {
    const ctx = gsap.context(() => {
      elementsRef.current.forEach((el, index) => {
        if (!el) return;

        // Alternate slide directions for variety
        let x = 0, y = 0;
        if (index % 2 === 0) x = 100;  // even: slide from right
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => {
      const activeSlide = sliderRef.current.innerSlider.list.querySelectorAll(".slick-slide")[current];
      if (activeSlide)
        gsap.fromTo(
          activeSlide,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
        );
    },
    responsive: [{ breakpoint: 790, settings: { slidesToShow: 1 } }],
  };

  return (
    <section id="testimonials">
      <div className="wrapper p-block-9 border-btm">
        {/* Title */}
        <div className="text-center" ref={el => elementsRef.current[0] = el}>
          <span className="sub-text overlay-text middle" datatype="Client Testimonials">
            Client Testimonials
          </span>
          <h2>
            Client Testimonials that <span className="green-text">Speaks to my result</span> Journey
          </h2>
        </div>

        {/* Slider */}
        <Slider ref={sliderRef} {...settings} className="mt-5">
          {TestimonialsData.map((review, index) => (
            <div
              className="card"
              key={review.id}
              ref={el => elementsRef.current[index + 1] = el} // cards start from index 1
            >
              <div className="flex gap-2">
                <div className="profile">
                  <img src={review.avatar} alt={review.name} />
                </div>
                <div>
                  <h4>{review.name}</h4>
                  <p>{review.role}</p>
                  <span>
                    {Array.from({ length: review.rating }, (_, i) => (
                      <FaStar key={i} className="rating-star" />
                    ))}
                  </span>
                </div>
              </div>
              <div>
                <p className="para">{review.comment}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;

const TestimonialsData = [
  {
    id: 1,
    name: "John Doe",
    role: "Project Manager at ABC Corp",
    avatar: "https://randomuser.me/api/portraits/men/11.jpg",
    rating: 5,
    comment: "This system really improves our workflow and saves a lot of time!",
  },
  {
    id: 2,
    name: "Lisa Smith",
    role: "Store Owner",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce",
    rating: 5,
    comment: "Very useful and easy to use. Support team helped me set everything up.",
  },
  {
    id: 3,
    name: "Michael Brown",
    role: "Marketing Specialist",
    avatar: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    rating: 5,
    comment: "The analytics and report feature are my favorite. Highly recommended!",
  },
];
