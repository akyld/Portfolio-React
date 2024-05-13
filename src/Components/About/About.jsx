import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.jpg'

function About() {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img className="about-profile" src={profile_img} />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              As a young developer on the verge of graduating, I am excited to
              embark on my professional journey in the world of software
              development. With a strong academic background in computer science
              and a passion for coding, I am eager to apply my knowledge and
              skills to real-world projects. I have gained practical experience
              through internships and personal projects, where I honed my
              proficiency in various programming languages and frameworks. I
              thrive in collaborative environments, where I can learn from
              experienced professionals and contribute my fresh perspective.
            </p>
            <p>
              I am a fast learner with a keen attention to detail, always
              striving to write clean and efficient code. I am enthusiastic
              about tackling challenges head-on and continuously expanding my
              skill set. If you're looking for a motivated and dedicated junior
              developer with a drive for excellence, let's connect and explore
              how I can contribute to your team.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: '55%' }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: '55%' }} />
            </div>
            <div className="about-skill">
              <p>React Js</p>
              <hr style={{ width: '60%' }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>10+</h1>
          <p>Projects Completed</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>1+</h1>
          <p>Years of Experience</p>
        </div>
      </div>
    </div>
  )
}

export default About
