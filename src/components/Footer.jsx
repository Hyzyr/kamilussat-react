import { publicUrl } from 'global';
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="autoContainer">
        <div className="footer__inner">
          <div className="footer__row">
            <div className="footer__row-column _lg">
              <div className="logo">
                <img src={publicUrl + 'images/logo.png'} alt="logo" />
              </div>
              <p>
                At Kamil Ussat, we deliver innovative solutions and exceptional
                services. Our expert team is dedicated to achieving outstanding
                results. Connect with us to elevate your business.
              </p>
              <div className="footer__row-group">
                <div className="footer__row-button">
                  <span className="ico">
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
                      <path
                        d="M22.0935 0H2.90653C2.13567 0 1.39638 0.306222 0.851304 0.851301C0.306226 1.39638 0 2.13566 0 2.90652V22.0935C0 22.8643 0.306226 23.6036 0.851304 24.1487C1.39638 24.6938 2.13567 25 2.90653 25H22.0935C22.8643 25 23.6036 24.6938 24.1487 24.1487C24.6938 23.6036 25 22.8643 25 22.0935V2.90835C25.0002 2.52651 24.9252 2.14836 24.7793 1.79551C24.6333 1.44266 24.4193 1.12204 24.1493 0.851949C23.8794 0.581859 23.5589 0.367603 23.2062 0.221423C22.8534 0.0752417 22.4753 -7.56467e-08 22.0935 0ZM23.837 22.0935C23.8367 22.5559 23.6529 22.9992 23.326 23.3262C22.9991 23.6532 22.5559 23.8372 22.0935 23.8376H2.90653C2.44409 23.8372 2.00074 23.6532 1.67375 23.3263C1.34677 22.9993 1.16285 22.5559 1.16237 22.0935V2.90835C1.16285 2.44592 1.34677 2.00257 1.67375 1.67558C2.00074 1.34859 2.44409 1.16468 2.90653 1.1642H22.0935C22.5559 1.16468 22.9991 1.34861 23.326 1.67562C23.6529 2.00263 23.8367 2.44598 23.837 2.90835V22.0935Z"
                        fill="currentCollor"
                      />
                      <path
                        d="M12.5 18.1818C12.5 18.1818 17.0455 13.8742 17.0455 10.6061C17.0455 9.40053 16.5666 8.24438 15.7141 7.39194C14.8617 6.5395 13.7055 6.06061 12.5 6.06061C11.2945 6.06061 10.1383 6.5395 9.28588 7.39194C8.43344 8.24438 7.95455 9.40053 7.95455 10.6061C7.95455 13.8742 12.5 18.1818 12.5 18.1818ZM12.5 12.8788C11.8972 12.8788 11.3192 12.6393 10.8929 12.2131C10.4667 11.7869 10.2273 11.2088 10.2273 10.6061C10.2273 10.0033 10.4667 9.42522 10.8929 8.999C11.3192 8.57278 11.8972 8.33333 12.5 8.33333C13.1028 8.33333 13.6808 8.57278 14.1071 8.999C14.5333 9.42522 14.7727 10.0033 14.7727 10.6061C14.7727 11.2088 14.5333 11.7869 14.1071 12.2131C13.6808 12.6393 13.1028 12.8788 12.5 12.8788Z"
                        fill="currentCollor"
                      />
                    </svg>
                  </span>
                  <span className="text">Ashgabat, Turkmenistan</span>
                </div>
                <div className="footer__row-button">
                  <span className="ico">
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
                      <path
                        d="M22.0935 0H2.90653C2.13567 0 1.39638 0.306222 0.851304 0.851301C0.306226 1.39638 0 2.13566 0 2.90652V22.0935C0 22.8643 0.306226 23.6036 0.851304 24.1487C1.39638 24.6938 2.13567 25 2.90653 25H22.0935C22.8643 25 23.6036 24.6938 24.1487 24.1487C24.6938 23.6036 25 22.8643 25 22.0935V2.90835C25.0002 2.52651 24.9252 2.14836 24.7793 1.79551C24.6333 1.44266 24.4193 1.12204 24.1493 0.851949C23.8794 0.581859 23.5589 0.367603 23.2062 0.221423C22.8534 0.0752417 22.4753 -7.56467e-08 22.0935 0ZM23.837 22.0935C23.8367 22.5559 23.6529 22.9992 23.326 23.3262C22.9991 23.6532 22.5559 23.8372 22.0935 23.8376H2.90653C2.44409 23.8372 2.00074 23.6532 1.67375 23.3263C1.34677 22.9993 1.16285 22.5559 1.16237 22.0935V2.90835C1.16285 2.44592 1.34677 2.00257 1.67375 1.67558C2.00074 1.34859 2.44409 1.16468 2.90653 1.1642H22.0935C22.5559 1.16468 22.9991 1.34861 23.326 1.67562C23.6529 2.00263 23.8367 2.44598 23.837 2.90835V22.0935Z"
                        fill="currentCollor"
                      />
                      <path
                        d="M6.04375 8.36063C6.13197 7.97409 6.34882 7.62896 6.65881 7.38177C6.96879 7.13458 7.35352 6.99997 7.75 7H18.25C18.6465 6.99997 19.0312 7.13458 19.3412 7.38177C19.6512 7.62896 19.868 7.97409 19.9563 8.36063L13 12.6122L6.04375 8.36063ZM6 9.35987V15.5759L11.0776 12.4626L6 9.35987ZM11.9159 12.9762L6.16713 16.4999C6.30916 16.7994 6.53334 17.0524 6.81356 17.2294C7.09378 17.4065 7.41853 17.5003 7.75 17.5H18.25C18.5814 17.5001 18.906 17.406 19.1861 17.2288C19.4662 17.0516 19.6902 16.7985 19.832 16.499L14.0833 12.9754L13 13.6378L11.9159 12.9762ZM14.9224 12.4635L20 15.5759V9.35987L14.9224 12.4626V12.4635Z"
                        fill="currentCollor"
                      />
                    </svg>
                  </span>
                  <span className="text">+99371000001</span>
                </div>
                <div className="footer__row-button">
                  <span className="ico">
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
                      <path
                        d="M22.0935 0H2.90653C2.13567 0 1.39638 0.306222 0.851304 0.851301C0.306226 1.39638 0 2.13566 0 2.90652V22.0935C0 22.8643 0.306226 23.6036 0.851304 24.1487C1.39638 24.6938 2.13567 25 2.90653 25H22.0935C22.8643 25 23.6036 24.6938 24.1487 24.1487C24.6938 23.6036 25 22.8643 25 22.0935V2.90835C25.0002 2.52651 24.9252 2.14836 24.7793 1.79551C24.6333 1.44266 24.4193 1.12204 24.1493 0.851949C23.8794 0.581859 23.5589 0.367603 23.2062 0.221423C22.8534 0.0752417 22.4753 -7.56467e-08 22.0935 0ZM23.837 22.0935C23.8367 22.5559 23.6529 22.9992 23.326 23.3262C22.9991 23.6532 22.5559 23.8372 22.0935 23.8376H2.90653C2.44409 23.8372 2.00074 23.6532 1.67375 23.3263C1.34677 22.9993 1.16285 22.5559 1.16237 22.0935V2.90835C1.16285 2.44592 1.34677 2.00257 1.67375 1.67558C2.00074 1.34859 2.44409 1.16468 2.90653 1.1642H22.0935C22.5559 1.16468 22.9991 1.34861 23.326 1.67562C23.6529 2.00263 23.8367 2.44598 23.837 2.90835V22.0935Z"
                        fill="currentCollor"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.64979 6.4464C6.80289 6.29353 6.98673 6.17494 7.18913 6.09849C7.39154 6.02204 7.60787 5.98948 7.82381 6.00297C8.03975 6.01645 8.25035 6.07568 8.44167 6.17671C8.63298 6.27775 8.80064 6.41829 8.93354 6.58902L10.5042 8.60677C10.792 8.9769 10.8935 9.45902 10.7798 9.91402L10.3012 11.8303C10.2764 11.9295 10.2778 12.0335 10.305 12.1321C10.3323 12.2307 10.3846 12.3205 10.4569 12.3929L12.6068 14.5428C12.6793 14.6152 12.7693 14.6676 12.868 14.6949C12.9668 14.7222 13.0709 14.7234 13.1703 14.6985L15.0857 14.2199C15.3102 14.1638 15.5446 14.1594 15.771 14.2071C15.9975 14.2549 16.2102 14.3535 16.3929 14.4955L18.4107 16.0653C19.136 16.6296 19.2025 17.7015 18.5533 18.3499L17.6485 19.2546C17.001 19.9021 16.0333 20.1865 15.1312 19.8689C12.8222 19.0565 10.7258 17.7346 8.99741 16.0014C7.26429 14.2733 5.94244 12.1772 5.12991 9.86852C4.81316 8.96727 5.09754 7.99865 5.74504 7.35115L6.64979 6.4464Z"
                        fill="currentCollor"
                      />
                    </svg>
                  </span>
                  <span className="text">+99371000001</span>
                </div>
              </div>
            </div>
            <div className="footer__row-column _links">
              <h6 className="text--title _lg">Quick links</h6>
              <div className="footer__row-box">
                <a href="#" className="footer__row-link">
                  Services
                </a>
                <a href="#" className="footer__row-link">
                  Testimonials
                </a>
                <a href="#" className="footer__row-link">
                  Projects
                </a>
                <a href="#" className="footer__row-link">
                  Team
                </a>
                <a href="#" className="footer__row-link">
                  Home
                </a>
              </div>
            </div>
            <div className="footer__row-column">
              <h6 className="text--title _lg">Contact Us</h6>
              <div className="footer__row-contact">
                <div className="input input--secondary">
                  <input type="text" placeholder="your email" />
                </div>
                <div className="input input--secondary">
                  <textarea placeholder="type here..."></textarea>
                </div>
                <button className="button button--primary">
                  <span className="text--title">Send</span>
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
          </div>
          <p className="footer__copy">© 2023 Kamil Ussat. All rights reserved</p>
        </div>
      </div>
      <div className="bg">
        <div className="bg__circle ">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
