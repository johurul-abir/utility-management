import {
  Card,
  CardBody,
  CardHeader,
  CloseButton,
  Modal,
  ModalBody,
  ModalHeader,
} from "react-bootstrap";
import "./Dashboard.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllUsers } from "../../../../features/user/userApiSlice";
import { Link } from "react-router-dom";
import API, { baseURL } from "../../../../utils/api";
import { IoEye } from "react-icons/io5";
import {
  getLast12MonthDueUsers,
  getRuningMonthDueUsers,
  getRuningMonthPaidUsers,
  moreThen12MonthDueUsers,
  moreThen5MonthDueUsers,
} from "../../../../features/payment/paymentApiSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const [conplain, setComplain] = useState();

  const [noticeModal, setNoticeModal] = useState(false);
  const [singleComplain, setSingleComplain] = useState();

  const { users } = useSelector((state) => state.user);

  const {
    runingpaidusers,
    runingdueusers,
    last12monthdueusers,
    morethan5monthdueusers,
    morethan12monthdueusers,
  } = useSelector((state) => state.payment);

  //all complain here
  const getAllComplain = async () => {
    const data = await API.get("/api/v1/complain");
    setComplain(data.data.complain);
  };

  //get single complain here
  const singleComplainhanler = async (id) => {
    const response = await API.get(`/api/v1/complain/${id}`);
    setSingleComplain(response.data.singleComplain);
    setNoticeModal(true);
  };

  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getRuningMonthPaidUsers());
    dispatch(getRuningMonthDueUsers());
    getAllComplain();
    dispatch(getLast12MonthDueUsers());
    dispatch(moreThen5MonthDueUsers());
    dispatch(moreThen12MonthDueUsers());
  }, [dispatch]);

  return (
    <>
      <div className="dashboard-conatiner w-100">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-12  ">
              <div className="due-box-1">
                <div className="row">
                  <div className="col-xl-4 col-lg-4 col-md-12">
                    <div className="dashboard-item w-100">
                      <Card>
                        <CardHeader>
                          <h5>Running Month Payed</h5>
                        </CardHeader>
                        <CardBody>
                          <div className="show-type">
                            <div className="item">
                              <h6>
                                A- <span style={{ color: "green" }}>205</span>/
                                <span> 500 </span>
                              </h6>
                              <a href="">
                                <button className="btn btn-sm btn btn-success">
                                  show details
                                </button>
                              </a>
                            </div>
                            <div className="item">
                              <h6>
                                B-
                                <span style={{ color: "green" }}>
                                  {runingpaidusers?.length}
                                </span>
                                / <span>{users?.length}</span>
                              </h6>
                              <Link to="/admin/runingpaiduser">
                                <button className="btn btn-sm btn btn-success">
                                  show details
                                </button>
                              </Link>
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    </div>
                  </div>

                  <div className="col-xl-4 col-lg-4 col-md-12">
                    <div className="dashboard-item w-100">
                      <Card>
                        <CardHeader>
                          <h5>Running Month Due</h5>
                        </CardHeader>
                        <CardBody>
                          <div className="show-type">
                            <div className="item">
                              <h6>
                                A- <span style={{ color: "red" }}>205</span>/
                                <span>500</span>
                              </h6>
                              <a href="">
                                <button className="btn btn-sm btn btn-danger">
                                  show details
                                </button>
                              </a>
                            </div>
                            <div className="item">
                              <h6>
                                B-{" "}
                                <span style={{ color: "red" }}>
                                  {" "}
                                  {runingdueusers?.length}{" "}
                                </span>
                                /<span> {users?.length} </span>
                              </h6>
                              <Link to="/admin/runingdueuser">
                                <button className="btn btn-sm btn btn-danger">
                                  show details
                                </button>
                              </Link>
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    </div>
                  </div>

                  <div className="col-xl-4 col-lg-4 col-md-12">
                    <div className="dashboard-item w-100">
                      <Card>
                        <CardHeader>
                          <h5>Mote then 2-Month Due From last 4 Month</h5>
                        </CardHeader>
                        <CardBody>
                          <div className="show-type">
                            <div className="item">
                              <h6>
                                A- <span style={{ color: "red" }}>205</span>/
                                <span>500</span>
                              </h6>
                              <a href="">
                                <button className="btn btn-sm btn btn-danger">
                                  show details
                                </button>
                              </a>
                            </div>
                            <div className="item">
                              <h6>
                                B-{" "}
                                <span style={{ color: "red" }}>
                                  {last12monthdueusers?.length}{" "}
                                </span>
                                /<span> {users?.length}</span>
                              </h6>
                              <Link to="/admin/last12monthdueusers">
                                <button className="btn btn-sm btn btn-danger">
                                  show details
                                </button>
                              </Link>
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>

              <div className="due-box-2">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-12">
                    <div className="dashboard-item w-100">
                      <Card>
                        <CardHeader>
                          <h5>More Than 6-Month Due from All bills </h5>
                        </CardHeader>
                        <CardBody>
                          <div className="show-type">
                            <div className="item">
                              <h6>
                                A- <span style={{ color: "Red" }}>205</span>/
                                <span>500</span>
                              </h6>
                              <div className="btn-box">
                                <Link to="">
                                  <button className="btn btn-sm btn btn-info">
                                    show details
                                  </button>
                                </Link>
                                <a href="" className="ms-2">
                                  <button className="btn btn-sm btn btn-warning">
                                    Sent Notice
                                  </button>
                                </a>
                              </div>
                            </div>
                            <div className="item">
                              <h6>
                                B-{" "}
                                <span style={{ color: "Red" }}>
                                  {morethan5monthdueusers?.length}
                                </span>
                                /<span>500</span>
                              </h6>
                              <div className="btn-box">
                                <Link to="/admin/morethan5monthusers">
                                  <button className="btn btn-sm btn btn-info">
                                    show details
                                  </button>
                                </Link>
                                <a href="" className="ms-2">
                                  <button className="btn btn-sm btn btn-warning">
                                    Sent Notice
                                  </button>
                                </a>
                              </div>
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-12">
                    <div className="dashboard-item w-100">
                      <Card>
                        <CardHeader>
                          <h5>More Than 1 year due</h5>
                        </CardHeader>
                        <CardBody>
                          <div className="show-type">
                            <div className="item">
                              <h6>
                                A- <span style={{ color: "Red" }}>205</span>/
                                <span>500</span>
                              </h6>
                              <div className="btn-box">
                                <a href="">
                                  <button className="btn btn-sm btn btn-info">
                                    show details
                                  </button>
                                </a>
                                <a href="" className="ms-2">
                                  <button className="btn btn-sm btn btn-warning">
                                    Sent Notice
                                  </button>
                                </a>
                              </div>
                            </div>
                            <div className="item">
                              <h6>
                                B-
                                <span style={{ color: "Red" }}>
                                  {morethan12monthdueusers?.length}
                                </span>
                                /<span>500</span>
                              </h6>
                              <div className="btn-box">
                                <Link to="/admin/morethan12monthusers">
                                  <button className="btn btn-sm btn btn-info">
                                    show details
                                  </button>
                                </Link>
                                <a href="" className="ms-2">
                                  <button className="btn btn-sm btn btn-warning">
                                    Sent Notice
                                  </button>
                                </a>
                              </div>
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <div className="complain w-100">
                  <Modal show={noticeModal}>
                    <ModalHeader>
                      <h2>Single Complain</h2>
                      <CloseButton onClick={() => setNoticeModal(false)} />
                    </ModalHeader>
                    <ModalBody>
                      <h3>{singleComplain?.title}</h3>
                      <br />
                      <img
                        src={baseURL + "/complain/" + singleComplain?.photo}
                        alt=""
                        className="w-100"
                      />
                      <p>{singleComplain?.content}</p>
                    </ModalBody>
                  </Modal>

                  <div className="container">
                    <div className="row">
                      <div className="col-xl-12">
                        <div className="card">
                          <div className="card-header">
                            <h2>All Complain</h2>
                          </div>
                          <div className="card-body">
                            <table
                              className="table table-stripe responsive"
                              border="1px"
                            >
                              <thead>
                                <tr className="align-middle text-center">
                                  <th>#</th>
                                  <th>C.Date</th>

                                  <th>Flat No</th>
                                  <th>User Name</th>
                                  <th>Photo</th>
                                  <th>Title</th>
                                  <th>Content</th>
                                  <th>Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                {conplain?.length > 0
                                  ? conplain?.map((item, index) => {
                                      return (
                                        <tr
                                          className="align-middle text-center"
                                          key={index}
                                        >
                                          <td> {index + 1} </td>

                                          <td>
                                            <h6>{item?.createdAt}</h6>
                                          </td>

                                          <td>
                                            <h6>{item?.user_id?.flateno}</h6>
                                          </td>

                                          <td>
                                            <h6>{item?.user_id?.name}</h6>
                                          </td>

                                          <td>
                                            {item?.photo ? (
                                              <img
                                                src={
                                                  baseURL +
                                                  "/complain/" +
                                                  item?.photo
                                                }
                                                style={{
                                                  width: "60px",
                                                  height: "40px",
                                                  objectFit: "cover",
                                                  borderRadius: "5px",
                                                }}
                                              />
                                            ) : undefined}
                                          </td>

                                          <td>
                                            <h6>{item.title}</h6>
                                          </td>
                                          <td>
                                            <p>
                                              {item?.content
                                                ?.split(" ")
                                                .slice(0, 8)
                                                .join(" ")}
                                            </p>
                                          </td>
                                          <td style={{ width: "60px" }}>
                                            <button
                                              className="btn btn-sm btn btn-warning me-1"
                                              onClick={() =>
                                                singleComplainhanler(item._id)
                                              }
                                            >
                                              <IoEye />
                                            </button>
                                          </td>
                                        </tr>
                                      );
                                    })
                                  : "No Notice found"}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
