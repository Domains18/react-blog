import React from 'react';
import './Contacts.css';
import { RiMessengerLine } from 'react-icons/ri';
import { IoLogoWhatsapp } from 'react-icons/io';
import { CiTwitter } from 'react-icons/ci';
import { MdOutgoingMail } from 'react-icons/md';
const Contacts = () => {
  return (
    <div className='contact-section'>
    <section className='about-content contact'>
      <h1>Contact Us</h1>
      <div className="intro">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, culpa repellat vel ea vitae totam neque non magnam ullam a.</p>
      </div>
      <br />
      <div className="New-socials">
        <aside>
          <p>Send Us A Message</p>
            <a href="https://facebook.com"><RiMessengerLine className='icons'/></a>
            <a href="https://com.whatsApp">
              <IoLogoWhatsapp className='icons'/>
            </a>
            <a href="https://twitter.com">
              <CiTwitter className='icons'/>
            </a>
            <a href="https://google.com">
              <MdOutgoingMail className="icons"/>
            </a>
        </aside>
        <aside className='hero'>
          <p>We will get back to you</p>
          <input type="text" placeholder='Name' />
          <input type="text" placeholder='Your 
          Email' />
          <input type="text" placeholder='SUBJECT' />
          <button type="submit" className='subscribe'>Submit</button>
        </aside>
      </div>
    </section>
    </div>
  )
}

export default Contacts