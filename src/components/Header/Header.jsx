import React from 'react';
import './Header.css';
import Animation, { AnimationItem } from '../Animation/Animation'
import { BsArrowDownShort } from "react-icons/bs";

const Header = () => {
  return (
    <div className="head" id='home'>
      <div className="text">
        <div className="div">
          <p>Hello, We </p>
        </div>
        <Animation>
          <AnimationItem>
            <p>Collaborate</p>
          </AnimationItem>
          <AnimationItem>
            <p>Do Open-Source</p>
          </AnimationItem>
          <AnimationItem>
            <p>Build In Public</p>
          </AnimationItem>
          <AnimationItem>
            <p>Do Mentorship</p>
          </AnimationItem>
        </Animation>
      </div>
      <div className="cta">
        <a className="btn" href="#Popular" type="button">
          {" "}
          Explore <BsArrowDownShort />{" "}
        </a>
      </div>
    </div>
  );
}

export default Header