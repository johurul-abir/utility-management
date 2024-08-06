import { Link, Outlet, useLocation } from "react-router-dom";
import "./Admin.scss";
import { MdSpaceDashboard } from "react-icons/md";
import { RxFontBold } from "react-icons/rx";
import { HiUserGroup } from "react-icons/hi2";
import { IoNotifications } from "react-icons/io5";
import { HiUsers } from "react-icons/hi";
import { Dropdown, DropdownItem } from "react-bootstrap";
import { MdFontDownload } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { MdCurrencyBitcoin } from "react-icons/md";
import { CiBank } from "react-icons/ci";
import { TbCoinTaka } from "react-icons/tb";

const Admin = () => {
  const location = useLocation();

  return (
    <>
      <div className="admin">
        <div className="row">
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-5">
            <div className="admin_menu">
              <div className="logo">
                <h2>BRP Adimn</h2>
                <hr />
              </div>
              <div className="admin_menu_part ps-3">
                <ul>
                  <li className="ps-3">
                    <Link
                      to="admindashboard"
                      className={
                        location.pathname === "/admin/dashboard" ? "active" : ""
                      }
                      id="dashbord"
                    >
                      <MdSpaceDashboard /> Dashboard
                    </Link>
                  </li>

                  <li className="ps-3 mt-2">
                    <Link
                      to="register"
                      className={
                        location.pathname === "/admin/register" ? "active" : ""
                      }
                      id="dashbord"
                      style={{
                        background: "#e67e22",
                        paddingLeft: "10px",
                      }}
                    >
                      Register Now
                    </Link>
                  </li>

                  <Dropdown>
                    <Dropdown.Toggle
                      id="dropdown-basic"
                      className="dropdown-btn"
                    >
                      <li>
                        <HiUserGroup /> Team member
                      </li>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item as={Link} to="team">
                        New Team
                      </Dropdown.Item>
                      <Dropdown.Item as={Link} to="allteam">
                        All Teams
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>

                  <Dropdown>
                    <Dropdown.Toggle
                      id="dropdown-basic"
                      className="dropdown-btn"
                    >
                      <li>
                        <RxFontBold /> B-Type Bill
                      </li>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item as={Link} to="createbtypebill">
                        Create New Bill
                      </Dropdown.Item>
                      <DropdownItem as={Link} to="btypebills">
                        All Bills
                      </DropdownItem>
                    </Dropdown.Menu>
                  </Dropdown>

                  <Dropdown>
                    <Dropdown.Toggle
                      id="dropdown-basic"
                      className="dropdown-btn"
                    >
                      <li>
                        <MdFontDownload />
                        A-type Bill
                      </li>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item>
                        <Link to="student"> </Link>
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Create new Bill
                      </Dropdown.Item>

                      <Dropdown.Item href="#/action-3">All Bills</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>

                  <Dropdown>
                    <Dropdown.Toggle
                      id="dropdown-basic"
                      className="dropdown-btn"
                    >
                      <li>
                        <TbCoinTaka />
                        Payment
                      </li>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item>
                        <Link to="student"> </Link>
                      </Dropdown.Item>
                      <Dropdown.Item as={Link} to="/admin/createpayment">
                        Create new Payment
                      </Dropdown.Item>

                      <Dropdown.Item as={Link} to="/admin/allpayment">
                        All Payments
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>

                  <Dropdown>
                    <Dropdown.Toggle
                      id="dropdown-basic"
                      className="dropdown-btn"
                    >
                      <li>
                        <IoNotifications />
                        Notice
                      </li>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item as={Link} to="/admin/createnotice">
                        Create new notice
                      </Dropdown.Item>
                      <Dropdown.Item as={Link} to="/admin/allnotice">
                        All Notice
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>

                  <Dropdown>
                    <Dropdown.Toggle
                      id="dropdown-basic"
                      className="dropdown-btn"
                    >
                      <li>
                        <FaUser /> Users
                      </li>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item>
                        <Link to="student"> Create new User </Link>
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        <Link to=" "> All User </Link>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>

                  <Dropdown>
                    <Dropdown.Toggle
                      id="dropdown-basic"
                      className="dropdown-btn"
                    >
                      <li>
                        <MdCurrencyBitcoin />
                        Others Cost
                      </li>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item>
                        <Link to="student"> Create new cost </Link>
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        <Link to=" "> All others cost </Link>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>

                  <Dropdown>
                    <Dropdown.Toggle
                      id="dropdown-basic"
                      className="dropdown-btn"
                    >
                      <li>
                        <CiBank />
                        Bank Bill
                      </li>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item>
                        <Link to="student"> New Bank Bill </Link>
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        <Link to=" "> All Bank Bill </Link>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>

                  <li className="ps-3">
                    <Link to="" id="dashbord">
                      <HiUsers /> All A-type users
                    </Link>
                  </li>

                  <li className="ps-3">
                    <Link
                      to="allbtypeusers"
                      className={
                        location.pathname === "/admin/allbtypeusers"
                          ? "active"
                          : ""
                      }
                      id="dashbord"
                    >
                      <HiUsers /> All B-type users
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-10 col-lg-9 col-md-8 col-sm-7 dashboard">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
