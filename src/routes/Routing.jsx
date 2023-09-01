import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Play from '../pages/Play';

const Routing = () => {
  return (
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/play" exact element={<Play />} />

      </Routes>
  );
};

export default Routing;