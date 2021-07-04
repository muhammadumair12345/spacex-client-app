import React from "react";
import { useLaunchesQuery } from "../../generated/graphql";
import SpaceXLoading from "../SpaceXLoading/SpaceXLoading";
import SpaceXError from "../SpaceXError/SpaceXError";
import { Card } from "react-bootstrap";
import { CardGroup } from "./SpaceXLaunches.style";
import { NavLink, Outlet } from "react-router-dom";

const SpaceXLaunches: React.FC = () => {
  const { data, loading, error } = useLaunchesQuery({
    variables: {
      limit: 30,
    },
  });

  if (loading) return <SpaceXLoading />;
  if (error) return <SpaceXError />;

  return (
    <div>
      <h1>SpaceX Launches</h1>
      <CardGroup>
        {!!data?.launches &&
          data.launches.map(
            (launch) =>
              !!launch && (
                <Card key={launch?.id} className="bg-dark card">
                  <Card.Header>
                    Space Mission {launch?.mission_name}
                  </Card.Header>
                  <Card.Body>
                    <Card.Title>
                      Rocket {launch?.rocket?.rocket_name}
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      Launch Site {launch.launch_site?.site_name}
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
                    <NavLink
                      to={`launch/${launch.id}`}
                      className="btn btn-primary"
                    >
                      Launch Detail
                    </NavLink>
                  </Card.Body>
                </Card>
              )
          )}
      </CardGroup>
      <Outlet />
    </div>
  );
};

export default SpaceXLaunches;
