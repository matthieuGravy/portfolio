import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Homepage from "./pages/Homepage/Homepage.tsx";
import Aboutpage from "./pages/Aboutpage/Aboutpage";
import Contactpage from "./pages/Contactpage/Contactpage";
import Projectpage from "./pages/Projectpage/Projectpage";
import ItsGravyKitchen from "./pages/Projectpage/ItsGravyKitchen/ItsGravyKitchen";
import PlantClicker from "./pages/Projectpage/PlantClicker/PlantClicker";
import SoraCine from "./pages/Projectpage/SoraCine/SoraCine";
import BookFace from "./pages/Projectpage/BookFace/BookFace";
import FreshSHop from "./pages/Projectpage/FreshShop/FreshShop";
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
        path: "/about",
        element: <Aboutpage />,
      },
      {
        path: "/project",
        element: <Projectpage />,
        errorElement: <Errorpage />,
        children: [
          {
            path: "kitchens-bootstrap",
            element: <ItsGravyKitchen />,
          },
          {
            path: "plant-clicker-js",
            element: <PlantClicker />,
          },
          {
            path: "sora-cine",
            element: <SoraCine />,
          },
          {
            path: "bookface",
            element: <BookFace />,
          },
          {
            path: "fresh-shop",
            element: <FreshSHop />,
          },
        ],
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
