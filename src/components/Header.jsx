import React from 'react';
import { publicUrl } from 'global';

const Header = () => {
  return (
    <header class="header" id="header">
      <div class="autoContainer">
        <div class="header__inner">
          <a href="/" class="logo">
            <img src={publicUrl + 'images/logo.png'} alt="logo" />
          </a>
          <div class="nav" id="menu">
            <div class="nav__inner">
              <div class="nav__inner-group">
                <a href="" class="nav__inner-link text--title active">
                  Home
                </a>
                <a href="" class="nav__inner-link text--title">
                  Services
                </a>
                <a href="" class="nav__inner-link text--title">
                  Testimonials
                </a>
                <a href="" class="nav__inner-link text--title">
                  Projects
                </a>
                <a href="" class="nav__inner-link text--title">
                  Team
                </a>
              </div>
              <button class="button button--primary _hideDesktop">
                <span class="text--title">Sign Up</span>
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
          </div>
          <div class="header__inner-group">
            <button class="button button--primary _hideMob">
              <span class="text--title">Sign Up</span>
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
            <button class="burger" id="menuBtn">
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
