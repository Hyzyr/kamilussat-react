import React, { Suspense, useRef } from 'react';
import Diamond from 'App3d';
import DiamondHd from 'App3dHd';
import useVisibleCheck from 'hooks/useVisibleCheck';
import useAndroidCheck from 'hooks/useAndroidCheck';
import NebulaComponent from 'AppParticlesWithLineAndMoving';
import { Link } from 'react-router-dom';

const Hero = () => {
  const imgRef = useRef();
  const isVisible = true;
  // const isAndroid = useAndroidCheck();
  // const isVisible = useVisibleCheck({ ref: imgRef });

  return (
    <section className="intro" data-section id="home">
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
            <div className="intro__inner-box">
              <Link
                className={`button button--primary _hideDesktop`}
                to={'/auth/signup'}>
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
              </Link>
              <div className="dflex">
                <a href="#contact" className="button button--primary">
                  <span className="text--title">CONTACT US</span>
                  <span className="ico ico--stroke">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <path
                        d="M2 2H20M20 2V20M20 2L2 20"
                        stroke="currentCollor"
                        strokeWidth="3"
                      />
                    </svg>
                  </span>
                </a>
                &nbsp;
                <div className="dflex">
                  <a className="icolink" href="https://wa.me/+99364132986">
                    <WhatsappSVG />
                  </a>
                  <a className="icolink" href="https://t.me/+99364132986">
                    <TelegramSVG />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="intro__inner-image" ref={imgRef}>
            <div className="ratioImage">
              <NebulaComponent />
              {isVisible && (
                <> </>
                // <Suspense fallback="loading">
                //   <Diamond isObserved={isVisible} />
                //   {/* {isAndroid && <Diamond isObserved={isVisible} />} */}
                //   {/* {!isAndroid && <DiamondHd isObserved={isVisible} />} */}
                // </Suspense>
              )}
            </div>
          </div>
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
        <div className="bg__bubble"></div>
      </div>
    </section>
  );
};

const TelegramSVG = () => (
  <svg
    width="35"
    height="30"
    viewBox="0 0 35 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M33.1835 0.0641075L0.599113 12.6344C-0.205308 12.9454 -0.198471 14.0827 0.608439 14.385L8.54751 17.3483L11.6209 27.2315C11.6658 27.3784 11.7463 27.512 11.8552 27.6204C11.9641 27.7287 12.0981 27.8085 12.2453 27.8526C12.3924 27.8968 12.5482 27.9039 12.6988 27.8733C12.8493 27.8428 12.99 27.7756 13.1084 27.6776L17.5343 24.0692C17.7599 23.8852 18.04 23.781 18.331 23.7728C18.6219 23.7646 18.9075 23.8528 19.1431 24.0238L27.1257 29.8196C27.252 29.9121 27.3994 29.9713 27.5545 29.9919C27.7096 30.0124 27.8674 29.9936 28.0134 29.9373C28.1593 29.8809 28.2888 29.7887 28.3898 29.6692C28.4908 29.5497 28.5602 29.4068 28.5915 29.2535L34.4396 1.12609C34.4747 0.961006 34.4644 0.789481 34.4097 0.629784C34.3551 0.470088 34.2582 0.328199 34.1293 0.219226C34.0004 0.110252 33.8444 0.0382756 33.6778 0.0109598C33.5113 -0.016356 33.3404 0.00201192 33.1835 0.0641075ZM26.969 6.64195L14.166 18.5453C13.7162 18.9638 13.4253 19.5253 13.3429 20.1342L12.9074 23.3693C12.849 23.8011 12.243 23.8434 12.1236 23.4259L10.4438 17.5306C10.3508 17.2031 10.3673 16.8541 10.4908 16.5369C10.6143 16.2196 10.8381 15.9514 11.1281 15.773L26.6454 6.21641C26.9198 6.04283 27.2085 6.41984 26.969 6.64195Z"
      fill="#47B3E4"
    />
  </svg>
);
const WhatsappSVG = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M22.1985 17.2384C22.14 17.2104 19.9529 16.1334 19.5643 15.9935C19.4056 15.9365 19.2357 15.8809 19.0549 15.8809C18.7596 15.8809 18.5115 16.0281 18.3182 16.3172C18.0998 16.6419 17.4384 17.415 17.234 17.646C17.2073 17.6764 17.1709 17.7129 17.1491 17.7129C17.1295 17.7129 16.791 17.5735 16.6886 17.529C14.3424 16.5099 12.5616 14.0591 12.3174 13.6458C12.2826 13.5864 12.2811 13.5594 12.2808 13.5594C12.2894 13.528 12.3683 13.4489 12.409 13.4081C12.5281 13.2902 12.6572 13.1348 12.7821 12.9846C12.8412 12.9134 12.9004 12.8421 12.9585 12.7748C13.1397 12.5641 13.2204 12.4004 13.3139 12.2109L13.3629 12.1124C13.5912 11.6588 13.3962 11.276 13.3332 11.1524C13.2814 11.049 12.358 8.82021 12.2598 8.58605C12.0237 8.02102 11.7117 7.75793 11.2782 7.75793C11.2379 7.75793 11.2782 7.75793 11.1095 7.76504C10.904 7.77371 9.78537 7.92099 9.29076 8.23277C8.76624 8.56345 7.87891 9.61755 7.87891 11.4713C7.87891 13.1397 8.93767 14.715 9.39225 15.3141C9.40355 15.3292 9.4243 15.3599 9.45439 15.4039C11.1953 17.9463 13.3655 19.8305 15.5655 20.7094C17.6835 21.5554 18.6865 21.6532 19.2567 21.6532H19.2568C19.4964 21.6532 19.6882 21.6344 19.8574 21.6177L19.9647 21.6075C20.6964 21.5426 22.3043 20.7095 22.6701 19.6931C22.9582 18.8925 23.0342 18.0178 22.8425 17.7004C22.7112 17.4846 22.4849 17.376 22.1985 17.2384Z"
      fill="#39C6B1"
    />
    <path
      d="M15.2663 0C7.14134 0 0.531211 6.56045 0.531211 14.6243C0.531211 17.2325 1.2292 19.7855 2.55144 22.0199L0.0206267 29.4853C-0.0265161 29.6245 0.0085488 29.7784 0.111503 29.8832C0.185822 29.9591 0.286633 30 0.389588 30C0.429036 30 0.468776 29.9941 0.507542 29.9817L8.29196 27.508C10.4222 28.6462 12.8298 29.247 15.2664 29.247C23.3905 29.2471 30 22.6873 30 14.6243C30 6.56045 23.3905 0 15.2663 0ZM15.2663 26.2007C12.9735 26.2007 10.7528 25.5387 8.84394 24.2861C8.77975 24.2439 8.70524 24.2223 8.63024 24.2223C8.59059 24.2223 8.55085 24.2283 8.51219 24.2406L4.61267 25.4801L5.8715 21.7663C5.91222 21.6461 5.89186 21.5135 5.81686 21.411C4.36322 19.4248 3.59482 17.0781 3.59482 14.6243C3.59482 8.24026 8.83059 3.04636 15.2662 3.04636C21.701 3.04636 26.9362 8.24026 26.9362 14.6243C26.9363 21.0076 21.7012 26.2007 15.2663 26.2007Z"
      fill="#39C6B1"
    />
  </svg>
);
export default Hero;
