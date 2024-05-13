import React from 'react'
import './Contact.css'
import { FaEnvelope } from 'react-icons/fa6'
import { FaLocationDot } from 'react-icons/fa6'
import { FaPhone } from 'react-icons/fa6'

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)

    formData.append('access_key', '7fb633db-a017-4534-b7ea-23ccefb43143')

    const object = Object.fromEntries(formData)
    const json = JSON.stringify(object)

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: json,
    }).then((res) => res.json())

    if (res.success) {
      alert(res.message)
    }
  }
  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get In Touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>Have a project you'd like to discuss?</p>
          <div className="contact-details">
            <div className="contact-detail">
              {<FaEnvelope />}
              <p>yildirim.kaan1242@gmail.com</p>
            </div>
            <div className="contact-detail">
              {<FaPhone />}
              <p>+90 543 865 3957</p>
            </div>
            <div className="contact-detail">
              {<FaLocationDot />}
              <p>İstabul, Turkey</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter Your Name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter Your Email" name="email" />
          <label htmlFor="">Write Your Message Here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter Your Message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit Now
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
