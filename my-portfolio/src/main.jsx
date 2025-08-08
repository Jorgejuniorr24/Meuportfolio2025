// src/main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import RouterManager from "./router";

// ORDEM IMPORTANTE DOS CSS:
import "./index.css";
import "./App.css";
import "./global.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterManager />
  </StrictMode>
);
