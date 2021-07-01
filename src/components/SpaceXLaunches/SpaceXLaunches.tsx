import React from "react";
import { useLaunchQuery } from "../../generated/graphql";
import SpaceXLoading from "../SpaceXLoading/SpaceXLoading";
import SpaceXError from "../SpaceXError/SpaceXError";

const SpaceXLaunches = () => {
  const { data, loading, error } = useLaunchQuery({
    variables: {
      id: "20",
    },
  });

  if (loading) return <SpaceXLoading />;
  if (error) return <SpaceXError />;

  const launch = data?.launch;

  return (
    <div>
      <h1>Launches</h1>
      <div>{launch?.details}</div>
      <div>{launch?.launch_success}</div>
      <div>{launch?.launch_year}</div>
      <div>{launch?.rocket?.rocket_name}</div>
      <div>{launch?.mission_name}</div>
    </div>
  );
};

export default SpaceXLaunches;
