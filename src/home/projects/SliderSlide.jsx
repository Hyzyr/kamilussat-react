import React from 'react';
import { publicUrl } from 'global';

const ImageSlide = ({ projectTitle, projectImage }) => {
  return (
    <div class="swiper-slide">
      <div class="testimonials__group-image">
        <div class="ratioImage">
          <img src={publicUrl + projectImage} alt={projectTitle} />
        </div>
      </div>
    </div>
  );
};
const InfoSlide = ({
  orgName,
  orgImage,
  projectTitle,
  projectDesc,
  tools = [],
}) => {
  return (
    <div class="swiper-slide">
      <div class="testimonials__item">
        <div class="testimonials__item-box">
          <div class="testimonials__item-ico">
            <img src={publicUrl + orgImage} alt={orgName} />
          </div>
          <h6 class="text--title _lg">{projectTitle}</h6>
        </div>
        <div class="testimonials__item-info">
          <p>{projectDesc}</p>
          <button class="button button--text">
            <span>- read more -</span>
          </button>
        </div>
        <div class="testimonials__item-group">
          <div class="testimonials__item-tools">
            {tools.map((tool) => (
              <ToolItem name={tool} />
            ))}
          </div>
          <button class="button button--border">
            <span class="text--title">Go to webste</span>
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
    </div>
  );
};
const ToolItem = ({ name = 'react' }) => {
  const toolImage = React.useMemo(() => {
    switch (name) {
      case 'react':
        return '/images/tools/tool-4.png';
      case 'github':
        return '/images/tools/tool-5.png';
      case 'html':
        return '/images/tools/tool-13.png';
      case 'css':
        return '/images/tools/tool-14.png';
      default:
        return '/images/tools/tool-4.png';
    }
  }, [name]);

  return (
    <div class="testimonials__item-image">
      <img src={toolImage} alt={name} />
    </div>
  );
};

export { ImageSlide, InfoSlide };
