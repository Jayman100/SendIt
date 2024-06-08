import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ModalProvider } from "./contexts/ModalContext.jsx";
import Providers from "./components/Providers.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Providers>
      <ModalProvider>
        <App />
      </ModalProvider>
    </Providers>
  </React.StrictMode>
);
