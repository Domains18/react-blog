import React from 'react';
import './About.css';
import { CgWebsite } from 'react-icons/cg';
import { AiFillInstagram } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
const About = () => {
  return (
    <div id='about'>
      <div className="about container">
        <div className="title">
          <h1>About us</h1>
        </div>
        <section className='about-content'>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero animi quisquam velit deserunt blanditiis. Illo eius ad, minus amet ipsum, veritatis accusantium quas earum facilis error sint sunt ducimus asperiores quibusdam molestias optio aliquid eaque repellendus ex non facere, at nemo quo possimus. Laborum, autem nulla beatae mollitia sequi aliquid.
          </p>
        </section>
        <div className="socials">
          <aside>
            <p>Learn More About Us</p>
            <a href="https://domains18/github.io/My-web/" target="_blank" rel="noreferrer" ><CgWebsite /></a>
            <a href="https://instagram.com/tweetofsins" rel='noreferrer' target="_blank"><AiFillInstagram/></a>
            <a href="https://twitter.com/eightsville" target="_blank" rel="noreferrer"><AiOutlineTwitter/></a>
            <a href="https://github.com/domains18" rel='noreferrer' target="_blank"><BsGithub/></a>
            <div className="cta subscribe">
              <p>Subscribe to Our Monthly Newsletter</p>
              <br />
              <a type="button" href="#contact"> Subscribe </a>
            </div>
          </aside>
        </div>
      </div>
      <div class="line-1"></div>
    </div>
  )
}

export default About