import AboutMe from "./components/about/AboutMe";
import ContactSection from "./components/Common/ContactSection";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/aboutMe", element: <AboutMe /> },
      { path: "/contactMe", element: <ContactSection /> },
    ],
  },
]);

export default router;
