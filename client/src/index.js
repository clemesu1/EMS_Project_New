import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import store from "./app/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;

renderMethod(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
  document.getElementById("root")
);
