import React from "react";
import { publicUrl } from "global";

const ImageSlide = ({ projectTitle, projectImage }) => {
  return (
    <div className="testimonials__group-image">
      <div className="ratioImage">
        <img src={publicUrl + projectImage} alt={projectTitle} />
      </div>
    </div>
  );
};
const InfoSlide = ({
  orgName,
  orgImage,
  projectTitle,
  projectDesc,
  link,
  tools = [],
}) => {
  return (
    <div className="testimonials__item">
      <div className="testimonials__item-box">
        <div className="testimonials__item-ico">
          <img src={publicUrl + orgImage} alt={orgName} />
        </div>
        <h6 className="text--title _lg">{projectTitle}</h6>
      </div>
      <div className="testimonials__item-info">
        <p>{projectDesc}</p>
        <button className="button button--text">
          <span>- read more -</span>
        </button>
      </div>
      <div className="testimonials__item-group">
        <div className="testimonials__item-tools">
          {tools.map((tool, index) => (
            <ToolItem name={tool} key={index} />
          ))}
        </div>
        <a href={link} target="_blank" className="button button--border">
          <span className="text--title">Go to webste</span>
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
      </div>
    </div>
  );
};
const ToolItem = ({ name = "react" }) => {
  const toolImage = React.useMemo(() => {
    switch (name) {
      case "react":
        return "/images/tools/tool-4.png";
      case "github":
        return "/images/tools/tool-5.png";
      case "html":
        return "/images/tools/tool-13.png";
      case "css":
        return "/images/tools/tool-14.png";
      default:
        return "/images/tools/tool-4.png";
    }
  }, [name]);

  return (
    <div className="testimonials__item-image">
      <img src={toolImage} alt={name} />
    </div>
  );
};

export { ImageSlide, InfoSlide };
