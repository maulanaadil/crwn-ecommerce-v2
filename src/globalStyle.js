import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
    }

    body {
        font-family: "Open Sans", sans-serif;
    }

    body::-webkit-scrollbar {
     display: none;
    }

    a {
        text-decoration: none;
        color: black;
    }

    * {
         box-sizing: border-box;
    }
`;

export default GlobalStyle;
