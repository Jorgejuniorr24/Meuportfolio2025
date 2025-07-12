// src/main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RouterManager from "./router";
// Importe o RouterManager

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterManager /> {/* Substitua App por RouterManager */}
  </StrictMode>
)