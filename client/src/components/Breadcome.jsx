import { useLocation } from "react-router-dom";
import { ganeratePageTilte } from "../helper/Helpers.js";

const Breadcome = () => {
  const { pathname } = useLocation();
  const ignorePathname = ["/login", "/register", "/", "/donorregister"];

  if (!ignorePathname.includes(pathname)) {
    return (
      <>
        <div className="breadcrumb-bar-two py-0">
          <div className="container">
            <div className="row align-items-center inner-banner">
              <div className="col-md-12 col-12 text-center ">
                <h2
                  className="breadcrumb-title"
                  style={{ textTransform: "capitalize" }}
                >
                  {ganeratePageTilte(pathname)}
                </h2>
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="index.html">Home</a>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                      {ganeratePageTilte(pathname)}
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Breadcome;
