import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./styles/index.css";
import "./styles/Styles.css";
import { BuildMart } from "./BuildMart";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <BuildMart />
    </StrictMode>
  </BrowserRouter>
);
