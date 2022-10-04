import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/khintibidzel/" target="_blank" rel="noreferrer"><BsLinkedin size="20px"/></a>
        <a href="https://github.com/lxinto" target="_blank" rel="noreferrer"><BsGithub size="20px"/></a>
    </div>
  )
}

export default HeaderSocials