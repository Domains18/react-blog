import React from 'react';
import './Footer.css';
import { RiMessengerLine } from 'react-icons/ri';
import { IoLogoWhatsapp } from 'react-icons/io';
import { CiTwitter } from 'react-icons/ci';
import { MdOutgoingMail } from 'react-icons/md';
const Footer = () => {
  return (
    <footer>
      <div className="footer-header">
        <div className="title-1">
          <h1>Our Patner Organizations</h1>
          <p>Savannah Sillica</p>
          <aside>
            <p>Know More About Savannah</p>
            <a href="https://facebook.com"><RiMessengerLine className='icons' /></a>
            <a href="https://com.whatsApp">
              <IoLogoWhatsapp className='icons' />
            </a>
            <a href="https://twitter.com">
              <CiTwitter className='icons' />
            </a>
            <a href="https://google.com">
              <MdOutgoingMail className="icons" />
            </a>
          </aside>
          <br />
          © 2022 Domains18 All Rights Reserved
        </div>
      </div>
    </footer>
  )
}

export default Footer