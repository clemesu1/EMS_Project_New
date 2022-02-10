import * as React from "react";
import { useSelector } from "react-redux";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, CssBaseline, Toolbar } from "@mui/material";
import Navigation from "./Navigation";
import SignIn from "../pages/SignIn";
import OperatorInfo from "../pages/OperatorInfo";
import CallDetails from "../pages/CallDetails";
import Assessment from "../pages/Assessment";
import Copyright from "./Copyright";
import ActionDial from "./ActionDial";
import TreatmentContainer from "./TreatmentContainer";
import CallReport from "../pages/CallReport";
import Treatment from "../pages/Treatment";
import useMediaQuery from "@mui/material/useMediaQuery";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function DashboardContent() {
  const colorMode = React.useContext(ColorModeContext);

  const toggle = useSelector((state) => state.drawerToggle.value);

  const PrivateWrapper = () => {
    return toggle ? <Outlet /> : <Navigate replace to="/sign-in" />;
  };

  return (
    <React.Fragment>
      <Box
        sx={{
          bgcolor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          display: "flex",
        }}
      >
        <CssBaseline />
        <Navigation colorMode={colorMode} />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Box>
            <Routes>
              <Route exact element={<PrivateWrapper />}>
                <Route
                  path="call-details"
                  element={<Navigate replace to="vehicle-details" />}
                />
                <Route
                  path="assessment"
                  element={<Navigate replace to="patient-history" />}
                />
                <Route
                  path="treatment"
                  element={<Navigate replace to="interventions" />}
                />

                <Route path="call-details">
                  <Route path=":page" element={<CallDetails />} />
                </Route>

                <Route path="assessment">
                  <Route path=":page" element={<Assessment />} />
                </Route>

                <Route path="treatment" element={<TreatmentContainer />}>
                  <Route path=":page" element={<Treatment />} />
                </Route>

                <Route path="call-report" element={<CallReport />} />
                {/* <Route path="operator-details" element={<OperatorDetails />} /> */}
              </Route>
              <Route path="operator-info" element={<OperatorInfo />} />

              <Route path="sign-in" element={<SignIn />} />

              <Route path="/" element={<Navigate replace to="/sign-in" />} />
            </Routes>
          </Box>
          <Copyright />
        </Box>
        {toggle && <ActionDial />}
      </Box>
    </React.Fragment>
  );
}

export default function Dashboard() {
  const [mode, setMode] = React.useState("light");
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const colorMode = React.useMemo(
    () => ({
      setLightMode: () => {
        setMode("light");
      },
      setDarkMode: () => {
        setMode("dark");
      },
      setSystemMode: () => {
        setMode(prefersDarkMode ? "dark" : "light");
      },
    }),
    [prefersDarkMode]
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "light"
            ? {
                // palette values for light mode
                primary: {
                  main: "#6750A4",
                  contrastText: "#fff",
                },
                secondary: {
                  main: "#625B71",
                  contrastText: "#fff",
                },
              }
            : {
                // palette values for dark mode
                primary: {
                  main: "#D0BCFF",
                  contrastText: "#000",
                },
                secondary: {
                  main: "#CCC2DC",
                  contrastText: "#000",
                },
              }),
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <DashboardContent />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
