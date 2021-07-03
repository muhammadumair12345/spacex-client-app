import React from "react";
import { useLaunchQuery } from "../../generated/graphql";
import SpaceXLoading from "../SpaceXLoading/SpaceXLoading";
import SpaceXError from "../SpaceXError/SpaceXError";

const SpaceXLaunchDetails: React.FC = () => {
  const { data, loading, error } = useLaunchQuery({
    variables: {
      id: "13",
    },
  });

  if (loading) return <SpaceXLoading />;
  if (error) return <SpaceXError />;

  const launch = data?.launch;

  return (
    <div>
      <h1>SpaceX Launch Detail</h1>
      <div>Details:{launch?.details}</div>
      <div>Success:{launch?.launch_success}</div>
      <div>Year:{launch?.launch_year}</div>
      <div>Rocket Name:{launch?.rocket?.rocket_name}</div>
      <div>Site Name:{launch?.launch_site?.site_name}</div>
      <div>Mission Name:{launch?.mission_name}</div>
    </div>
  );
};

export default SpaceXLaunchDetails;
