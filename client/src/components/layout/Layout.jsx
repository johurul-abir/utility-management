import { Outlet, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "../header/Header";

import Footer from "../Footer";
import Breadcome from "../Breadcome";

const Layout = () => {
  const location = useLocation();
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Ready pack {location.pathname == "/" ? "|home" : location.pathname}
        </title>
      </Helmet>

      <Header />
      <Breadcome />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
