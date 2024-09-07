import React, { Suspense, useRef } from 'react';
import Diamond from 'App3d';
import useVisibleCheck from 'hooks/useVisibleCheck';

const Hero = () => {
  const imgRef = useRef();
  const isVisible = true;
  // const isVisible = useVisibleCheck({ ref: imgRef });

  return (
    <section className="intro">
      <div className="autoContainer">
        <div className="intro__inner">
          <div className="intro__inner-content">
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
            <button className="button button--primary">
              <span className="text--title">CONTACT uS</span>
              <span className="ico ico--stroke">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path
                    d="M2 2H20M20 2V20M20 2L2 20"
                    stroke="currentCollor"
                    strokeWidth="3"
                  />
                </svg>
              </span>
            </button>
          </div>
          <div className="intro__inner-image" ref={imgRef}>
            <div className="ratioImage">
              <Suspense fallback="loading">
                <Diamond isObserved={isVisible} />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
      <div className="bg">
        <div className="bg__circle noanimation">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="bg__bubble"></div>
      </div>
    </section>
  );
};

export default Hero;
