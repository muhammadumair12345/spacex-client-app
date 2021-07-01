import React from "react";
import SpaceXHome from "../SpaceXHome/SpaceXHome";
import SpaceXLaunches from "../SpaceXLaunches/SpaceXLaunches";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const SpaceXContianer: React.FC = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<SpaceXHome />} />
          <Route path="/launches" element={<SpaceXLaunches />} />
        </Routes>
      </Router>
    </div>
  );
};

export default SpaceXContianer;
