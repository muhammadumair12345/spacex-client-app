import React from "react";
import SpaceXHeader from "../SpaceXHeader/SpaceXHeader";
import { GlobalStyle } from "./SpaceXApp.style";
import SpaceXContianer from "../SpaceXContainer/SpaceXContianer";
import { BrowserRouter as Router } from "react-router-dom";

const SpaceXApp: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <SpaceXHeader />
        <SpaceXContianer />
      </Router>
    </>
  );
};

export default SpaceXApp;
