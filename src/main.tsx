import React from "react";
import { createRoot } from "react-dom/client";
import "modern-normalize";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./redux/store";

// отримуємо елемент root
const rootElem = document.getElementById("root");
if (!rootElem) throw new Error("Root element not found");

// створюємо React root
const root = createRoot(rootElem);

// рендеримо додаток
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
