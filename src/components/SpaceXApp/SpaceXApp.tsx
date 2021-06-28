import React from "react";
import { Jumbotron } from "react-bootstrap";
import { useLaunchQuery } from "../../generated/graphql";

const SpaceXApp: React.FC = () => {
  const { data, loading, error } = useLaunchQuery({
    variables: {
      id: "20",
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log(data);

  return (
    <div>
      <Jumbotron>SpaceX Client App</Jumbotron>
      <div></div>
    </div>
  );
};

export default SpaceXApp;
