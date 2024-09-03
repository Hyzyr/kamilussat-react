import React, { useEffect, useState } from 'react';
import { publicUrl } from 'global';

const Header = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    let isSticky = sticky;
    const scrollListener = () => {
      if (window.pageYOffset > 0 && !isSticky) {
        setSticky(true);
        isSticky = true;
      } else if (window.pageYOffset === 0 && isSticky) {
        setSticky(false);
        isSticky = false;
      }
    };

    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);
  useEffect(() => {
    console.log({ sticky });
  }, [sticky]);

  return (
    <header className={`header ${sticky ? 'sticky' : ''}`} id="header">
      <div className="autoContainer">
        <div className="header__inner">
          <a href="/" className="logo">
            <img src={publicUrl + 'images/logo.png'} alt="logo" />
          </a>
          <div className="nav" id="menu">
            <div className="nav__inner">
              <div className="nav__inner-group">
                <a href="" className="nav__inner-link text--title active">
                  Home
                </a>
                <a href="" className="nav__inner-link text--title">
                  Services
                </a>
                <a href="" className="nav__inner-link text--title">
                  Testimonials
                </a>
                <a href="" className="nav__inner-link text--title">
                  Projects
                </a>
                <a href="" className="nav__inner-link text--title">
                  Team
                </a>
              </div>
              <button className="button button--primary _hideDesktop">
                <span className="text--title">Sign Up</span>
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
          </div>
          <div className="header__inner-group">
            <button className="button button--primary _hideMob">
              <span className="text--title">Sign Up</span>
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
            <button className="burger" id="menuBtn">
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
