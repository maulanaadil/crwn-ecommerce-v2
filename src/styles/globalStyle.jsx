import { createGlobalStyle } from "styled-components";
import { scrollbarStyle } from "./scrollbarStyle";

const GlobalStyle = createGlobalStyle`
    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
    }

    body {
        font-family: "Open Sans", sans-serif;
    }

    a {
        text-decoration: none;
        color: black;
    }

    * {
         box-sizing: border-box;
    }

    ${scrollbarStyle}
`;

export default GlobalStyle;
