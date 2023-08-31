import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';

const Routing = () => {
  return (
      <Routes>
        <Route path="/" exact element={<Home />} />

      </Routes>
  );
};

export default Routing;