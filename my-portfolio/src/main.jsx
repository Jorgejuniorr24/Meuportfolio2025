// src/main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import RouterManager from "./router";

// ORDEM IMPORTANTE DOS CSS:
import "./index.css";
import "./App.css";
import "./global.css";

import { I18nProvider } from "./contexts/I18nContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <I18nProvider>
      <RouterManager />
    </I18nProvider>
  </StrictMode>
);
