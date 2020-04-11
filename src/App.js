import React from "react";
import { ThemeProvider } from "emotion-theming";
import theme from "./theme/theme";
import Main from "./pages/Main";
import GlobalStyles from "./GlobalStyles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
