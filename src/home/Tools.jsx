import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { publicUrl } from 'global';
import React, { useRef } from 'react';
import gsap from 'gsap';
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Tools = () => {
  const container = useRef();

  useGSAP(
    () => {
      const clientHeight = window.innerHeight;
      const clientWidth = window.innerWidth;

      const toolsWidth = container.current.querySelector(
        '.tools__row-container'
      ).clientWidth;
      const extraScroll =
        toolsWidth - clientWidth > 0 ? toolsWidth - clientWidth : 0;

      const xMin = clientWidth * 0.08;
      const xMax = clientWidth * 0.24;
      const extraRight =
        extraScroll !== 0 ? extraScroll + extraScroll * 0.2 : 0;

      console.log({
        clientHeight,
        clientWidth,
        xMin,
        xMax,
        start: `-=${clientHeight} top`,
        end: 'bottom 20%',
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: container.current,
            pin: false,
            pinSpacing: false,
            start: `-=${clientHeight} top`,
            end: 'bottom 10%',
            scrub: true,
            // markers: true,
          },
        })
        .fromTo(
          '.tools__row-container._left',
          { x: -(xMax + extraScroll) },
          { x: xMin },
          '0'
        )
        .fromTo(
          '.tools__row-container._right',
          { x: xMax },
          { x: -(xMin + extraRight) },
          '0'
        );
    },
    { scope: container }
  );

  return (
    <section className="tools" ref={container}>
      <div className="autoContainer">
        <div className="tools__inner">
          <div className="tools__row">
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
            <div className="tools__row-container _right">
              <ToolItem
                addclassName="_left"
                src="images/tools/tool-9.png"
                alt="tool-9"
              />
              <ToolItem src="images/tools/tool-10.png" alt="swift" />
              <ToolItem src="images/tools/tool-11.png" alt="nginx" />
              <ToolItem src="images/tools/tool-12.png" alt="dolphin" />
              <ToolItem src="images/tools/tool-13.png" alt="html" />
              <ToolItem src="images/tools/tool-14.png" alt="css" />
              <ToolItem src="images/tools/tool-15.png" alt="pen" />
              <ToolItem src="images/tools/tool-16.png" alt="circle" />
              <ToolItem src="images/tools/tool-17.png" alt="android" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg">
        <div className="bg__bubble"></div>
      </div>
    </section>
  );
};

const ToolItem = ({ src, alt, addClass = '' }) => {
  return (
    <div className={`tools__row-item ${addClass}`}>
      <img src={publicUrl + src} alt={alt} />
    </div>
  );
};
export default Tools;
