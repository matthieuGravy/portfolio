import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Homepage from "./pages/Homepage/Homepage.tsx";
// childrens homepage
import ProjetOutletpage from "./pages/Projetspage/ProjetOutletpage.tsx";

import Projectpage from "./pages/Projetspage/childrens/Projectpage/Projectpage.tsx";
// childrens projectpage : learnings
import Htmlportfoliopage from "./pages/Projetspage/childrens/Htmlportfolio/Htmlportfolio.tsx";
import Pommepatatepage from "./pages/Projetspage/childrens/Pommepatatepage/Pommepatatepage.tsx";
import Gsappage from "./pages/Projetspage/childrens/Gsappage/Gsappage.tsx";
import Itsgravykitchenpage from "./pages/Projetspage/childrens/Itsgravykitchenpage/Itsgravykitchenpage.tsx";
import Clickergamepage from "./pages/Projetspage/childrens/Clickergamepage/Clickergamepage.tsx";
import Expresspage from "./pages/Projetspage/childrens/Expresspage/Expresspage.tsx";
import Dockerpage from "./pages/Projetspage/childrens/Dockerpage/Dockerpage.tsx";
import Itgnightspage from "./pages/Projetspage/childrens/Itgnightspage/Itgnightspage.tsx";
import Soracinepage from "./pages/Projetspage/childrens/Soracinepage/Soracinepage.tsx";
import Bookfacepage from "./pages/Projetspage/childrens/Bookfacepage/Bookfacepage.tsx";

// childrens projectpage : professional
import Akwanzapage from "./pages/Projetspage/childrens/Akwanzapage/Akwanzapage.tsx";
import Afitpilotpage from "./pages/Projetspage/childrens/Afitpilotpage/Afitpilotpage.tsx";

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
          { path: "html-portfolio", element: <Htmlportfoliopage /> },
          { path: "pomme-patate", element: <Pommepatatepage /> },
          { path: "gsap-project", element: <Gsappage /> },
          { path: "itg-kitchens", element: <Itsgravykitchenpage /> },
          { path: "plant-clicker", element: <Clickergamepage /> },
          { path: "express-pug", element: <Expresspage /> },
          { path: "docker-project", element: <Dockerpage /> },
          { path: "itg-nights", element: <Itgnightspage /> },
          { path: "sora-cine", element: <Soracinepage /> },
          { path: "bookface", element: <Bookfacepage /> },
          { path: "akwanza", element: <Akwanzapage /> },
          { path: "afitpilot", element: <Afitpilotpage /> },
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
