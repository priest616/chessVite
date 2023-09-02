import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Play from '../pages/Play';
import Puzzles from '../pages/puzzles/Puzzles';
import LeaderBoard from '../pages/leaderboard/LeaderBoard';
import Watch from '../pages/watch/Watch';

const Routing = () => {
  return (
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/play" exact element={<Play />} />
        <Route path="/puzzles" exact element={<Puzzles />} />
        <Route path="/leaderboard" exact element={<LeaderBoard />} />
        <Route path="/watch-and-learn" element={<Watch />} />

      </Routes>
  );
};

export default Routing;