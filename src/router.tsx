import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Homepage from "./pages/Homepage/Homepage.tsx";

import ProjetOutletpage from "./pages/Projetspage/ProjetOutletpage.tsx";
// childrens homepage
import Projectpage from "./pages/Projetspage/childrens/Projectpage/Projectpage.tsx";
import Learningpage from "./pages/Projetspage/childrens/Learningpage/Learningpage.tsx";
import Professionalpage from "./pages/Projetspage/childrens/Professionalpage/Professionalpage.tsx";
import Sharedpage from "./pages/Projetspage/childrens/Sharedpage/Sharedpage.tsx";
import SharedList from "./pages/Projetspage/childrens/Sharedpage/Listpage.tsx";
import ProfessionalList from "./pages/Projetspage/childrens/Professionalpage/Listpage.tsx";
import LearningList from "./pages/Projetspage/childrens/Learningpage/Listpage.tsx";
import Listpage from "./pages/Projetspage/childrens/Projectpage/Listpage.tsx";

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
          { path: "learning/:id", element: <Learningpage /> },
          { path: "professional/:id", element: <Professionalpage /> },
          { path: "shared/:id", element: <Sharedpage /> },
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
