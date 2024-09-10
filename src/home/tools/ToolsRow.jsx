import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { publicUrl } from "global";
import React, { useRef } from "react";
import gsap from "gsap";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const ToolsRow = ({ direction = 1 }) => {
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
      <RowTop />
      <RowTop />
    </div>
  );
};
const RowTop = () => {
  return (
    <div className="tools__row-container">
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
const ToolItem = ({ src, alt, addClass = "" }) => {
  return (
    <div className={`tools__row-item ${addClass}`}>
      <img src={publicUrl + src} alt={alt} />
    </div>
  );
};

export default ToolsRow;
