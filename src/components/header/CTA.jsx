import React from 'react'
import CV from "../../assets/Luka-Khintibidze-CV.pdf"
const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download="Luka-Khintibidze-CV" className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Contact me!</a>
    </div>
  )
}

export default CTA