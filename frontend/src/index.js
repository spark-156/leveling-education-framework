import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { ThemeSwitcherProvider } from "react-css-theme-switcher";

import store from "./store/configureStore";

import "./styles/index.css";

let persistor = persistStore(store);

const themes = {
  light:"light.css",
  dark: "dark.css",
};

const preferedTheme = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeSwitcherProvider defaultTheme={preferedTheme} themeMap={themes}         insertionPoint="styles-insertion-point"
        >
          <App />
        </ThemeSwitcherProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
