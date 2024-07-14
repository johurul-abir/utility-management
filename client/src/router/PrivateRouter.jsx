import { useSelector } from "react-redux";
import Admin from "../pages/admin/Admin";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Layout from "../components/layout/Layout";
import UserDashboard from "../pages/user dashboard/UserDashboard";
import AllBills from "../pages/admin/pages/B-type-bill/AllBills";
import BtypeBill from "../pages/admin/pages/B-type-bill/BtypeBill";
import Dashboard from "../pages/admin/pages/dashboard/Dashboard";
import Register from "../components/register/Register";
import AllBtypeUsers from "../pages/admin/pages/all-btype-users/AllBtypeUsers";
import BillsBox from "../pages/user dashboard/page/bills-box/BillsBox";
import AllPayment from "../pages/admin/pages/payment/AllPayment";
import CreatePayment from "../pages/admin/pages/payment/CreatePayment";
import AllNotice from "../pages/admin/pages/notice/AllNotice";
import CreateNotice from "../pages/admin/pages/notice/CreateNotice";
import ProfileDashbord from "../pages/user dashboard/page/dashborad/ProfileDashbord";

const PrivateRouteGard = () => {
  const { auths } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  if (location.pathname === "/admin") {
    navigate("/admin/admindashboard");
  }

  if (location.pathname === "/dashboard") {
    navigate("/dashboard/userdashboard");
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
                path: "userdashboard",
                element: <ProfileDashbord />,
              },
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
      {
        path: "allpayment",
        element: <AllPayment />,
      },
      {
        path: "createpayment",
        element: <CreatePayment />,
      },
      {
        path: "allnotice",
        element: <AllNotice />,
      },
      {
        path: "createnotice",
        element: <CreateNotice />,
      },
    ],
  },
];
//export default
export default PrivateRouter;
