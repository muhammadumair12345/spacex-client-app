import { gql } from "@apollo/client";

export const SPACEX_LAUNCH_DETAIL = gql`
  query Launch($id: ID!) {
    launch(id: $id) {
      mission_name
      rocket {
        rocket_name
      }
      launch_site {
        site_name
      }
      launch_year
      launch_success
      details
    }
  }
`;
