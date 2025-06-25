// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ThemeProvider from "./DarkTheme/contentThem";
import "./index.css";
import Test from "./components/ui/test";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
