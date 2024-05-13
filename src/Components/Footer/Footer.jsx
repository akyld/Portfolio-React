import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.svg'

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <img src={logo} />
        <p>
          I'm a junior frontend developer based in Istanbul, striving to
          continuously improve and grow in my skills and knowledge.
        </p>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © 2024 Ali Kaan Yıldırım. All rights reserved
        </p>
        <div className="footer-bottom-right">
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
