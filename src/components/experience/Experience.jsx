import React from 'react'
import "./experience.css"

const Experience = () => {
  return (
    <section id='experience'>
      <div className="container experience__container">
        <div className="education">
          <div className="education__content">
            <article className='experience__details'>
              <article>
                <h2>Education</h2>
              </article>
              <h4>DevOps @ TBC IT Academy</h4>
              <small className='text-light'>2022, May - 2022, Nov.</small>
              <small className='text-light'> Linux, Git, Docker, OpenShift, Helm, Istio, CI/CD, Grafana, Prometheus, etc.</small>
            </article>
            <article className='experience__details'>
              <h4>CyberSecurity and 5G league @ Caucasus University</h4>
              <small className='text-light'>2022, 5 Sep. - 2022, 18 sep.</small>
              <small className='text-light'> Python, Cybersecurity, AI, 5G, IoT, Cryptography, Secure Infrastructure planning best practices, Ethical hacking, etc.</small>
            </article>
            <article className='experience__details'>
              <h4>Tourism Managemet @ Caucasus University</h4>
              <small className='text-light'>2018 - 2022.</small>
              <small className='text-light'> Marketing, Management, Accounting, Statistics, Excel, Business Plan, etc.</small>
            </article>
            <br />
            <article className='experience__details'>
              <h4>I also have number of tech related <mark>certificates</mark> that you can view on my <a href="https://www.linkedin.com/in/khintibidzel/details/certifications/" target="_blank" rel="noreferrer" className='btn'>LinkedIn Profile</a> </h4>
            </article>
          </div>
        </div>
        <div className="experience">
          <article className='experience__details'>
              <h2>Experience</h2>
              <h3>
                As of now, I have no relevant working experience in IT industry but
                here are few places I've worked in the past.
              </h3>
              <br/>
              <br/>
            </article>
            <article className='experience__details'>
              <h4>Event Organizer Intern @ Chavchavadze Center</h4>
              <small className='text-light'>2019, Dec. - 2020, Jan. | Helped in planning of a 3 day even for the ambassador of Germany</small>
            </article>
            <article className='experience__details'>
              <h4>Marketing Specialist Intern @ Samtskhe-Javakheti DMO</h4>
              <small className='text-light'>2020, May. - 2020, Aug. | Helped in developing of new marketing campaign for Samtskhe-Javakheti's Destination Management Organization</small>
            </article>
        </div>
      </div>
    </section>
  )
}

export default Experience