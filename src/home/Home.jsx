import React from 'react';
import Hero from './Hero';
import Tools from './tools/Tools';
import Services from './Services';
import Projects from './projects/Projects';
import Team from './team/Team';
import Newsletter from '../components/Newsletter';
import Header from 'components/Header';
import Footer from 'components/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Tools />
      <Services />
      <Projects />
      <Team />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
