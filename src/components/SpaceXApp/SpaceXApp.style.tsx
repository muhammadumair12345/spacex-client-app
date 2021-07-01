import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import BGSpaceXImage from "../../images/bg-timer.jpg";

export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        box-sizing:border-box;
        font-family: 'Catamaran', sans-serif;
        color:#fff;
    }
`;

export const App = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #000;
`;
