import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { FaBars } from 'react-icons/fa6'
import { FaX } from 'react-icons/fa6'

function Navbar() {
  const [menu, setMenu] = useState()
  const menuRef = useRef()

  const openMenu = () => {
    menuRef.current.style.right = '0'
  }

  const closeMenu = () => {
    menuRef.current.style.right = '-350px'
  }

  return (
    <div className="navbar">
      <img className="logo" src={logo} alt="Logo" />
      <FaBars onClick={openMenu} className="nav-mob-open" />
      <ul ref={menuRef} className="nav-menu">
        <FaX onClick={closeMenu} className="nav-mob-close" />
        <AnchorLink className="anchor-link" offset={50} href="#home">
          <li>
            <p
              onClick={() => setMenu('home')}
              className={menu === 'home' ? 'active' : ''}
            >
              Home
            </p>
          </li>
        </AnchorLink>
        <AnchorLink className="anchor-link" offset={50} href="#about">
          <li>
            <p
              onClick={() => setMenu('about me')}
              className={menu === 'about me' ? 'active' : ''}
            >
              About Me
            </p>
          </li>
        </AnchorLink>
        <AnchorLink className="anchor-link" offset={50} href="#services">
          <li>
            <p
              onClick={() => setMenu('services')}
              className={menu === 'services' ? 'active' : ''}
            >
              Services
            </p>
          </li>
        </AnchorLink>
        <AnchorLink className="anchor-link" offset={50} href="#work">
          <li>
            <p
              onClick={() => setMenu('portfolio')}
              className={menu === 'portfolio' ? 'active' : ''}
            >
              Portfolio
            </p>
          </li>
        </AnchorLink>
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          <li>
            <p
              onClick={() => setMenu('contact')}
              className={menu === 'contact' ? 'active' : ''}
            >
              Contact
            </p>
          </li>
        </AnchorLink>
      </ul>
      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  )
}

export default Navbar
