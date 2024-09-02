import React from 'react';
import { publicUrl } from 'global';
import { teamMates } from './contants';
import { facebookSvg, instaSvg, linkedinSvg } from './SVG';

const Team = () => {
  return (
    <section class="team">
      <div class="autoContainer">
        <div class="team__inner">
          <div class="team__inner-box">
            <h3>Meet Our Experts</h3>
            <p>
              Get to know the talented professionals behind our successful
              projects. Our team's diverse expertise and collaborative spirit
              drive innovation and deliver exceptional results.
            </p>
          </div>
          <div class="team__row">
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
    <div class="team__item">
      <div class="team__item-image">
        <div class="ratioImage">
          <img src={publicUrl + image} alt={name} />
        </div>
        <div class="team__item-group">
          <button class="button button--ico">
            <span class="ico">{facebookSvg}</span>
          </button>
          <button class="button button--ico">
            <span class="ico">{instaSvg}</span>
          </button>
          <button class="button button--ico">
            <span class="ico">{linkedinSvg}</span>
          </button>
        </div>
      </div>
      <div class="team__item-info">
        <h5 class="text--title">{speciality}</h5>
        <h6>{name}</h6>
      </div>
    </div>
  );
};
export default Team;
