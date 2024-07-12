import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Homepage from "./pages/Homepage/Homepage.tsx";
// childrens homepage
import ProjetOutletpage from "./pages/Projetspage/ProjetOutletpage.tsx";

import Projectpage from "./pages/Projetspage/childrens/Projectpage/Projectpage.tsx";
import Learningpage from "./pages/Projetspage/childrens/Learningpage/Learningpage.tsx";
import Professionalpage from "./pages/Projetspage/childrens/Professionalpage/Professionalpage.tsx";

import Aboutpage from "./pages/Aboutpage/Aboutpage";
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
          { path: "learning/:id", element: <Learningpage /> },
          { path: "professional/:id", element: <Professionalpage /> },
        ],
      },
      {
        path: "about",
        element: <Aboutpage />,
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
