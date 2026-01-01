import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { FaRegMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import React, { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [activeMenu, setActiveMenu] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  /* Theme */
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  /* Scroll blur */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Observe sections for active menu */
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveMenu(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.6, // 60% of section visible
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const toggleTheme = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  const toggleMenu = () => setIsMenuActive((prev) => !prev);

  const handleScroll = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth" });
    setActiveMenu(id);
    setIsMenuActive(false);
  };

  const menuItem = (id, label) => (
    <li key={id}>
      <a
        href={`#${id}`}
        onClick={(e) => handleScroll(e, id)}
        className={`link ${activeMenu === id ? "active" : ""}`}
      >
        {label}
      </a>
    </li>
  );

  return (
    <header>
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <a href="#home" className="logo" onClick={(e) => handleScroll(e, "home")}>
          <span>T</span>Y
        </a>

        {/* Desktop Menu */}
        <ul className="flex gap-2 desktop-menu">
          {menuItem("home", "Home")}
          {menuItem("services", "Service")}
          {menuItem("about", "About Me")}
          {menuItem("projects", "Projects")}
          {menuItem("educations", "Educations")}
          {menuItem("testimonials", "Testimonials")}
          {menuItem("contact", "Contact Me")}
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

        {/* Mobile Menu */}
        <ul className={`mobile-menu ${isMenuActive ? "mobile-menu-active" : ""}`}>
          {menuItem("home", "Home")}
          {menuItem("services", "Service")}
          {menuItem("about", "About Me")}
          {menuItem("projects", "Projects")}
          {menuItem("educations", "Educations")}
          {menuItem("testimonials", "Testimonials")}
          {menuItem("contact", "Contact Me")}
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
