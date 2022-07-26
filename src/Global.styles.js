// globalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #000;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
  .app {
    padding: 15px;
    }
    .text-white{
        color: #fff;
    }
    .text-dark {
        color: #000;
    }
`;

export default GlobalStyle;
