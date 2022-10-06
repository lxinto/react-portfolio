import React from 'react'
import "./contact.css"
import {MdAlternateEmail} from "react-icons/md" 
import {RiMessengerLine} from "react-icons/ri"
import {BsLinkedin} from "react-icons/bs"

const Contact = () => {
  return (
    <section id='contact'>
        <h2>Contact Me!</h2>
        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <MdAlternateEmail size="25px"/>
              <h4>Email</h4>
              <h5>khintibidzel@gmail.com</h5>
              <a href="mailto:khintibidzel@gmail.com" target="_blank">Send me an Email</a>
            </article>
            <article className="contact__option">
              <RiMessengerLine size="25px"/>
              <h4>Messenger</h4>
              <h5>Luka Khintibidze</h5>
              <a href="https://m.me/lkhintibidze" target="_blank">Send me a message</a>
            </article>
            <article className="contact__option">
              <BsLinkedin size="25px"/>
              <h4>LinkedIn</h4>
              <h5>@khintibidzel</h5>
              <a href="https://www.linkedin.com/in/khintibidzel/" target="_blank">Lets connect!</a>
            </article>
          </div>

          <form action=""></form>
        </div>
    </section>
  )
}

export default Contact