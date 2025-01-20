import AboutMe from "./components/about/AboutMe";
import ContactMe from "./components/contactMe/contactMe";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import NotFound from "./components/NotFound";
import Weblogs from "./components/weblogs/Weblogs";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/aboutMe", element: <AboutMe /> },
      { path: "/ContactMe", element: <ContactMe /> },
      { path: "/weblogs", element: <Weblogs /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
