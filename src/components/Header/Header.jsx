import React from 'react';
import './Header.css';
import Animation, { AnimationItem } from '../Animation/Animation'
const Header = () => {
  return (
    <div className='head'>
      <div className="text">
        <div className="div">
          <p>Hello, </p>
        </div>
        <Animation>
          <AnimationItem>
            <p>Collaborate</p>
          </AnimationItem>
          <AnimationItem>
            <p>Open-Source</p>
          </AnimationItem>
          <AnimationItem>
            <p>Building In Public</p>
          </AnimationItem>
          <AnimationItem>
            <p>Mentorship</p>
          </AnimationItem>
        </Animation>
      </div>
    </div>
  )
}

export default Header