import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { publicUrl } from "global";
import React, { Children, useRef } from "react";
import gsap from "gsap";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const ToolsRow = ({ children, direction = 1 }) => {
  const ref = useRef();
  useGSAP(() => {
    const d = direction;
    const rowsContainer = ref.current.querySelectorAll(".tools__row-container");
    const timeline = gsap.timeline({
      repeat: -1,
      onComplete: () => console.log("1"),
    });
    timeline
      .fromTo(
        rowsContainer[0],
        { xPercent: d * 0 },
        { xPercent: d * -100, ease: "none", duration: 10 }
      )
      .fromTo(
        rowsContainer[1],
        { xPercent: d * 100 },
        { xPercent: d * 0, ease: "none", duration: 10, delay: 0.2 },
        "<"
      );
  });
  return (
    <div className="tools__row" ref={ref}>
     {children}
     {children}
    </div>
  );
};
export const RowTop = () => {
  return (
    <div className="tools__row-container _left">
      <ToolItem src="images/tools/tool-1.png" alt="jet brains" />
      <ToolItem src="images/tools/tool-2.png" alt="angular" />
      <ToolItem src="images/tools/tool-3.png" alt="dj" />
      <ToolItem src="images/tools/tool-4.png" alt="react" />
      <ToolItem src="images/tools/tool-5.png" alt="github" />
      <ToolItem src="images/tools/tool-18.png" alt="brakets" />
      <ToolItem src="images/tools/tool-6.png" alt="wolf" />
      <ToolItem src="images/tools/tool-7.png" alt="docker" />
      <ToolItem src="images/tools/tool-8.png" alt="rest" />
    </div>
  );
};
export const RowBot = () => {
  return (
    <div className="tools__row-container _left">
      <ToolItem src="images/tools/tool-9.png" alt="tool-9" />
      <ToolItem src="images/tools/tool-10.png" alt="swift" />
      <ToolItem src="images/tools/tool-11.png" alt="nginx" />
      <ToolItem src="images/tools/tool-12.png" alt="dolphin" />
      <ToolItem src="images/tools/tool-13.png" alt="html" />
      <ToolItem src="images/tools/tool-14.png" alt="css" />
      <ToolItem src="images/tools/tool-15.png" alt="pen" />
      <ToolItem src="images/tools/tool-16.png" alt="circle" />
      <ToolItem src="images/tools/tool-17.png" alt="android" />
    </div>
  );
};
const ToolItem = ({ src, alt, addClass = "" }) => {
  return (
    <div className={`tools__row-item ${addClass}`}>
      <img src={publicUrl + src} alt={alt} />
    </div>
  );
};

export default ToolsRow;
