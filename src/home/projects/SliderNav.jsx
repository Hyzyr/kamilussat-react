import React from 'react';

const SliderNav = () => {
  return (
    <div class="testimonials__slider-nav">
      <div class="testimonials__slider-arrow swiper-arrow-prev">
        <span class="ico ico--stroke">
          <svg width="30" height="12" viewBox="0 0 30 12" fill="none">
            <path
              d="M12.4439 10.6718L4.00007 2.22796L21.0121 2.22792L29.4559 2.22792M20.8878 2.22796L12.4439 2.22796"
              stroke="currentCollor"
              stroke-width="3"
            />
          </svg>
        </span>
      </div>
      <div class="testimonials__slider-arrow swiper-arrow-next">
        <span class="ico ico--stroke">
          <svg width="30" height="12" viewBox="0 0 30 12" fill="none">
            <path
              d="M17.468 10.6718L25.9118 2.22796L8.89975 2.22792H0.455916M9.02409 2.22796L17.4679 2.22796"
              stroke="currentCollor"
              stroke-width="3"
            />
          </svg>
        </span>
      </div>
      <NavBg />
    </div>
  );
};
const NavBg = () => {
  return (
    <div class="bg">
      <div class="bg__button">
        <span class="ico">
          <svg width="155" height="64" viewBox="0 0 155 64" fill="none">
            <path
              d="M155 5.73134L155 64L15.5109 64L15.5109 58.2687L15.5109 14.7313C15.5109 9.76077 19.5403 5.73134 24.5109 5.73134L142.692 5.73134C147.499 5.73134 150.193 5.73134 155 5.73134Z"
              fill="currentCollor"
            />
            <path
              d="M142.692 5.73134L155 5.73134L155 0C155 2.86567 148.846 5.73134 142.692 5.73134Z"
              fill="currentCollor"
            />
            <path
              d="M1.15169 64L15.5109 64L15.5109 58.2687C15.5109 61.1343 7.30562 64 1.15169 64Z"
              fill="currentCollor"
            />
            <path
              d="M155 64L155 5.73134L142.692 5.73134L24.5109 5.73134C19.5403 5.73134 15.5109 9.76077 15.5109 14.7313L15.5109 58.2687L15.5109 64L155 64Z"
              fill="currentCollor"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default SliderNav;
