import { Link } from "react-router-dom";
import { IoEye } from "react-icons/io5";
import { CiSaveDown1 } from "react-icons/ci";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Modal, Row, Table } from "react-bootstrap";
import { RxCross2 } from "react-icons/rx";
import { getAllPayments } from "../../../../features/payment/paymentApiSlice";
import govtLogo from "../../../../assets/img/govt.png";

const AllPaidBills = () => {
  const dispatch = useDispatch();

  const { payments } = useSelector((state) => state.payment);

  //single Modal show hide State
  const [modal, setModal] = useState(false);

  //single data show state
  const [singleData, setSingleData] = useState();

  //single modal show handle
  const handleSingleModalShow = async (id) => {
    setModal(true);
    const data = await payments.find((item) => item._id == id);
    setSingleData(data);
  };

  useEffect(() => {
    dispatch(getAllPayments());
  }, [dispatch]);

  return (
    <>
      {/* single bill */}
      <div className="single-modal">
        <Container>
          <Row>
            <Modal show={modal} className="modal">
              <Modal.Header className="justify-content-between">
                Show Single Bill
                <button
                  style={{ border: "none", background: "none" }}
                  onClick={() => setModal(false)}
                >
                  <RxCross2 />
                </button>
              </Modal.Header>

              <Modal.Body>
                <div className="bill_header">
                  <div className="header_left">
                    <img src={govtLogo} alt="" />
                  </div>
                  <div className="header_center">
                    <h3>গনপ্রজাতন্ত্রী বাংলাদেশ সরকার</h3>
                    <h2>ভাষানটেক পুরর্বাসন প্রকল্প</h2>
                    <h6>প্রকল্প পরিচালক এর কার্যালয়</h6>
                    <h6>ভূমি মন্ত্রণালয়(সাইট অফিস)</h6>
                    <p> ৩নং পশ্চিম ধামালকোট, মিরপুর-১৫, ঢাকা-১২০৬ </p>
                    <h5>ইউটিলিটি বিল আদায়ের রশিদ </h5>
                  </div>
                  <div className="header_right">
                    <h3>রশিদ নং </h3>
                  </div>
                </div>
                <div className="bill_body">
                  <div className="top-part">
                    <div className="bank-acc">
                      <p>ট্রাষ্ট-ব্যাংক-কাফরুল শাখা A/C 0041-020003058</p>
                    </div>
                    <div className="date">
                      <p>
                        মাসের নাম:&nbsp; {singleData?.btypebills?.billdate}{" "}
                      </p>
                      <p>
                        তারিখ:&nbsp;
                        {singleData?.btypebills?.billdate}
                      </p>
                    </div>
                  </div>
                  <div className="bill_table">
                    <Table striped bordered hover>
                      <thead>
                        <tr>
                          <th>ক্রমিক নং </th>
                          <th> বিলের বিবরন </th>
                          <th>টাকার পরিমান</th>
                        </tr>
                      </thead>
                      <tbody className="align-middle">
                        <tr>
                          <td>1</td>
                          <td> গ্যাস বিল</td>
                          <td> {singleData?.btypebills?.gass} </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td> বিদ্যুৎ বিল</td>
                          <td>{singleData?.btypebills?.electricity} </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td> পানি বিল</td>
                          <td> {singleData?.btypebills?.water} </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td> অভ্যন্তরিন পৌরসুবিধা</td>
                          <td>
                            {" "}
                            {singleData?.btypebills?.internalfacilities}{" "}
                          </td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>নিরাপত্তা চার্জ</td>
                          <td> {singleData?.btypebills?.safety} </td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td> কমন মিটার</td>
                          <td> {singleData?.btypebills?.commonmitter} </td>
                        </tr>
                        <tr>
                          <td>6</td>
                          <td>জেনারেটরের চার্জ</td>
                          <td> {singleData?.btypebills?.generator} </td>
                        </tr>
                        <tr>
                          <td>7</td>
                          <td> গ্যারেজ বাবদ</td>
                          <td> {singleData?.btypebills?.garage} </td>
                        </tr>
                        <tr>
                          <td>8</td>
                          <td> মসজিদ স্টাফ </td>
                          <td> {singleData?.btypebills?.mosjid} </td>
                        </tr>
                        <tr>
                          <td>9</td>
                          <td> স্টাফ বেতন ও সার্ভিস চার্জ </td>
                          <td> {singleData?.btypebills?.staf} </td>
                        </tr>
                        <tr>
                          <td>9</td>
                          <td> বিল জমা দেওয়ার শেষ তারিখ </td>
                          <td> {singleData?.btypebills?.expire} </td>
                        </tr>
                        {new Date(singleData?.createdAt).getTime() >
                        new Date(singleData?.btypebills?.expire).getTime() ? (
                          <>
                            <tr>
                              <td className="bg-danger text-light">10</td>
                              <td className="text-light bg-danger">
                                বিলম্বিত জরিমানা ফি 10%
                              </td>
                              <td className="text-light bg-danger">
                                {singleData?.btypebills?.fine}
                              </td>
                            </tr>
                            <tr>
                              <td className="bg-primary"> </td>
                              <td className="bg-primary">
                                <b> সর্বোমোট</b>
                              </td>
                              <td className="bg-primary">
                                <b>
                                  {singleData?.btypebills?.total +
                                    " + " +
                                    singleData?.btypebills?.fine +
                                    " = " +
                                    Number(
                                      singleData?.btypebills?.total +
                                        singleData?.btypebills?.fine
                                    )}
                                </b>
                              </td>
                            </tr>
                          </>
                        ) : (
                          <>
                            <tr>
                              <td className="text-danger">10</td>
                              <td className="text-danger">
                                বিলম্বিত জরিমানা ফি 10%
                              </td>
                              <td className="text-danger">
                                {singleData?.btypebills?.fine}
                              </td>
                            </tr>
                            <tr>
                              <td> </td>
                              <td>
                                <b>সর্বোমোট</b>
                              </td>
                              <td>
                                <b>{singleData?.btypebills?.total}</b>
                              </td>
                            </tr>
                          </>
                        )}
                      </tbody>
                    </Table>
                  </div>
                </div>
              </Modal.Body>
            </Modal>
          </Row>
        </Container>
      </div>

      <div className="card card-table mb-0">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover table-center mb-0">
              <thead>
                <tr className="text-center">
                  <th>#</th>
                  <th>Bill Date</th>
                  <th>Paid Date</th>
                  <th>Total</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {payments?.length > 0
                  ? payments?.map((item, index) => {
                      return (
                        <tr key={index} className="text-center">
                          <td> {index + 1} </td>

                          <td>
                            <h2> {item.btypebills?.billdate} </h2>
                          </td>

                          <td>
                            <h2>
                              {`${new Date().getFullYear(
                                item?.createdAt
                              )}-${new Date().getMonth(
                                item?.createdAt
                              )}-${new Date().getDate(item.createdAt)}`}
                            </h2>
                          </td>

                          <td>
                            <h2> {item?.amount} </h2>
                          </td>

                          <td>
                            <Link className="btn btn-sm btn btn-success">
                              Paied
                            </Link>
                          </td>

                          <td>
                            <div className="button-action">
                              <button
                                className="btn btn-sm btn btn-primary mx-1"
                                onClick={() => handleSingleModalShow(item._id)}
                              >
                                <IoEye />
                              </button>
                              <button className="btn btn-sm btn btn-info">
                                <CiSaveDown1 />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  : "Bill not found"}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllPaidBills;
