import { publicUrl } from 'global';
import React from 'react';

const Hero = () => {
  return (
    <section class="intro">
      <div class="autoContainer">
        <div class="intro__inner">
          <div class="intro__inner-content">
            <h2>
              <span>Infinite</span>
              <br />
              <span>Innovations</span>
            </h2>
            <p>
              Infinite Innovations is dedicated to pushing the boundaries of web
              and app development. Our team of experts crafts bespoke digital
              solutions tailored to elevate your business and drive impactful
              results.
            </p>
            <button class="button button--primary">
              <span class="text--title">CONTACT uS</span>
              <span class="ico ico--stroke">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path
                    d="M2 2H20M20 2V20M20 2L2 20"
                    stroke="currentCollor"
                    stroke-width="3"
                  />
                </svg>
              </span>
            </button>
          </div>
          <div class="intro__inner-image">
            <img src={publicUrl + 'images/intro/intro.png'} alt="intro" />
          </div>
        </div>
      </div>
      <div class="bg">
        <div class="bg__circle">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="bg__bubble"></div>
      </div>
    </section>
  );
};

export default Hero;
