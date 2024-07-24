import React from "react"
import "./Home.css"
import "./Mediaquery.css"

const Home = () => {
  const downloadCV = () => {
    // Adjust the path to your CV file
    const cvUrl = process.env.PUBLIC_URL + "./assets/soumikresume.pdf"

    // Open the CV file in a new window
    window.open(cvUrl, "_blank")
  }

  return (
    <div id="home">
      <main>
        <div className="image">
          <img src={process.env.PUBLIC_URL + "/assets/myimage.png"} alt="imageee" />
        </div>
        <div className="information">
          <h5>Hello, I'm</h5>
          <h1>SOUMIK NANDI</h1>
          <h3>Software Developer</h3>
          <div className="downloads">
            <button className="btn2" onClick={downloadCV}>
              Download CV
            </button>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
