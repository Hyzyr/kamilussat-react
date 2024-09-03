import React from 'react';
import { publicUrl } from 'global';
import { teamMates } from './contants';
import { facebookSvg, instaSvg, linkedinSvg } from './SVG';

const Team = () => {
  return (
    <section className="team">
      <div className="autoContainer">
        <div className="team__inner">
          <div className="team__inner-box">
            <h3>Meet Our Experts</h3>
            <p>
              Get to know the talented professionals behind our successful
              projects. Our team's diverse expertise and collaborative spirit
              drive innovation and deliver exceptional results.
            </p>
          </div>
          <div className="team__row">
            {teamMates.map((data) => (
              <TeamItem {...data} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
const TeamItem = ({ name, speciality, image, socialLinks }) => {
  return (
    <div className="team__item">
      <div className="team__item-image">
        <div className="ratioImage">
          <img src={publicUrl + image} alt={name} />
        </div>
        <div className="team__item-group">
          <button className="button button--ico">
            <span className="ico">{facebookSvg}</span>
          </button>
          <button className="button button--ico">
            <span className="ico">{instaSvg}</span>
          </button>
          <button className="button button--ico">
            <span className="ico">{linkedinSvg}</span>
          </button>
        </div>
      </div>
      <div className="team__item-info">
        <h5 className="text--title">{speciality}</h5>
        <h6>{name}</h6>
      </div>
    </div>
  );
};
export default Team;
