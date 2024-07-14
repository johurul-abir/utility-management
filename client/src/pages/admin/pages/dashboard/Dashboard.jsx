import { Card, CardBody, CardHeader } from "react-bootstrap";
import "./Dashboard.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllUsers } from "../../../../features/user/userApiSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <>
      <div className="dashboard-conatiner w-100">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-12  ">
              <div className="due-box-1">
                <div className="row">
                  <div className="col-xl-5 col-lg-6 col-md-12">
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
                                <button className="btn btn-sm btn btn-primary">
                                  show details
                                </button>
                              </a>
                            </div>
                            <div className="item">
                              <h6>
                                B- <span style={{ color: "green" }}>205</span>/
                                <span>{users?.length}</span>
                              </h6>
                              <a href="">
                                <button className="btn btn-sm btn btn-primary">
                                  show details
                                </button>
                              </a>
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-6 col-md-12">
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
                                <button className="btn btn-sm btn btn-primary">
                                  show details
                                </button>
                              </a>
                            </div>
                            <div className="item">
                              <h6>
                                B- <span style={{ color: "red" }}>205</span>/
                                <span>500</span>
                              </h6>
                              <a href="">
                                <button className="btn btn-sm btn btn-primary">
                                  show details
                                </button>
                              </a>
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
                  <div className="col-xl-5 col-lg-6 col-md-12">
                    <div className="dashboard-item w-100">
                      <Card>
                        <CardHeader>
                          <h5>More Than 3-Month Due</h5>
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
                                  <button className="btn btn-sm btn btn-primary">
                                    show details
                                  </button>
                                </a>
                                <a href="" className="ms-2">
                                  <button className="btn btn-sm btn btn-danger">
                                    Sent Notice
                                  </button>
                                </a>
                              </div>
                            </div>
                            <div className="item">
                              <h6>
                                B- <span style={{ color: "Red" }}>205</span>/
                                <span>500</span>
                              </h6>
                              <div className="btn-box">
                                <a href="">
                                  <button className="btn btn-sm btn btn-primary">
                                    show details
                                  </button>
                                </a>
                                <a href="" className="ms-2">
                                  <button className="btn btn-sm btn btn-danger">
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

                  <div className="col-xl-5 col-lg-6 col-md-12">
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
                                  <button className="btn btn-sm btn btn-primary">
                                    show details
                                  </button>
                                </a>
                                <a href="" className="ms-2">
                                  <button className="btn btn-sm btn btn-danger">
                                    Sent Notice
                                  </button>
                                </a>
                              </div>
                            </div>
                            <div className="item">
                              <h6>
                                B- <span style={{ color: "Red" }}>205</span>/
                                <span>500</span>
                              </h6>
                              <div className="btn-box">
                                <a href="">
                                  <button className="btn btn-sm btn btn-primary">
                                    show details
                                  </button>
                                </a>
                                <a href="" className="ms-2">
                                  <button className="btn btn-sm btn btn-danger">
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

              <div className="col-xl-10 col-lg-12 col-md-12 col-sm-12">
                <div className="complain w-100">
                  <Card>
                    <CardHeader>
                      <h4>Show Recent Complain</h4>
                    </CardHeader>
                    <CardBody>
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Delectus omnis ab qui dolorum amet esse, nisi
                        consectetur provident harum id rerum dolorem dignissimos
                        quaerat. Excepturi, molestiae! Expedita, officiis
                        tempore, laboriosam magni similique enim modi dolores
                        facilis molestias alias est consectetur recusandae
                        veniam placeat, inventore culpa iusto explicabo
                        blanditiis quod vero ducimus? Commodi, inventore sed?
                        Asperiores, perferendis. Hic cum amet dolores sed alias
                        officia minima voluptates maiores nesciunt magni quia
                        ratione ad, error corporis asperiores in fuga animi quos
                        magnam est enim repudiandae. Quod consequuntur magni
                        officia, velit sint inventore explicabo quam cumque quos
                        nostrum qui quibusdam blanditiis id fuga rem.
                      </p>
                    </CardBody>
                  </Card>
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
