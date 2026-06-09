import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { WatchlistProvider } from "./context/watchlistcontext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <WatchlistProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </WatchlistProvider>
  </React.StrictMode>
);