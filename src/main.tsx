import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
//import { Provider } from "react-redux";
//import { PersistGate } from "redux-persist/integration/react";

import { router } from "./router.jsx";
//import { store, persistor } from "./store/";

import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

import "./index.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>

    {/*<Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>  
      </PersistGate>
    </Provider>*/}
  </StrictMode>
);
