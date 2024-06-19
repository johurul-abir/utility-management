import { Card, CardBody, CardHeader } from "react-bootstrap";
import "./Dashboard.scss";

const Dashboard = () => {
  return (
    <>
      <div className="dashboard-conatiner w-100">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="due-box-1">
                <div className="dashboard-item">
                  <Card>
                    <CardHeader>
                      <h5>Running Month Payed</h5>
                    </CardHeader>
                    <CardBody>
                      <div className="show-type">
                        <div className="item">
                          <h6>
                            A- <span style={{ color: "green" }}>205</span>/
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
                            B- <span style={{ color: "green" }}>205</span>/
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

                <div className="dashboard-item">
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

              <div className="due-box-2">
                <div className="dashboard-item" style={{ width: "400px" }}>
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

                <div className="dashboard-item" style={{ width: "400px" }}>
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

              <div className="complain">
                <Card>
                  <CardHeader>
                    <h4>Show Recent Complain</h4>
                  </CardHeader>
                  <CardBody>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Delectus omnis ab qui dolorum amet esse, nisi consectetur
                      provident harum id rerum dolorem dignissimos quaerat.
                      Excepturi, molestiae! Expedita, officiis tempore,
                      laboriosam magni similique enim modi dolores facilis
                      molestias alias est consectetur recusandae veniam placeat,
                      inventore culpa iusto explicabo blanditiis quod vero
                      ducimus? Commodi, inventore sed? Asperiores, perferendis.
                      Hic cum amet dolores sed alias officia minima voluptates
                      maiores nesciunt magni quia ratione ad, error corporis
                      asperiores in fuga animi quos magnam est enim repudiandae.
                      Quod consequuntur magni officia, velit sint inventore
                      explicabo quam cumque quos nostrum qui quibusdam
                      blanditiis id fuga rem.
                    </p>
                  </CardBody>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
