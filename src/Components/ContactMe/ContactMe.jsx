import { FaFacebookF } from "react-icons/fa";
import { LiaTelegramPlane } from "react-icons/lia";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { SlSocialLinkedin } from "react-icons/sl";
import "./ContactMe.css";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContactMe = () => {
  const elementsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      elementsRef.current.forEach((el, index) => {
        if (!el) return;

        // Alternate slide directions for variety
        let x = 0, y = 0;
        if (index % 2 === 0) x = -100;
        if (index % 2 !== 0) y = 100;

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
    <section id="contact">
      <div className="wrapper p-block-9 border-btm">
        <div className='text-center' ref={el => elementsRef.current[0] = el}>
          <span className='sub-text overlay-text middle' datatype='Contact Me'>Contact Me</span>
          <h2>
            Let's Talk for <span className='green-text'> Your Next Project</span>
          </h2>
        </div>
        <div className="flex gap-5 mt-5">
          <form ref={el => elementsRef.current[1] = el}>
            <div className="flex gap-2">
              <div className="input-container">
                <label htmlFor="name">Your Name*</label>
                <input type="text" name="name" id="name" required autoComplete="off" placeholder="Enter Your Name" className="input-field" />
              </div>
              <div className="input-container">
                <label htmlFor="email">Your Email*</label>
                <input type="text" name="email" id="email" required autoComplete="off" placeholder="example@gmail.com" className="input-field" />
              </div>
            </div>
            <div className="flex gap-2 mt-1">
              <div className="input-container">
                <label htmlFor="phone">Phone Number*</label>
                <input type="tel" name="phone" id="phone" required autoComplete="off" placeholder="Enter Your Phone Number" className="input-field" />
              </div>
              <div className="input-container">
                <label htmlFor="interest">I'm interested in*</label>
                <select name="interest" id="interest" defaultValue="" className="input-field select">
                  <option value="" disabled>Select interest</option>
                  <option value="Website">Website</option>
                  <option value="Mobile App">Mobile App</option>
                  <option value="E-Commerce">E-Commerce</option>
                  <option value="Landing Page">Landing Page</option>
                  <option value="Portfolio">Portfolio</option>
                  <option value="Company Profile">Company Profile</option>
                  <option value="Business Software">Business Software</option>
                  <option value="POS System">POS System</option>
                  <option value="CRM System">CRM System</option>
                  <option value="ERP System">ERP System</option>
                </select>
              </div>
            </div>
            <div className="mt-1">
              <label htmlFor="message">Your Message*</label>
              <textarea name="message" id="message" placeholder="Enter Here..." className="input-field" rows={9} required></textarea>
            </div>
            <div className="mt-1">
              <a href="#" className="btn">Send Message</a>
            </div>
          </form>

          <div className='info' ref={el => elementsRef.current[2] = el}>
            <div className='detail gap-4'>
              <div>
                <h6>Address</h6>
                <p>Nº 9e2, St 372, Beong Salang, Toul Kork, <br />Phnom Penh</p>
              </div>
              <div>
                <h6>Contact</h6>
                <p>
                  Phone: 016 639011<br />
                  Email: suontii2023@gmail.com
                </p>
              </div>
              <div>
                <h6>Time:</h6>
                <p>
                  Monday - Friday: 08.00AM - 05.00PM<br />
                  Saturday-Sunday: 12:00 PM - 05.00PM
                </p>
              </div>
            </div>
            <div className="bg-header rounded-b">
              <h5>Stay Connected</h5>
              <div className="flex gap-1 mt-2">
                <a href="#" className="icon-container black-inverse"><FaFacebookF /></a>
                <a href="#" className="icon-container black-inverse"><LiaTelegramPlane /></a>
                <a href="#" className="icon-container black-inverse"><MdOutlineEmail /></a>
                <a href="#" className="icon-container black-inverse"><FaInstagram /></a>
                <a href="#" className="icon-container black-inverse"><SlSocialLinkedin /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
