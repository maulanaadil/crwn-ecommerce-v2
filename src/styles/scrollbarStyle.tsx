import { css } from "styled-components";

export const scrollbarStyle = css`
  body::-webkit-scrollbar {
    width: 10px;
  }

  body::-webkit-scrollbar-track {
    background: transparent;
  }

  body::-webkit-scrollbar-thumb {
    background: #3e3e3e;
    border-radius: 5px;
  }

  body::-webkit-scrollbar-thumb:hover {
    background: black;
  }
`;
