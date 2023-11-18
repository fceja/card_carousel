import React from "react";
import ReactDOM from "react-dom/client";
<<<<<<< HEAD:src/index.tsx
import reportWebVitals from "./tests/reportWebVitals";

import "./styles/index.scss";
import Root from "./components/Root";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
=======
import "./styles/index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
>>>>>>> 5f6e5b6 (cleanup):src/index.js
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
