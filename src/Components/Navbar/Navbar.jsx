import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { FaRegMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import React, { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  const handleScroll = (e, id) => {
    e.preventDefault();

    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth" });
    setIsMenuActive(false); // close mobile menu
  };

  return (
    <header>
      <nav className="flex between wrapper navbar">
        <a href="#home" className="logo">
          <span>T</span>Y
        </a>

        {/* DESKTOP MENU */}
        <ul className="flex gap-2 desktop-menu">
          <li><a href="#home" onClick={(e) => handleScroll(e, "home")} className="link">Home</a></li>
          <li><a href="#services" onClick={(e) => handleScroll(e, "services")} className="link">Service</a></li>
          <li><a href="#about" onClick={(e) => handleScroll(e, "about")} className="link">About Me</a></li>
          <li><a href="#testimonials" onClick={(e) => handleScroll(e, "testimonials")} className="link">Testimonials</a></li>
          <li><a href="#contact" onClick={(e) => handleScroll(e, "contact")} className="link">Contact Me</a></li>
        </ul>

        <div className="flex gap-2 nav-action">
          <button onClick={toggleTheme} className="icon-container border-inverse">
            {theme === "dark" ? <FiSun /> : <FaRegMoon />}
          </button>

          <a href="#contact" onClick={(e) => handleScroll(e, "contact")} className="btn">
            Let's Talk
          </a>

          <button className="hamberger" onClick={toggleMenu}>
            {isMenuActive ? <FaXmark /> : <FaBarsStaggered />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <ul className={`mobile-menu ${isMenuActive ? "mobile-menu-active" : ""}`}>
          <li><a href="#home" onClick={(e) => handleScroll(e, "home")} className="link">Home</a></li>
          <li><a href="#services" onClick={(e) => handleScroll(e, "services")} className="link">Service</a></li>
          <li><a href="#about" onClick={(e) => handleScroll(e, "about")} className="link">About Me</a></li>
          <li><a href="#testimonials" onClick={(e) => handleScroll(e, "testimonials")} className="link">Testimonials</a></li>
          <li><a href="#contact" onClick={(e) => handleScroll(e, "contact")} className="link">Contact Me</a></li>
          <li>
            <a href="#contact" onClick={(e) => handleScroll(e, "contact")} className="btn">
              Let's Talk
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
