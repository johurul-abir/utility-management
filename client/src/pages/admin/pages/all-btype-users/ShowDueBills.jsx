import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDueBillsForAdmin } from "../../../../features/btypebill/btypeApiSlice";
import {
  Card,
  CardBody,
  CardHeader,
  Container,
  Modal,
  Row,
  Table,
} from "react-bootstrap";
import { IoEye } from "react-icons/io5";
import { CiSaveDown1 } from "react-icons/ci";
import { createPayment } from "../../../../features/payment/paymentApiSlice";
import { RxCross2 } from "react-icons/rx";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { setMessageEmpty } from "../../../../features/payment/paymentSlice";

const ShowDueBills = () => {
  const dispatch = useDispatch();
  const [nameFlate, setNameFlate] = useState();
  const [singleBillsModal, setSingleBillsModal] = useState(false);
  const [singleData, setSingleData] = useState();

  const { userid, dueadminbills, activebills } = useSelector(
    (state) => state.btype
  );
  const { users } = useSelector((state) => state.user);
  const { message, error } = useSelector((state) => state.payment);

  //find Single bills
  const handleSingleModalShow = (id) => {
    setSingleBillsModal(true);
    const data = activebills.find((item) => item._id === id);
    setSingleData(data);
  };

  //create payments
  const handlePayClick = async (id) => {
    const bill = dueadminbills.find((item) => item._id === id);

    //check fine
    let totalBill = bill.total;

    if (new Date().getTime() > new Date(bill?.expire).getTime()) {
      totalBill = Number(bill?.total + bill?.fine);
    }

    dispatch(
      createPayment({
        amount: totalBill,
        users: userid,
        btypebills: id,
      })
    );
  };

  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch(getDueBillsForAdmin(userid));
      dispatch(setMessageEmpty());
    }
    if (error) {
      toast.error(error);
      dispatch(setMessageEmpty());
    }

    dispatch(getDueBillsForAdmin(userid));
    setNameFlate(users.find((item) => item._id === userid));
  }, [dispatch, userid, users, message, error]);

  return (
    <>
      {/* single bills Modal  */}
      <div className="single-modal">
        <Container>
          <Row>
            <Modal show={singleBillsModal} className="modal">
              <Modal.Header className="justify-content-between">
                Show Single Bill
                <button
                  style={{ border: "none", background: "none" }}
                  onClick={() => setSingleBillsModal(false)}
                >
                  <RxCross2 />
                </button>
              </Modal.Header>

              <Modal.Body>
                <div className="bill_header">
                  <div className="header_left">
                    <img
                      src="https://1.bp.blogspot.com/-ym26csnYYR8/XXnmanyREUI/AAAAAAAADxI/Bmf_fg2ny3EfA11_3wDhlpyalvEi7zhIQCLcBGAsYHQ/s320/Government%2Bof%2BBangladesh%2BLogo%2BEnglish.png"
                      alt=""
                    />
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
                      <p>মাসের নাম:&nbsp; {singleData?.billdate} </p>
                      <p>
                        তারিখ:&nbsp;
                        {singleData?.billdate}
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
                          <td> {singleData?.gass} </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td> বিদ্যুৎ বিল</td>
                          <td>{singleData?.electricity} </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td> পানি বিল</td>
                          <td> {singleData?.water} </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td> অভ্যন্তরিন পৌরসুবিধা</td>
                          <td> {singleData?.internalfacilities} </td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>নিরাপত্তা চার্জ</td>
                          <td> {singleData?.safety} </td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td> কমন মিটার</td>
                          <td> {singleData?.commonmitter} </td>
                        </tr>
                        <tr>
                          <td>6</td>
                          <td>জেনারেটরের চার্জ</td>
                          <td> {singleData?.generator} </td>
                        </tr>
                        <tr>
                          <td>7</td>
                          <td> গ্যারেজ বাবদ</td>
                          <td> {singleData?.garage} </td>
                        </tr>
                        <tr>
                          <td>8</td>
                          <td> মসজিদ স্টাফ </td>
                          <td> {singleData?.mosjid} </td>
                        </tr>
                        <tr>
                          <td>9</td>
                          <td> স্টাফ বেতন ও সার্ভিস চার্জ </td>
                          <td> {singleData?.staf} </td>
                        </tr>
                        <tr>
                          <td>9</td>
                          <td> বিল জমা দেওয়ার শেষ তারিখ </td>
                          <td> {singleData?.expire} </td>
                        </tr>
                        {new Date().getTime() >
                        new Date(singleData?.expire).getTime() ? (
                          <>
                            <tr>
                              <td className="bg-danger text-light">10</td>
                              <td className="text-light bg-danger">
                                বিলম্বিত জরিমানা ফি 10%
                              </td>
                              <td className="text-light bg-danger">
                                {singleData?.fine}
                              </td>
                            </tr>
                            <tr>
                              <td> </td>
                              <td>
                                <b> সর্বোমোট</b>
                              </td>
                              <td>
                                <b>
                                  {singleData?.total +
                                    " + " +
                                    singleData?.fine +
                                    " = " +
                                    Number(
                                      singleData?.total + singleData?.fine
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
                                {singleData?.fine}
                              </td>
                            </tr>
                            <tr>
                              <td> </td>
                              <td>
                                <b>সর্বোমোট</b>
                              </td>
                              <td>
                                <b>{singleData?.total}</b>
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

      <div className="container">
        <div className="row">
          <div className="col-xl-10">
            <Link
              to="/admin/allbtypeusers"
              className="btn btn-sm btn btn-primary"
            >
              {" "}
              Go back{" "}
            </Link>
            <Card>
              <CardHeader>
                <h3>
                  <span className="text-primary">
                    {nameFlate?.flateno + ", " + nameFlate?.name}
                  </span>
                  All Due bills
                  <span className="text-danger">
                    ({dueadminbills?.length}){" "}
                  </span>{" "}
                </h3>
              </CardHeader>
              <CardBody>
                <div className="table-responsive">
                  <table className="table table-hover table-center mb-0">
                    <thead>
                      <tr className="text-center">
                        <th>#</th>
                        <th>Submit Date</th>
                        <th style={{ color: "red" }}>Expire Date</th>
                        <th>Total</th>
                        <th>Status</th>
                        <th>Pay Now</th>
                        <th>Action</th>
                      </tr>
                    </thead>

                    <tbody>
                      {dueadminbills?.length > 0
                        ? dueadminbills?.map((item, index) => {
                            return (
                              <tr key={index} className="text-center">
                                <td> {index + 1} </td>

                                <td>
                                  <h2>{item.billdate}</h2>
                                </td>

                                <td>
                                  <h2 style={{ color: "red" }}>
                                    {item.expire}
                                  </h2>
                                </td>

                                <td>
                                  <h2> {item.total} </h2>
                                </td>
                                <td>
                                  <strong className="text-danger"> Due </strong>
                                </td>

                                <td>
                                  <button
                                    className="btn btn-sm btn btn-primary"
                                    onClick={() => handlePayClick(item._id)}
                                  >
                                    Pay Now
                                  </button>
                                </td>

                                <td>
                                  <div className="button-action">
                                    <button
                                      className="btn btn-sm btn btn-primary mx-1"
                                      onClick={() =>
                                        handleSingleModalShow(item._id)
                                      }
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
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowDueBills;
