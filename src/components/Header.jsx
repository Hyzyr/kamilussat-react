import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { publicUrl } from "global";

const Header = () => {
  const [active, setActive] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    let isSticky = sticky;
    const scrollListener = () => {
      if (window.pageYOffset > 0 && !isSticky) {
        setSticky(true);
        isSticky = true;
      } else if (window.pageYOffset === 0 && isSticky) {
        setSticky(false);
        isSticky = false;
      }
    };

    window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);
  const clickListener = (e) => {
    if (active && e.target === e.currentTarget) {
      toggleActive();
    }
  };

  const toggleActive = (state) => {
    const newState = state ?? !active;
    document.body.classList.toggle("active", newState);
    setActive(newState);
  };

  const [activeSection, setActiveSection] = useState(null);
  const setActiveSec = (name) => {
    setActiveSection(name);
    toggleActive(false);
  };
  const linkClassName = (linkName) => {
    return (
      "nav__inner-link text--title " +
      (activeSection === linkName ? "active" : "")
    );
  };
  const observer = useRef(null);
  const options = {
    // root: по умолчанию window,
    // но можно задать любой элемент-контейнер
    // rootMargin: "0px 0px 0 0px",
    threshold: 0.1,
  };
  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      const visibleSection = entries.find(
        (entry) => entry.isIntersecting
      )?.target;
      if (visibleSection) {
        setActiveSection(visibleSection.id);
      }
    }, options);

    const sections = document.querySelectorAll("[data-section]");

    sections.forEach((section) => {
      observer.current.observe(section);
    });
    //Cleanup function to remove observer
    return () => {
      sections.forEach((section) => {
        observer.current.unobserve(section);
      });
    };
  }, []);

  return (
    <header
      className={`header ${sticky ? "sticky" : ""}  ${active ? "active" : ""}`}
      id="header"
    >
      <div className="autoContainer">
        <div className="header__inner">
          <a href="/" className="logo">
            <img src={publicUrl + "images/logo.png"} alt="logo" />
          </a>
          <div
            className={`nav ${active ? "active" : ""}`}
            onClick={clickListener}
          >
            <div className="nav__inner">
              <div className="nav__inner-group">
                <a
                  href="#home"
                  className={linkClassName("home")}
                  onClick={() => setActiveSec("home")}
                >
                  Home
                </a>
                <a
                  href="#services"
                  className={linkClassName("services")}
                  onClick={() => setActiveSec("services")}
                >
                  Services
                </a>
                <a
                  href="#projects"
                  className={linkClassName("projects")}
                  onClick={() => setActiveSec("projects")}
                >
                  Projects
                </a>
                {/* <a
                  href="#team"
                  className={linkClassName("team")}
                  onClick={() => {
                    setActiveSection("team");
                    setActive(false);
                  }}
                >
                  Team
                </a> */}
              </div>
              <Link
                className={`button button--primary _hideDesktop`}
                to={"/auth/signup"}
              >
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
            </div>
          </div>
          <div className="header__inner-group">
            <Link
              className={`button button--primary _hideMob`}
              to={"/auth/signup"}
            >
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
            <button
              className={`burger ${active ? "active" : ""}`}
              id="menuBtn"
              onClick={()=>toggleActive()}
            >
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
