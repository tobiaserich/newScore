import React from "react";
import { Global, css } from "@emotion/core";

function GlobalStyles() {
  return (
    <Global
      styles={(theme, props) => css`
        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          width: 100vw;
          font-family: "roboto", "sans-serif";
        }
        #root {
          margin:auto;
          min-height:100vh;
          height:100%;
          max-width: 400px;
          background: linear-gradient(${theme.colors.secondary} 30%,#B9DFD5 100%);
        }
      }
      `}
    />
  );
}

export default GlobalStyles;
