import { Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Header from "components/Header";
import Home from "home/Home";
import Newsletter from "components/Newsletter";
import Footer from "components/Footer";
import useSmoothScroll from "hooks/useSmoothScroll";
import Login from "login/Login";

const App = () => {
  // useSmoothScroll();
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Newsletter />
      <Footer />
    </>
  );
};

export default App;
