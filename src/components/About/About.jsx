import React from "react"
import "./About.css"
import "remixicon/fonts/remixicon.css"
import "./Mediaquery.css"

const About = () => {
  return (
    <>
      <div id="about">
        <div className="navbar">
          <h3>get to know more</h3>
          <h1>About me</h1>
        </div>
        <div className="content">
          <div className="left">
            <img src="../assets/aaa.png" alt="img" />
          </div>
          <div className="right">
            <div className="top">
              <div className="tleft">
                <i class="ri-medal-line"></i>
                <h1>Experience</h1>
                <h2>Fresher</h2>
                <h2>Full Stack Developer </h2>
              </div>
              <div className="tright">
                <i class="ri-school-line"></i>
                <h1>Education</h1>
                <h2>10th(88.4%) & 12th(93.4%)</h2>
                <h2>B-tech It (8.6 cgpa)</h2>
              </div>
            </div>
            <div className="btm">
              My name is Soumik Nandi, and I am an expert in MERN Stack development. I understand full-stack web development very well, and I know a lot about data structures and algorithms in C++.  I also possess knowledge of Computer Networks and Object-Oriented Programming (OOPs) concepts. I am currently enrolled in a BTech programme with the intention of graduating in 2025. I work hard to produce software solutions of the highest calibre and am committed to learning.
            </div>
          </div>
        </div>
        <div className="na">
          <p>My name is Soumik Nandi, and I am an expert in MERN Stack development. I understand full-stack web development very well, and I know a lot about data structures and algorithms in C++.  I also possess knowledge of Computer Networks and Object-Oriented Programming (OOPs) concepts. I am currently enrolled in a BTech programme with the intention of graduating in 2025. I work hard to produce software solutions of the highest calibre and am committed to learning.</p>
        </div>
      </div>
    </>
  )
}

export default About
