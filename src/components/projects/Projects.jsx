import React from 'react'
import "./projects.css"
import landing from "../../assets/landing.png"
import ecommerce from "../../assets/ecommerce.png"
import blackjack from "../../assets/blackjack.png"
import openshift from "../../assets/openshift.png"
import canary from "../../assets/canary.png"
import micro from "../../assets/micro.png"
import helm from "../../assets/helm.jpg"

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
    image: openshift,
    title: "App deployment on OpenShift",
    github: "https://github.com/lxinto/openshift-istio",
    livedemo: '#'
  },
  {
    id: 2,
    image: canary,
    title: "Canary deployment with Istio",
    github: "https://github.com/lxinto/canary-deployment-openshift-istio",
    livedemo: "#",
  },
  {
    id: 7,
    image: helm,
    title: "Custom Helm Charts",
    github: "https://github.com/lxinto/custom-helm-charts",
    livedemo: "#",
  },
  {
    id: 4,
    image: landing,
    title: "Europebet Landing Page",
    github: "https://github.com/lxinto/europabet-landing-page",
    livedemo: "https://lxinto.github.io/europabet-landing-page/",
  },
  {
    id: 3,
    image: micro,
    title: "Kubernetes Microservice Architecture",
    github: "https://github.com/lxinto/kubernetes-micro-services",
    livedemo: "#",
  },
  {
    id: 5,
    image: ecommerce,
    title: "React Ecommerce",
    github: "https://github.com/lxinto/react-ecommerce",
    livedemo: "https://lxinto.github.io/react-candle-shop/",
  },
  {
    id: 6,
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