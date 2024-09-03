import React from 'react';

const Services = () => {
  return (
    <section className="services">
      <div className="autoContainer">
        <div className="services__inner">
          <p className="services__inner-text">
            Explore our comprehensive range of services designed to transform
            your digital presence. From cutting-edge web development to
            innovative app creation.
          </p>
          <div className="services__container">
            <div className="services__container-row">
              <div className="services__item _lg">
                <h3 className="text--title">
                  Our <br />
                  Digital <br />
                  Solutions
                </h3>
                <p>
                  our team ensures top-notch quality and seamless functionality
                  tailored to your unique needs.
                </p>
                <ServiceButton />
              </div>
              <div className="services__container-content">
                <div className="services__item">
                  <h5 className="text--title _sm">
                    <span>Front-End</span>
                    <br />
                    <span>Development</span>
                  </h5>
                  <p>
                    <span>React, Angular</span>
                    <br />
                    <span>JavaScript Frameworks</span>
                  </p>
                  <ServiceButton />
                </div>
                <div className="services__item">
                  <h5 className="text--title _sm">
                    <span>Back-End</span>
                    <br />
                    <span>Development</span>
                  </h5>
                  <p>
                    <span>Django, FastAPI / Nest.JS, Node.JS</span>
                    <br />
                    <span>Python & JavaScript Frameworks</span>
                  </p>
                  <ServiceButton />
                </div>
                <div className="services__item">
                  <h5 className="text--title _sm">
                    <span>Configuration</span>
                    <br />
                    <span>management</span>
                  </h5>
                  <p>
                    <span>Docker, 8s, wpar,</span>
                    <br />
                    <span>zone and other</span>
                  </p>
                  <ServiceButton />
                </div>
                <div className="services__item">
                  <h5 className="text--title _sm">
                    <span>Database</span>
                  </h5>
                  <p>
                    <span>Oracle, MySQL, Mango DB,</span>
                    <br />
                    <span>PostgresSQl, MS, SQL and other</span>
                  </p>
                  <ServiceButton />
                </div>
              </div>
            </div>
            <div className="services__container-row _sm">
              <div className="services__item">
                <h5 className="text--title _sm">
                  <span>Containers &</span>
                  <br />
                  <span>Orchestration</span>
                </h5>
                <p>
                  <span>Docker, 8s, wpar,</span>
                  <br />
                  <span>zone and other</span>
                </p>
                <ServiceButton />
              </div>
              <div className="services__item">
                <h5 className="text--title _sm">
                  <span>CI/CD</span>
                </h5>
                <p>
                  <span>Jenkins, GitLab,</span>
                  <br />
                  <span>GitHub, Git</span>
                </p>
                <ServiceButton />
              </div>
              <div className="services__item">
                <h5 className="text--title _sm">
                  <span>Services</span>
                </h5>
                <p>
                  <span>RabbitMQ, Apache, Kafka,</span>
                  <br />
                  <span>Redis, stack, e.t.c</span>
                </p>
                <ServiceButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceButton = () => {
  return (
    <button className="button button--arrow">
      <span className="ico ico--stroke">
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
          <path d="M2 2H24M24 2V24M24 2L2 24" stroke="white" stroke-width="3" />
        </svg>
      </span>
      <span className="button__bg">
        <svg width="67" height="75" viewBox="0 0 67 75" fill="none">
          <path
            d="M6 0H67V68H61H15C10.0294 68 6 63.9706 6 59V6C6 3.65685 6 2.34315 6 0Z"
            fill="currentCollor"
          />
          <path d="M6 6V0H0C3 0 6 3 6 6Z" fill="currentCollor" />
          <path d="M67 75V68H61C64 68 67 72 67 75Z" fill="currentCollor" />
          <path
            d="M67 0H6V6V59C6 63.9706 10.0294 68 15 68H61H67V0Z"
            fill="currentCollor"
          />
        </svg>
      </span>
    </button>
  );
};
export default Services;
