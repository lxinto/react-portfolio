import React from 'react'
import CTA from './CTA'
import "./header.css"
import me from "../../assets/IMG_3560.png"
import HeaderSocials from './HeaderSocials'
import {BsFillArrowDownCircleFill} from "react-icons/bs"


const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>hello im</h5>
        <h1>Luka Khintibidze</h1>
        <h5 className="text-light">DevOps | Front-End </h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={me} alt="me" />
        </div>
        <a href="#contact" className='scroll__down'><BsFillArrowDownCircleFill size="35px"/></a>
      </div>
    </header>
  )
}

export default Header