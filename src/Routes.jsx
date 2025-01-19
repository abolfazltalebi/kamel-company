import AboutMe from "./components/about/AboutMe";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import Weblogs from "./components/weblogs/Weblogs";
import { createBrowserRouter } from "react-router-dom";

// import ContactMe from "./components/ContactMe/ContactMe";





const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/aboutMe", element: <AboutMe /> },
      // { path: "/ContactMe", element: <ContactMe /> },
      { path: "/weblogs", element: <Weblogs /> },
    ],
  },
]);

export default router;
