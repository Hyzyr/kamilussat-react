import React, { useEffect } from 'react';
import Header from 'components/Header';
import Home from 'home/Home';
import Newsletter from 'components/Newsletter';
import Footer from 'components/Footer';
import useSmoothScroll from 'hooks/useSmoothScroll';

const App = () => {
  // useSmoothScroll();
  console.log('hello to kamil-ussat')
  return (
    <>
      <Header />
      <Home />
      <Newsletter />
      <Footer />
    </>
  );
};

export default App;
