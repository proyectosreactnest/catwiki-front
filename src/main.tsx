import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "@/redux/store/store";
import { ChakraProvider } from "@chakra-ui/react";

import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </Provider>
);
