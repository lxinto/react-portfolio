import React from 'react'
import "./nav.css"
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai"
import {BiBookAlt} from "react-icons/bi"
import {AiTwotoneExperiment} from "react-icons/ai"
import {BsChatText} from "react-icons/bs"
import { Link } from "react-scroll"

const Nav = () => {

  

  return (
    <nav>
     <ul>
        <li>
          <Link activeClass="active" spy to="home">
            <AiOutlineHome/>
          </Link>
        </li>
        <li>
          <Link activeClass="active" spy to="about">
            <AiOutlineUser/>
          </Link>
        </li>
        <li>
          <Link activeClass="active" spy to="experience">
            <BiBookAlt/>
          </Link>
        </li>
        <li>
          <Link activeClass="active" spy to="projects">
            <AiTwotoneExperiment/>
          </Link>
        </li>
        <li>
          <Link activeClass="active" spy to="contact">
            <BsChatText/>
          </Link>
        </li>
		  </ul>
    </nav>
  )
}

export default Nav