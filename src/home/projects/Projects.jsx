import React from 'react';
import { publicUrl } from 'global';
import { ProjectDetails } from './contants';
import SliderNav from './SliderNav';
import { ImageSlide, InfoSlide } from './SliderSlide';

const Projects = () => {
  return (
    <section class="testimonials">
      <div class="autoContainer">
        <div class="testimonials__inner">
          <div class="testimonials__inner-box">
            <h2>Showcase of Excellence</h2>
            <p>
              Explore our diverse portfolio of successfully completed projects
              that highlight our expertise and commitment to delivering
              outstanding digital solutions. Each project reflects our
              dedication to quality and innovation.
            </p>
          </div>
          <div class="testimonials__row">
            <div class="testimonials__group">
              <div
                class="testimonials__group-slider swiper"
                data-swiper="testimonialsImages">
                <div class="swiper-wrapper">
                  {ProjectDetails.map(({ projectImage, projectTitle }) => (
                    <ImageSlide
                      projectImage={projectImage}
                      projectTitle={projectTitle}
                    />
                  ))}
                </div>
              </div>
              <BannerBg />
            </div>
            <div class="testimonials__slider" data-swiper-parent="">
              <div class="testimonials__slider-dots swiper-dots"></div>
              <div
                class="testimonials__slider-container swiper"
                data-swiper="testimonials">
                <div class="swiper-wrapper">
                  {ProjectDetails.map((data) => (
                    <InfoSlide {...data} />
                  ))}
                </div>
              </div>
              <SliderNav />
            </div>
          </div>
        </div>
      </div>
      <div class="bg">
        <div class="bg__bubble _left"></div>
        <div class="bg__bubble _right"></div>
      </div>
    </section>
  );
};
const BannerBg = () => {
  return (
    <div class="bg">
      <div class="bg__image">
        <img src={publicUrl + 'images/testimonials/circle.png'} alt="shape" />
      </div>
    </div>
  );
};

export default Projects;
