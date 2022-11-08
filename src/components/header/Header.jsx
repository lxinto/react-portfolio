import React from 'react'
import CTA from './CTA'
import "./header.css"
import me from "../../assets/messenger.jpg"
import HeaderSocials from './HeaderSocials'
import {AiFillSmile} from "react-icons/ai"


const Header = () => {
  return (
    <header id='home'>
      <div className="container header__container">
        <h5>Hello! I'm</h5>
        <h1>Luka Khintibidze</h1>
        <h5 className="text-light">DevOps | Front-End</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={me} alt="me" />
        </div>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" target='_blank' rel="noreferrer" className='scroll__down'><AiFillSmile size="35px"/></a>
      </div>
    </header>
  )
}

export default Header