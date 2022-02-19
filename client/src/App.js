import React from "react";
import Dashboard from "./components/Dashboard";
import { DrizzleContext } from "@drizzle/react-plugin";
import { Box, CircularProgress } from "@mui/material";

const App = () => {
    return (
        <DrizzleContext.Consumer >
            {drizzleContext => {
                const { drizzle, drizzleState, initialized } = drizzleContext;

                if (!initialized) return (
                    <Box sx={{ display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
                        <CircularProgress />
                    </Box>
                );

                return <Dashboard drizzle={drizzle} drizzleState={drizzleState} />

            }}
        </DrizzleContext.Consumer>
    );
};

export default App;
