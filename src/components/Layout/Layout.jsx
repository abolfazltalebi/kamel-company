import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <main className="space-y-12 mt-24">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;

