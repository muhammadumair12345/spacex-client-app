import { gql } from "@apollo/client";

export const SPACEX_LUANCHES = gql`
  query Launch($id: String!) {
    launch(id: $id) {
      details
      mission_name
      rocket {
        rocket_name
      }
      upcoming
      launch_year
      launch_success
    }
  }
`;
