import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import React from "react";
import App from "App";

import { store } from "@/redux/store/store";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
