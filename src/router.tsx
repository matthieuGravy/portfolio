import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Homepage from "./pages/Homepage/Homepage.tsx";
//childrens
import Landingpage from "./pages/Homepage/childrens/Landingpage/Landingpage";
import Itsgravykitchenpage from "./pages/Homepage/childrens/Itsgravykitchenpage/Itsgravykitchenpage";
import Bookfacepage from "./pages/Homepage/childrens/Bookfacepage/Bookfacepage";
import Clickergamepage from "./pages/Homepage/childrens/Clickergamepage/Clickergamepage";
import Soracinepage from "./pages/Homepage/childrens/Soracinepage/Soracinepage";
import Shoppage from "./pages/Homepage/childrens/Shoppage/Shoppage";

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
        children: [
          {
            path: "/",
            element: <Landingpage />,
          },
          {
            path: "/itg-kitchens",
            element: <Itsgravykitchenpage />,
          },
          {
            path: "/plant-clicker",
            element: <Clickergamepage />,
          },
          {
            path: "/sora-cine",
            element: <Soracinepage />,
          },
          {
            path: "/bookface",
            element: <Bookfacepage />,
          },
          {
            path: "/shop",
            element: <Shoppage />,
          },
        ],
      },
      {
        path: "/about",
        element: <Aboutpage />,
      },
      {
        path: "/contact",
        element: <Contactpage />,
      },
      {
        path: "/rgpd",
        element: <Rgpdpage />,
      },
      { path: "/mentions-legales", element: <Mentionspage /> },
    ],
  },
]);
