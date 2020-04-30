import React from "react";
import { Global, css } from "@emotion/core";

function GlobalStyles() {
  return (
    <Global
      styles={(theme) => css`
        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          font-family: "roboto", "sans-serif";
        }
        #root {
          margin:auto;
          min-height:100vh;
          height:100%;
          max-width: 500px;
          background: linear-gradient(${theme.colors.secondary} 30%,#B9DFD5 100%);
        }
      }
      `}
    />
  );
}

export default GlobalStyles;
