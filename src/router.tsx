import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Homepage from "./pages/Homepage/Homepage.tsx";

import ProjetOutletpage from "./pages/Projetspage/ProjetOutletpage.tsx";
// childrens homepage
import Projectpage from "./pages/Projetspage/childrens/Projectpage.tsx";

import Listpage from "./pages/Projetspage/childrens/Listpage.tsx";
import Itempage from "./pages/Projetspage/childrens/Itempage.tsx";

import Errorpage from "./pages/Errorpage/Errorpage";
import Rgpdpage from "./pages/Rgpdpage/Rgpdpage";
import Mentionspage from "./pages/Mentionspage/Mentionspage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Errorpage />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "projects",
        element: <ProjetOutletpage />,
        children: [
          { path: "", element: <Projectpage /> },
          { path: "learning", element: <Listpage /> },
          { path: "professional", element: <Listpage /> },
          { path: "shared", element: <Listpage /> },
          { path: "learning/:id", element: <Itempage /> },
          { path: "professional/:id", element: <Itempage /> },
          { path: "shared/:id", element: <Itempage /> },
        ],
      },
      {
        path: "privacy-policy",
        element: <Rgpdpage />,
      },
      {
        path: "legal-notice",
        element: <Mentionspage />,
      },
    ],
  },
]);
