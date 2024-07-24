import React, { useState } from "react"
import "./Navbar.css"
import "./Mediaquery.css"

const Navbar = () => {
  const [layoutVisible, setLayoutVisible] = useState(false);

  const toggleLayout = () => {
    setLayoutVisible(!layoutVisible);
    if (!layoutVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  };

  const closeLayout = () => {
    setLayoutVisible(false);
    document.body.style.overflow = "visible";
  };

  return (
    <>
      <div id="empty"></div>
      <div id="nav" className="nav">
        <div className="cl">
          <div className="name">
            <h4>
              <span>{"</"}</span>
              Soumik
              <span>{">"}</span>
            </h4>
          </div>
          <div className="details">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Project</a>
            <a href="#contact">Contact Me</a>
          </div>
          <div className="links">
            <div className="linkedin common">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/soumik-nandi-b48a0922a/"
              >
                Linkedin
              </a>
            </div>
            <div className="github common">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Git-soumik1802"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Layout */}
      {layoutVisible && (
        <div id="layout">
          <div className="ilayout">
            <i className="ri-close-line" onClick={closeLayout}></i>
          </div>
          <div className="alayout">
            <a href="#about" onClick={closeLayout}>
              About
            </a>
            <a href="#skills" onClick={closeLayout}>
              Skills
            </a>
            <a href="#projects" onClick={closeLayout}>
              Projects
            </a>
            <a href="#contact" onClick={closeLayout}>
              Contact
            </a>
          </div>
        </div>
      )}

      {/* Hamburger Menu */}
      <div id="hammenu" className="hammenu">
        <div className="name">
          <h4>
            <span>{"</"}</span>
            Soumik
            <span>{">"}</span>
          </h4>
        </div>
        <div className="icon">
          <i className="ri-menu-line" onClick={toggleLayout}></i>
        </div>
      </div>
    </>
  )
}

export default Navbar
