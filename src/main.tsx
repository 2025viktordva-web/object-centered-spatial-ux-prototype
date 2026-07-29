import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource-variable/manrope";
import "../app/globals.css";
import { Workspace } from "../app/components/Workspace";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Не найден корневой элемент интерфейса.");
}

createRoot(root).render(
  <StrictMode>
    <Workspace />
  </StrictMode>,
);
