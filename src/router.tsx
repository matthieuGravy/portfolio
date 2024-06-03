import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Homepage from "./pages/Homepage/Homepage.tsx";
// childrens homepage
import ProjetOutletpage from "./pages/Projetspage/ProjetOutletpage.tsx";
// childrens projectpage
import Htmlportfoliopage from "./pages/Projetspage/childrens/Htmlportfolio/Htmlportfolio.tsx";
import Projectpage from "./pages/Projetspage/childrens/Projectpage/Projectpage.tsx";
import Itsgravykitchenpage from "./pages/Projetspage/childrens/Itsgravykitchenpage/Itsgravykitchenpage.tsx";
import Bookfacepage from "./pages/Projetspage/childrens/Bookfacepage/Bookfacepage.tsx";
import Clickergamepage from "./pages/Projetspage/childrens/Clickergamepage/Clickergamepage.tsx";
import Soracinepage from "./pages/Projetspage/childrens/Soracinepage/Soracinepage.tsx";
import Shoppage from "./pages/Projetspage/childrens/Shoppage/Shoppage.tsx";

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
          {
            path: "itg-kitchens",
            element: <Itsgravykitchenpage />,
          },
          {
            path: "plant-clicker",
            element: <Clickergamepage />,
          },
          {
            path: "sora-cine",
            element: <Soracinepage />,
          },
          {
            path: "bookface",
            element: <Bookfacepage />,
          },
          {
            path: "shop",
            element: <Shoppage />,
          },
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
