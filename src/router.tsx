import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Homepage from "./pages/Homepage/Homepage.tsx";
// childrens homepage
import ProjetOutletpage from "./pages/Projetspage/ProjetOutletpage.tsx";

import Projectpage from "./pages/Projetspage/childrens/Projectpage/Projectpage.tsx";
import Templatepage from "./pages/Projetspage/childrens/Templatepage/Templatepage.tsx";

import Aboutpage from "./pages/Aboutpage/Aboutpage";
import Contactpage from "./pages/Contactpage/Contactpage";
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
          { path: "learning/:id", element: <Templatepage /> },
          { path: "professional/:id", element: <Templatepage /> },
        ],
      },
      {
        path: "about",
        element: <Aboutpage />,
      },
      {
        path: "contact",
        element: <Contactpage />,
      },
      {
        path: "rgpd",
        element: <Rgpdpage />,
      },
      {
        path: "mentions-legales",
        element: <Mentionspage />,
      },
    ],
  },
]);
