import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Homepage from "./pages/Homepage/Homepage.tsx";
import Aboutpage from "./pages/Aboutpage/Aboutpage";
import Internshippage from "./pages/Internshippage/Internshippage";
import Contactpage from "./pages/Contactpage/Contactpage";
import Projectpage from "./pages/Projectpage/Projectpage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/about", element: <Aboutpage /> },
      { path: "/project", element: <Projectpage /> },
      { path: "/internship", element: <Internshippage /> },
      { path: "/contact", element: <Contactpage /> },
    ],
  },
]);
