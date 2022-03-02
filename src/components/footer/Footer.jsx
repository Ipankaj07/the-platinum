import React from 'react'
import "./footer.css"
import {BsInstagram, BsGithub, BsTwitter} from 'react-icons/bs'

function Footer() {
  return (
    <footer>
<a href="#" className='footer__logo'> тнє ρℓαтιηυм </a>
<ul className='permalinks' >
  <li> <a href="#">Home</a> </li>
  <li> <a href="#about">About</a> </li>
  <li> <a href="#experience">Experience</a> </li>
  <li> <a href="#services">Services</a> </li>
  <li> <a href="#portfolio">Portfolio</a> </li>
  <li> <a href="#testimonial">Testimonial</a> </li>
  <li> <a href="#contact">Contact</a> </li>
</ul>

<div className="footer__social">
  <a href="https://instagram.com" target="_blank"> <BsInstagram/> </a>
  <a href="https://github.com" target="_blank"> <BsGithub/>  </a>
  <a href="https://twitter.com" target="_blank"> <BsTwitter/>  </a>
</div>

<div className="footer__copyright">
  <small> &copy; The Platinum, All rights reserved. </small>
</div>
    </footer>
  )
}

export default Footer