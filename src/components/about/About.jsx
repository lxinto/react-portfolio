import React from 'react'
import "./about.css"
import PIC from "../../assets/IMG_6855.jpg"


const About = () => {
  return (
    <section id='about'>
      <h1>About me</h1>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={PIC} alt="pic of my beautiful guitar" />
          </div>
        </div>
        <div className="about__content"></div>
      </div>
    </section>
  )
}

export default About