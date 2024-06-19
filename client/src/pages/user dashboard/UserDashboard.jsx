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
                        <Link to="/dashboard">
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
                        <a href="dependent.html">
                          <i className="fas fa-users" />
                          <span>Dependent</span>
                        </a>
                      </li>
                      <li>
                        <a href="chat.html">
                          <i className="fas fa-comments" />
                          <span>Message</span>
                          <small className="unread-msg">23</small>
                        </a>
                      </li>
                      <li>
                        <a href="patient-accounts.html">
                          <i className="fas fa-file-invoice-dollar" />
                          <span>Accounts</span>
                        </a>
                      </li>
                      <li>
                        <a href="orders-list.html">
                          <i className="fas fa-list-alt" />
                          <span>Orders</span>
                          <small className="unread-msg">7</small>
                        </a>
                      </li>
                      <li>
                        <a href="medical-records.html">
                          <i className="fas fa-clipboard" />
                          <span>Add Medical Records</span>
                        </a>
                      </li>
                      <li>
                        <a href="medical-details.html">
                          <i className="fas fa-file-medical-alt" />
                          <span>Medical Details</span>
                        </a>
                      </li>
                      <li>
                        <a href="profile-settings.html">
                          <i className="fas fa-user-cog" />
                          <span>Profile Settings</span>
                        </a>
                      </li>
                      <li>
                        <a href="change-password.html">
                          <i className="fas fa-lock" />
                          <span>Change Password</span>
                        </a>
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
              <div className="row">
                <div className="col-12 col-md-6 col-lg-4 col-xl-3 patient-dashboard-top">
                  <div className="card">
                    <div className="card-body text-center">
                      <div className="mb-3">
                        <img
                          src="assets/img/specialities/pt-dashboard-01.png"
                          alt="Nonification-img"
                          width={55}
                        />
                      </div>
                      <h5>Notification Title</h5>
                      <p>Notification body</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row patient-graph-col">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Graph Status</h4>
                    </div>
                    <div className="card-body pt-2 pb-2 mt-1 mb-1">
                      <div className="row">
                        <div className="col-12 col-md-6 col-lg-4 col-xl-3 patient-graph-box">
                          <a
                            href="#"
                            className="graph-box"
                            data-bs-toggle="modal"
                            data-bs-target="#graph1"
                          >
                            <div>
                              <h4>BMI Status</h4>
                            </div>
                            <div className="graph-img">
                              <img
                                src="assets/img/shapes/graph-01.png"
                                alt="shapes-icon"
                              />
                            </div>
                            <div className="graph-status-result mt-3">
                              <span className="graph-update-date">
                                Last Update 6d
                              </span>
                            </div>
                          </a>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 col-xl-3 patient-graph-box">
                          <a
                            href="#"
                            className="graph-box pink-graph"
                            data-bs-toggle="modal"
                            data-bs-target="#graph2"
                          >
                            <div>
                              <h4>Heart Rate Status</h4>
                            </div>
                            <div className="graph-img">
                              <img
                                src="assets/img/shapes/graph-02.png"
                                alt="graph-icon"
                              />
                            </div>
                            <div className="graph-status-result mt-3">
                              <span className="graph-update-date">
                                Last Update 2d
                              </span>
                            </div>
                          </a>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 col-xl-3 patient-graph-box">
                          <a
                            href="#"
                            className="graph-box sky-blue-graph"
                            data-bs-toggle="modal"
                            data-bs-target="#graph3"
                          >
                            <div>
                              <h4>FBC Status</h4>
                            </div>
                            <div className="graph-img">
                              <img
                                src="assets/img/shapes/graph-03.png"
                                alt="chart-icon"
                              />
                            </div>
                            <div className="graph-status-result mt-3">
                              <span className="graph-update-date">
                                Last Update 5d
                              </span>
                            </div>
                          </a>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 col-xl-3 patient-graph-box">
                          <a
                            href="#"
                            className="graph-box orange-graph"
                            data-bs-toggle="modal"
                            data-bs-target="#graph4"
                          >
                            <div>
                              <h4>Weight Status</h4>
                            </div>
                            <div className="graph-img">
                              <img
                                src="assets/img/shapes/graph-04.png"
                                alt="chart-icon"
                              />
                            </div>
                            <div className="graph-status-result mt-3">
                              <span className="graph-update-date">
                                Last Update 3d
                              </span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
