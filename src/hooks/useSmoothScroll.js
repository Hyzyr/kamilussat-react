import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useSmoothScroll = () => {
  useEffect(() => {
    // Set up fake smooth scrolling
    const container = document.querySelector('#root');

    gsap.to(container, {
      y: () =>
        -(container.scrollHeight - document.documentElement.clientHeight),
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

    ScrollTrigger.scrollerProxy(container, {
      scrollTop(value) {
        return arguments.length
          ? (container.scrollTop = value)
          : container.scrollTop;
      },
      getBoundingClientRect() {
        return {
          left: 0,
          top: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
    });

    ScrollTrigger.addEventListener('refresh', ScrollTrigger.update);
    // ScrollTrigger.set(container, { y: 0 });

    return () => {
      ScrollTrigger.removeEventListener('refresh', ScrollTrigger.update);
    };
  }, []);
};

export default useSmoothScroll;
