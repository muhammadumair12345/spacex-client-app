import React from "react";
import SpaceXHeader from "../SpaceXHeader/SpaceXHeader";
import { App, GlobalStyle } from "./SpaceXApp.style";
import SpaceXContianer from "../SpaceXContainer/SpaceXContianer";

const SpaceXApp: React.FC = () => {
  return (
    <App>
      <GlobalStyle />
      <SpaceXHeader />
      <SpaceXContianer />
    </App>
  );
};

export default SpaceXApp;
