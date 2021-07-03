import React from "react";
import SpaceXHome from "../SpaceXHome/SpaceXHome";
import SpaceXLaunches from "../SpaceXLaunches/SpaceXLaunches";
import { Routes, Route } from "react-router-dom";
import { ContainerBox } from "./SpaceXContainer.style";

const SpaceXContianer: React.FC = () => {
  return (
    <ContainerBox>
      <Routes>
        <Route path="/" element={<SpaceXHome />} />
        <Route path="/launches" element={<SpaceXLaunches />} />
      </Routes>
    </ContainerBox>
  );
};

export default SpaceXContianer;
