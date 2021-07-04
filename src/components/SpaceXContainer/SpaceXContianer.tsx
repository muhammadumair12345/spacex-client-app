import React from "react";
import SpaceXHome from "../SpaceXHome/SpaceXHome";
import SpaceXLaunches from "../SpaceXLaunches/SpaceXLaunches";
import { Routes, Route } from "react-router-dom";
import { ContainerBox } from "./SpaceXContainer.style";
import SpaceXLaunchDetails from "../SpaceXLaunchDetails/SpaceXLaunchDetails";

const SpaceXContianer: React.FC = () => {
  return (
    <ContainerBox>
      <Routes>
        <Route path="/" element={<SpaceXHome />} />
        <Route path="/launches">
          <Route path="/" element={<SpaceXLaunches />} />
          <Route path="launch/:id" element={<SpaceXLaunchDetails />} />
        </Route>
      </Routes>
    </ContainerBox>
  );
};

export default SpaceXContianer;
