import React, { useState } from "react";
import profile from "../assets/img/profile-img.jpg";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  const [tab, setActiveTab] = useState("home");
  return (
    <div className={toggle ? "mobile-nav-active" : ""}>
      <button
        type="button"
        onClick={() => setToggle(!toggle)}
        className="mobile-nav-toggle d-xl-none"
      >
        <i className="icofont-navigation-menu"></i>
      </button>
      <header id="header">
        <div className="d-flex flex-column">
          <div className="profile">
            <img
              width="300px"
              height="300px"
              src={profile}
              alt=""
              className="img-fluid rounded-circle"
            />
            <h1 className="text-light">
              <a href="index.html">Rahul Hirve</a>
            </h1>
            <div className="social-links mt-3 text-center">
              <a
                href="https://twitter.com/Rhirve"
                target="_blank"
                rel="noreferrer"
                className="twitter"
              >
                <i className="bx bxl-twitter"></i>
              </a>
              <a
                href="https://www.facebook.com/rhirve"
                target="_blank"
                rel="noreferrer"
                className="facebook"
              >
                <i className="bx bxl-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com/rahulhirve/"
                target="_blank"
                rel="noreferrer"
                className="instagram"
              >
                <i className="bx bxl-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/rhirve/"
                target="_blank"
                rel="noreferrer"
                className="linkedin"
              >
                <i className="bx bxl-linkedin"></i>
              </a>
            </div>
          </div>

          <nav className="nav-menu">
            <ul>
              <li
                className={tab === "home" ? "active" : ""}
                onClick={() => setActiveTab("home")}
              >
                <a href="#hero">
                  <i className="bx bx-home"></i> <span>Home</span>
                </a>
              </li>
              <li
                className={tab === "about" ? "active" : ""}
                onClick={() => setActiveTab("about")}
              >
                <a href="#about">
                  <i className="bx bx-user"></i> <span>About</span>
                </a>
              </li>
              <li
                className={tab === "skills" ? "active" : ""}
                onClick={() => setActiveTab("skills")}
              >
                <a href="#skills">
                  <i className="bx bx-book-content"></i> Skills
                </a>
              </li>
              <li
                className={tab === "resume" ? "active" : ""}
                onClick={() => setActiveTab("resume")}
              >
                <a href="#resume">
                  <i className="bx bx-file-blank"></i> <span>Resume</span>
                </a>
              </li>
              <li
                className={tab === "contact" ? "active" : ""}
                onClick={() => setActiveTab("contact")}
              >
                <a href="#contact">
                  <i className="bx bx-envelope"></i> Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}
