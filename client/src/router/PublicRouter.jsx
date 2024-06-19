import { Navigate, Outlet } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Login from "../components/login/Login";
import RegisterDonor from "../components/register/RegisterDonor";
import Home from "../pages/home/Home";
import { useSelector } from "react-redux";
import Notice from "../pages/Notice/Notice";
import Team from "../pages/team/Team";

const PublicRouteGard = () => {
  const { auths } = useSelector((state) => state.auth);

  if (!auths) {
    return <Outlet />;
  } else {
    return <Navigate to="/dashboard" />;
  }
};

const PublicRouter = [
  {
    element: <Layout />,
    children: [
      {
        element: <PublicRouteGard />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/login",
            element: <Login />,
          },
          {
            path: "donorregister",
            element: <RegisterDonor />,
          },
          {
            path: "notice",
            element: <Notice />,
          },
          {
            path: "team",
            element: <Team />,
          },
        ],
      },
    ],
  },
];

//export default
export default PublicRouter;
