import React from 'react';

const Newsletter = () => {
  return (
    <section className="join">
      <div className="autoContainer">
        <div className="join__inner">
          <div className="join__content">
            <div className="join__content-container">
              <h3 className="text--title _sm">Stay Updated</h3>
              <p>
                Join our newsletter for the latest updates, insights, and
                exclusive content. We promise to keep our emails informative and
                spam-free
              </p>
              <div className="input">
                <input type="text" placeholder="your email" />
              </div>
              <button className="button button--secondary">
                <span className="text--title">SUBMIT</span>
              </button>
            </div>
            <button className="button button--arrow">
              <span className="ico ico--stroke">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                  <path
                    d="M2 2H24M24 2V24M24 2L2 24"
                    stroke="white"
                    stroke-width="3"
                  />
                </svg>
              </span>
              <div className="button__bg">
                <svg width="67" height="75" viewBox="0 0 67 75" fill="none">
                  <path
                    d="M6 0H67V68H61H15C10.0294 68 6 63.9706 6 59V6C6 3.65685 6 2.34315 6 0Z"
                    fill="currentCollor"
                  />
                  <path d="M6 6V0H0C3 0 6 3 6 6Z" fill="currentCollor" />
                  <path
                    d="M67 75V68H61C64 68 67 72 67 75Z"
                    fill="currentCollor"
                  />
                  <path
                    d="M67 0H6V6V59C6 63.9706 10.0294 68 15 68H61H67V0Z"
                    fill="currentCollor"
                  />
                </svg>
              </div>
            </button>
            <div className="bg">
              <div className="bg__circle">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
