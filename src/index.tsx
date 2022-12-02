import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import reportWebVitals from "./reportWebVitals";
import "./index.css";
import MainStyle from "./styles/MainStyle";
import { BrowserRouter } from "react-router-dom";
import "@fontsource/roboto";
import "@fontsource/poppins";
import { newStore } from "./redux/store";
import App from "./components/App/App";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={newStore}>
      <BrowserRouter>
        <MainStyle />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
