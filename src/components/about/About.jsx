import React from 'react'
import "./about.css"
import PIC from "../../assets/IMG_6855.jpg"


const About = () => {
  const d = new Date();
  let year = d.getFullYear();
  let born = 2000 
  function age() {
    return year - born 
  }
 const myAge = age()

  return (
    <section id='about'>

      <div className="container about__container">
        
        <div className="about__me">
          <div className="about__me-img">
            <img src={PIC} alt="pic of my beautiful guitar" />
          </div>
        </div>
        
        <div className="about__content">
          <h1>About me</h1>
          <br/>
          <h4>
            Hey I'm Luka, {myAge} year old DevOps Engineer with a background in Front-End Development. <br/><br/>
            My Journey in Tech started not too long ago but through many hours of hard work and dedication I got accepted to
            TBC IT Academy where I got to study about DevOps and gained experience working with Unix based systems, server administration 
            as well as technologies such as Docker, Kubernetes and so on. Other than DevOps I'm also experienced in Front-End Development with
            proven skills in working with React framework.<br/><br/>

            Other than my fascination with DevOps and coding in general, I also enjoy playing guitar and making posters with PhotoShop in my free time. 

          </h4>
        </div>
         

          
      </div>
    </section>
  )
}

export default About