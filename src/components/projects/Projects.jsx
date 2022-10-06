import React from 'react'
import "./projects.css"
import landing from "../../assets/landing.png"
import ecommerce from "../../assets/ecommerce.png"
import blackjack from "../../assets/blackjack.png"
/* ----------------------- PROJECT DATA TEMPLATE -------------------

{
  id: ,
  image: ,
  title: "",
  github: "",
  livedemo: "",
},

----------------------------------------------------------------- */

const data = [
  {
    id: 1,
    image: landing,
    title: "Europabet Landing Page",
    github: "https://github.com/lxinto/europabet-landing-page",
    livedemo: "https://lxinto.github.io/europabet-landing-page/",
  },
  {
    id: 2,
    image: ecommerce,
    title: "React Ecommerce",
    github: "https://github.com/lxinto/react-ecommerce",
    livedemo: "https://lxinto.github.io/react-candle-shop/",
  },
  {
    id: 3,
    image: blackjack,
    title: "Javascript BlackJack",
    github: "https://github.com/lxinto/javascript-BlackJack",
    livedemo: "https://lxinto.github.io/javascript-BlackJack/",
  },
]

const Projects = () => {
  return (
    <section id='projects'>
        <div>
          <h2>My Projects</h2>
        </div>

        <div className="container projects__container">
          {
            data.map(({id, image, title, github, livedemo }) => {
              return (
                <article key={id} className="portfolio__item">
                  <div className="portfolio__item-image">
                    <img src={image} alt={title} />
                  </div>
                  <h3>{title}</h3>
                  <div className="portfolio__item-cta">
                    <a href={github} className='btn' target="_blank" rel="noreferrer">Github</a>
                    <a href={livedemo} className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>
                  </div>
                </article>
              )
            })
          }
        </div>
    </section>
  )
}

export default Projects