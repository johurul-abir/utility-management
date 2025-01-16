import { useSelector } from "react-redux";
import Admin from "../pages/admin/Admin";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
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
import RuningMonthPaidUsers from "../pages/admin/pages/dashboard/subpage/RuningMonthPaidUsers";
import RuningMonthDueUsers from "../pages/admin/pages/dashboard/subpage/RuningMonthDueUsers";
import CreateTeamMember from "../pages/admin/pages/team/CreateTeamMember";
import AllTeamMember from "../pages/admin/pages/team/AllTeamMember";
import CreactComplain from "../pages/user dashboard/page/complain/CreactComplain";
import ComplainHistory from "../pages/user dashboard/page/complain/ComplainHistory";
import ProfileSetting from "../pages/user dashboard/page/profile setting/ProfileSetting";
import ChangePassword from "../pages/user dashboard/page/change password/ChangePassword";
import SpecialNotice from "../pages/user dashboard/page/special notice/SpecialNotice";
import Last12MonthDueUsers from "../pages/admin/pages/dashboard/subpage/Last12MonthDueUsers";
import MoreThan5MonthDueUsers from "../pages/admin/pages/dashboard/subpage/MoreThan5MonthDueUsers";
import MoreThan12MonthDueUsers from "../pages/admin/pages/dashboard/subpage/MoreThan12MonthDueUsers";
import ShowDueBills from "../pages/admin/pages/all-btype-users/ShowDueBills";

const PrivateRouteGard = () => {
  const { auths } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const location = useLocation();

  if (location.pathname === "/admin/") {
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
          {
            path: "createcomplain",
            element: <CreactComplain />,
          },
          {
            path: "complainhistory",
            element: <ComplainHistory />,
          },
          {
            path: "profilesettin",
            element: <ProfileSetting />,
          },
          {
            path: "changepassword",
            element: <ChangePassword />,
          },
          {
            path: "specialnotice",
            element: <SpecialNotice />,
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
        path: "showduebills",
        element: <ShowDueBills />,
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
      {
        path: "runingpaiduser",
        element: <RuningMonthPaidUsers />,
      },
      {
        path: "runingdueuser",
        element: <RuningMonthDueUsers />,
      },
      {
        path: "last12monthdueusers",
        element: <Last12MonthDueUsers />,
      },
      {
        path: "morethan5monthusers",
        element: <MoreThan5MonthDueUsers />,
      },
      {
        path: "morethan12monthusers",
        element: <MoreThan12MonthDueUsers />,
      },
      {
        path: "team",
        element: <CreateTeamMember />,
      },
      {
        path: "allteam",
        element: <AllTeamMember />,
      },
    ],
  },
];
//export default
export default PrivateRouter;
