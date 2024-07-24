import React from "react"
import "./Project.css"
import "./Mediaquery.css"

const Project = () => {
  return (
    <>
      <div id="projects">
        <div className="head">
          <h6>browse my recent</h6>
          <h1>projects</h1>
        </div>
        <div className="cont">
          <div className="box">
            <img src="../assets/be.png" alt="" />
            <h1> eCommerce Website</h1>
            <div className="buttonn">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://app.netlify.com/"
              >
                live
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Git-soumik1802/mycommerce"
              >
                github
              </a>
            </div>
          </div>
          <div className="box">
            <img src="../assets/be2.png" alt="" />
            <h1>redux cart</h1>
            <div className="buttonn">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://redux-c.netlify.app/"
              >
                live
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Git-soumik1802/ReduxCart"
              >
                github
              </a>
            </div>
          </div>
          <div className="box">
            <img src="../assets/be3.png" alt="" />
            <h1>get tala</h1>
            <div className="buttonn">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://gettala.netlify.app/"
              >
                live
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Git-soumik1802/Getala"
              >
                github
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Project
