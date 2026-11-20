import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { applyTheme, getStoredTheme } from "./utils/theme";
import "./styles.css";

applyTheme(getStoredTheme());

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
