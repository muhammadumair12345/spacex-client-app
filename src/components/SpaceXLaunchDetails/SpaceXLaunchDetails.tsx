import React from "react";
import { useLaunchQuery } from "../../generated/graphql";
import SpaceXLoading from "../SpaceXLoading/SpaceXLoading";
import SpaceXError from "../SpaceXError/SpaceXError";
import { Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Detail } from "./SpaceXLaunchDetails.style";

const SpaceXLaunchDetails: React.FC = () => {
  const { id } = useParams();
  const { data, loading, error } = useLaunchQuery({
    variables: {
      id: id,
    },
  });

  if (loading) return <SpaceXLoading />;
  if (error) return <SpaceXError />;

  const launch = data?.launch;

  return (
    <Detail>
      <h1>SpaceX Launch Detail</h1>
      <Card className="bg-dark card">
        <Card.Header>Space Mission {launch?.mission_name}</Card.Header>
        <Card.Body>
          <Card.Title>Rocket {launch?.rocket?.rocket_name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Launch Site {launch?.launch_site?.site_name}
          </Card.Subtitle>
          <Card.Text>
            Status:{" "}
            {launch?.launch_success === true ? (
              <span className="text-success">Launch Success</span>
            ) : (
              <span className="text-danger">Launch Fail</span>
            )}
          </Card.Text>
          <Card.Text>Year: {launch?.launch_year}</Card.Text>
          <Card.Text>{launch?.details}</Card.Text>
          <NavLink to="/launches" className="btn btn-primary">
            Back
          </NavLink>
        </Card.Body>
      </Card>
    </Detail>
  );
};

export default SpaceXLaunchDetails;
