import React, { useEffect, useState } from 'react';
import { publicUrl } from 'global';
import { ProjectDetails } from './contants';
import SliderNav from './SliderNav';
import { ImageSlide, InfoSlide } from './SliderSlide';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { EffectFade, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
// import 'swiper/css/pagination.css'; // Pagination module

const Projects = () => {
  const [swiperInfoController, setSwiperInfoController] = useState(null);
  const [swiperImageController, setSwiperImageController] = useState(null);

  const dots = React.useRef(null);
  const onInfoSlideChange = ({ activeIndex }) => {
    if (swiperImageController) swiperImageController.slideTo(activeIndex);
  };
  const onImageSlideChange = ({ activeIndex }) => {
    if (swiperInfoController) swiperInfoController.slideTo(activeIndex);
  };

  return (
    <section className="testimonials">
      <div className="autoContainer">
        <div className="testimonials__inner">
          <div className="testimonials__inner-box">
            <h2>Showcase of Excellence</h2>
            <p>
              Explore our diverse portfolio of successfully completed projects
              that highlight our expertise and commitment to delivering
              outstanding digital solutions. Each project reflects our
              dedication to quality and innovation.
            </p>
          </div>
          <div className="testimonials__row">
            <div className="testimonials__group">
              <Swiper
                className="testimonials__group-slider"
                slidesPerView={1}
                spaceBetween={15}
                // allowTouchMove={false}
                modules={[EffectFade]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                onSlideChange={onImageSlideChange}>
                <InitController
                  init={(controller) => setSwiperImageController(controller)}
                />
                {ProjectDetails.map(({ projectImage, projectTitle }) => (
                  <SwiperSlide>
                    <ImageSlide
                      projectImage={projectImage}
                      projectTitle={projectTitle}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <BannerBg />
            </div>
            <div className="testimonials__slider" data-swiper-parent="">
              <div
                className="testimonials__slider-dots swiper-dots"
                ref={dots}></div>
              <Swiper
                className="testimonials__slider-container"
                onSlideChange={onInfoSlideChange}
                modules={[Pagination]}
                pagination={{ el: dots.current, clickable: true }}>
                <InitController
                  init={(controller) => setSwiperInfoController(controller)}
                />
                {ProjectDetails.map((data) => (
                  <SwiperSlide>
                    <InfoSlide {...data} />
                  </SwiperSlide>
                ))}
              </Swiper>
              <SliderNav swiperController={swiperInfoController} />
            </div>
          </div>
        </div>
      </div>
      <div className="bg">
        <div className="bg__bubble _left"></div>
        <div className="bg__bubble _right"></div>
      </div>
    </section>
  );
};

const InitController = ({ init }) => {
  const controller = useSwiper();
  useEffect(() => {
    if (controller) init(controller);
  }, [controller]);

  return null;
};
const BannerBg = () => {
  return (
    <div className="bg">
      <div className="bg__image">
        <img src={publicUrl + 'images/testimonials/circle.png'} alt="shape" />
      </div>
    </div>
  );
};

export default Projects;
