import Avater from "../../components/Avater";
import { userLogOut } from "../../features/auth/authApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import createToast from "../../utils/toastify";
import { setMessageEmpty } from "../../features/auth/authSlice";
import { Link, Outlet, useLocation } from "react-router-dom";

const UserDashboard = () => {
  //use dispatch
  const dispatch = useDispatch();

  // use location
  const location = useLocation();

  //use Selector
  const { message, error, auths } = useSelector((state) => state.auth);

  //user logout
  const handleLogOut = (e) => {
    e.preventDefault();
    dispatch(userLogOut());
  };

  useEffect(() => {
    if (message) {
      createToast(message, "success");
      dispatch(setMessageEmpty());
    }

    if (error) {
      createToast(error);
    }
  }, [message, error, dispatch]);

  return (
    <>
      <div className="content">
        <div className="container">
          <div className="row">
            {/* Profile Sidebar */}
            <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
              <div className="profile-sidebar">
                <div className="widget-profile pro-widget-content">
                  <div className="profile-info-widget">
                    <a href="#" className="booking-doc-img">
                      {auths.photo ? <img src={auths.photo} /> : <Avater />}
                    </a>
                    <div className="profile-det-info">
                      <h3>{auths.name}</h3>
                      <div className="patient-details">
                        {auths.flateno && (
                          <h5
                            style={{
                              textTransform: "uppercase",
                              fontWeight: 600,
                            }}
                          >
                            <i className="fas fa-birthday-cake" />{" "}
                            {auths.flateno}
                          </h5>
                        )}

                        {auths.email && (
                          <h5 className="mb-0">
                            <i className="fas fa-map-marker-alt" />{" "}
                            {auths.email}
                          </h5>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="dashboard-widget">
                  <nav className="dashboard-menu">
                    <ul>
                      <li
                        className={
                          location.pathname == "/dashboard"
                            ? "active"
                            : undefined
                        }
                      >
                        <Link to="/dashboard/userdashboard">
                          <i className="fas fa-columns" />
                          <span>Dashboard</span>
                        </Link>
                      </li>

                      <li
                        className={
                          location.pathname == "/dashboard/bills"
                            ? "active"
                            : undefined
                        }
                      >
                        <Link to="/dashboard/bills">
                          <i className="fas fa-bookmark" />
                          <span>Bill info</span>
                        </Link>
                      </li>

                      <li>
                        <Link to="/dashboard/specialnotice">
                          <i className="fas fa-comments" />
                          <span>Special Notice</span>
                          <small className="unread-msg">23</small>
                        </Link>
                      </li>

                      <li>
                        <Link to="/dashboard/createcomplain">
                          <i className="fas fa-file-invoice-dollar" />
                          <span>Create Complain</span>
                        </Link>
                      </li>

                      <li>
                        <Link to="/dashboard/complainhistory">
                          <i className="fas fa-file-invoice-dollar" />
                          <span> Complain History</span>
                        </Link>
                      </li>

                      <li>
                        <Link to="/dashboard/profilesettin">
                          <i className="fas fa-user-cog" />
                          <span>Profile Settings</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/dashboard/changepassword">
                          <i className="fas fa-lock" />
                          <span>Change Password</span>
                        </Link>
                      </li>
                      <li>
                        <a onClick={handleLogOut}>
                          <i className="fas fa-sign-out-alt" />
                          <span>Logout</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>

            {/* / Profile Sidebar */}
            <div className="col-md-7 col-lg-8 col-xl-9">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
