import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ModalProvider } from "./contexts/ModalContext.jsx";
import Providers from "./components/Providers.jsx";
import { TokenProvider } from "./contexts/TokenContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Providers>
      <ModalProvider>
        <TokenProvider>
          <App />
        </TokenProvider>
      </ModalProvider>
    </Providers>
  </React.StrictMode>
);
