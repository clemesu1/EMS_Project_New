import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import store from "./app/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { DrizzleContext } from "@drizzle/react-plugin";
import { Drizzle, generateStore } from "@drizzle/store";
import drizzleOptions from './drizzleOptions';
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;

const drizzleStore = generateStore(drizzleOptions);
const drizzle = new Drizzle(drizzleOptions, drizzleStore);


renderMethod(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <DrizzleContext.Provider drizzle={drizzle}>
          <App />
        </DrizzleContext.Provider>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
  document.getElementById("root")
);
