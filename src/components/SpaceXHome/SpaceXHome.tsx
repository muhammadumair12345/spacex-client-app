import React from "react";
import { Card } from "react-bootstrap";
import SpaceXBG from "../../images/spacex-bg.jpg";

const SpaceXHome: React.FC = () => {
  return (
    <Card>
      <Card.Img variant="top" src={SpaceXBG} style={{ height: "50vh" }} />
      <Card.Body>
        <Card.Title className="text-dark">SpaceX</Card.Title>
        <Card.Text className="text-dark">Elon_Musk@SpaceX.com</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SpaceXHome;
