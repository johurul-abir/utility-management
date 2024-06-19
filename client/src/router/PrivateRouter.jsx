import { useSelector } from "react-redux";
import Admin from "../pages/admin/Admin";
import { Navigate, Outlet } from "react-router-dom";
import Layout from "../components/layout/Layout";
import UserDashboard from "../pages/user dashboard/UserDashboard";
import AllBills from "../pages/admin/pages/B-type-bill/AllBills";
import BtypeBill from "../pages/admin/pages/B-type-bill/BtypeBill";
import Dashboard from "../pages/admin/pages/dashboard/Dashboard";
import Register from "../components/register/Register";
import AllBtypeUsers from "../pages/admin/pages/all-btype-users/AllBtypeUsers";
import BillsBox from "../pages/user dashboard/page/bills-box/BillsBox";

const PrivateRouteGard = () => {
  const { auths } = useSelector((state) => state.auth);

  if (location.pathname === "/admin") {
    <Navigate to={"/admin/admindashboard"} />;
  }

  if (auths) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
};

const PrivateRouter = [
  //user admin
  {
    element: <PrivateRouteGard />,
    children: [
      {
        element: <Layout />,
        children: [
          {
            path: "dashboard",
            element: <UserDashboard />,
            children: [
              {
                path: "bills",
                element: <BillsBox />,
              },
            ],
          },
        ],
      },
    ],
  },
  //main admin
  {
    path: "/admin",
    element: <Admin />,
    children: [
      {
        path: "admindashboard",
        element: <Dashboard />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "btypebills",
        element: <AllBills />,
      },
      {
        path: "createbtypebill",
        element: <BtypeBill />,
      },
      {
        path: "allbtypeusers",
        element: <AllBtypeUsers />,
      },
    ],
  },
];
//export default
export default PrivateRouter;
