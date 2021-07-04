import styled from "styled-components";
import { Navbar } from "react-bootstrap";

export const Header = styled(Navbar)`
  .logo {
    display: flex;
    align-items: center;
    text-decoration: none;
    flex-grow: 60;
  }
  .logo-img {
    width: 40px;
    height: 40px;
    margin-right: 5px;
  }
  .logo-title {
    font-size: 1.5rem;
  }
`;
