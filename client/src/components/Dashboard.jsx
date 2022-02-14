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

const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

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
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = React.useState(prefersDarkMode ? 'dark' : 'light');

  const colorMode = React.useMemo(
    () => ({
      setColorMode: (mode) => {
        setMode(mode);
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
        typography: {
          fontFamily: [
            'Rubik',
          ],
        },
        palette: {
          mode,
          ...(mode === "light"
            ? {
              // palette values for light mode
              primary: {
                main: "#9c4234",
                light: "#ffdad2",
                dark: "#400100",
                contrastText: "#ffede9",
              },
              secondary: {
                main: "#775751",
                light: "#ffdad3",
                dark: "#2d1511",
                contrastText: "#ffdad3",
              },
              background: {
                paper: '#fcfcfc',
                default: '#fcfcfc',
              },
            }
            : {
              // palette values for dark mode
              primary: {
                main: "#ffb4a5",
                light: "#ffdad2",
                dark: "#7d2b1f",
                contrastText: "#5f150b",
              },
              secondary: {
                main: "#e7bdb5",
                light: "#ffdad3",
                dark: "#5d3f3a",
                contrastText: "#442924",
              },
              background: {
                paper: '#201a19',
                default: '#201a19',
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
