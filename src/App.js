import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from 'home/Home';
import Auth from 'auth/Auth';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/*" element={<Auth />} />
      </Routes>
    </>
  );
};

export default App;
