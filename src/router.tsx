import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Homepage from "./pages/Homepage/Homepage.tsx";
//children
import Bookfacepage from "./pages/Homepage/childrens/Bookfacepage/Bookfacepage";
import Clickergamepage from "./pages/Homepage/childrens/Clickergamepage/Clickergamepage";

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
            path: "/bookface",
            element: <Bookfacepage />,
          },
          {
            path: "/clickergame",
            element: <Clickergamepage />,
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
