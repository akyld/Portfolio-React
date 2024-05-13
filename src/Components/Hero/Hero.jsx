import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Hero() {
  return (
    <div id="home" className="hero">
      {/* <img src={profile_img} /> */}
      <h1>
        <span>I'm Kaan Yıldırım,</span> Jr Frontend Developer Based in Turkey
      </h1>
      <p>
        I'm a junior frontend developer based in Istanbul, striving to
        continuously improve and grow in my skills and knowledge.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" href="#contact">
            Connect With Me
          </AnchorLink>
        </div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  )
}

export default Hero
