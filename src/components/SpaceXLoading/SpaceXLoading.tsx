import React from "react";
import { Loading } from "./SpaceXLoading.style";
import { Spinner } from "react-bootstrap";

const SpaceXLoading: React.FC = () => {
  return (
    <Loading>
      <Spinner animation="grow" variant="light" />
      <h5>Loading SpaceX...</h5>
    </Loading>
  );
};

export default SpaceXLoading;
