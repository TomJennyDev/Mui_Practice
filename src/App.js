import { Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { createContext, useMemo, useState } from "react";
import MainContent from "./components/MainContent";
import NavBar from "./components/NavBar";
import jobs from "./data.json";

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "dark" && {
      primary: {
        main: "#f50057",
      },
      // secondary: {
      //   main: "#f50057",
      // },
    }),
  },
});

function App() {
  const [mode, setMode] = useState("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar />
        <Container maxWidth="lg" sx={{ mt: 5 }}>
          <MainContent jobs={jobs} />
        </Container>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
