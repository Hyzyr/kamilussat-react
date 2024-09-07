import React from 'react';
import Hero from './Hero';
import Tools from './Tools';
import Services from './Services';
import Projects from './projects/Projects';
import Team from './team/Team';
import Newsletter from '../components/Newsletter';

const Home = () => {
  return (
    <>
      <Hero />
      {/* <Tools /> */}
      <Services />
      <Projects />
      <Team />
    </>
  );
};

export default Home;
