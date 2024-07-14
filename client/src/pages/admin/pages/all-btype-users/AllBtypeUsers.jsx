import { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CloseButton,
  Container,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
  Table,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiFillEdit } from "react-icons/ai";
import { IoEye } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../../../features/user/userApiSlice";
import API from "../../../../utils/api";
import { CiSaveDown1 } from "react-icons/ci";
import {
  getActiveBills,
  getDueBillsForAdmin,
} from "../../../../features/btypebill/btypeApiSlice";
import { RxCross2 } from "react-icons/rx";
import { createPayment } from "../../../../features/payment/paymentApiSlice";
import { toast } from "react-toastify";
import { setMessageEmpty } from "../../../../features/btypebill/btypeBillSlice";

const AllBtypeUsers = () => {
  const dispatch = useDispatch();

  //use states here
  const [seeBillModal, setSeeBillModal] = useState(false);
  const [paid, setPaid] = useState();
  const [singleBillsModal, setSingleBillsModal] = useState(false);
  const [singleData, setSingleData] = useState();
  const [dueBillModal, setDueBillModal] = useState(false);
  const [userId, setUserId] = useState();

  //use selectors here
  const { users } = useSelector((state) => state.user);
  const { activebills } = useSelector((state) => state.btype);

  const { dueadminbills } = useSelector((state) => state.btype);
  const { message, error } = useSelector((state) => state.payment);

  //find Single bills
  const handleSingleModalShow = (id) => {
    setSingleBillsModal(true);

    const data = activebills.find((item) => item._id === id);
    setSingleData(data);
  };

  //get all due bills
  const handleUserDueBills = async (id) => {
    setDueBillModal(true);
    dispatch(getDueBillsForAdmin(id));
    setUserId(id);
  };

  //get all bill
  const handleAllBills = async (id) => {
    setSeeBillModal(true);
    const allPaidBills = await API.get(
      `/api/v1/btypebill/seeuserpaidbills/${id}`
    );
    setPaid(allPaidBills.data.userpaidbills);
  };

  const handlePayClick = async (id) => {
    const bill = dueadminbills.find((item) => item._id === id);

    dispatch(
      createPayment({
        amount: bill.total,
        users: userId,
        btypebills: id,
      })
    );
  };

  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch(getDueBillsForAdmin(userId));
      dispatch(setMessageEmpty());
    }
    if (error) {
      toast.error(error);
      dispatch(setMessageEmpty());
    }
    dispatch(getAllUsers());
    dispatch(getActiveBills());
  }, [dispatch, message, error, userId]);

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
                        <tr>
                          <td>10</td>
                          <td> বিলম্বিত জরিমানা ফি </td>
                          <td> 10% </td>
                        </tr>
                        <tr>
                          <td> </td>
                          <td>সর্বোমোট</td>
                          <td> {singleData?.total} </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </div>
              </Modal.Body>
            </Modal>
          </Row>
        </Container>
      </div>
      {/* see all bills Modal */}
      <div className="container">
        <div className="row">
          <div className="col-xl-10">
            <Modal show={seeBillModal}>
              <ModalHeader>
                <h2>User All bills</h2>
                <CloseButton onClick={() => setSeeBillModal(false)} />
              </ModalHeader>
              <ModalBody>
                <div className="table-responsive">
                  <table className="table table-hover table-center mb-0">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Submit Date</th>
                        <th style={{ color: "red" }}>Expire Date</th>
                        <th>Total</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>

                    <tbody>
                      {activebills.length > 0
                        ? activebills.map((item, index) => {
                            return (
                              <tr key={index}>
                                <td> {index + 1} </td>

                                <td>
                                  <h2>{item.billdate}</h2>
                                </td>

                                <td>
                                  <h2 style={{ color: "red" }}>
                                    {" "}
                                    {item.expire}{" "}
                                  </h2>
                                </td>

                                <td>
                                  <h2> {item.total} </h2>
                                </td>
                                <td>
                                  <Link
                                    className={
                                      paid?.find((x) => x._id === item?._id)
                                        ? "btn btn-sm btn btn-success"
                                        : "btn btn-sm btn btn-danger"
                                    }
                                  >
                                    {paid?.find((x) => x._id === item?._id)
                                      ? "Paid"
                                      : "Due"}
                                  </Link>
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
              </ModalBody>
            </Modal>
          </div>
        </div>
      </div>

      {/* see all Duebills Modal */}
      <div className="container">
        <div className="row">
          <div className="col-xl-10">
            <Modal show={dueBillModal}>
              <ModalHeader>
                <h2>
                  User All Due bills{" "}
                  <span className="text-danger">
                    {" "}
                    ({dueadminbills?.length}){" "}
                  </span>{" "}
                </h2>
                <CloseButton onClick={() => setDueBillModal(false)} />
              </ModalHeader>
              <ModalBody>
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
              </ModalBody>
            </Modal>
          </div>
        </div>
      </div>

      <div className="allbills">
        <Container>
          <Link
            to="/admin/register"
            className="btn btn-sm btn btn-primary mb-3"
          >
            Create new User
          </Link>
          <Card>
            <CardHeader>
              <h2>All B-type Users</h2>
            </CardHeader>
            <CardBody>
              <Table responsive>
                <thead>
                  <tr className="align-middle text-center">
                    <th>#</th>
                    <th>Name</th>
                    <th>Flate No</th>
                    <th> Due Months </th>
                    <th> All Bills </th>
                    <th>Phone</th>
                    <th>Gmail</th>
                    <th>Action</th>
                    <th>Send Notice</th>
                  </tr>
                </thead>
                <tbody>
                  {users?.length > 0
                    ? users.map((item, index) => {
                        return (
                          <tr className="align-middle text-center" key={index}>
                            <td> {index + 1} </td>
                            <td> {item.name} </td>
                            <td> {item.flateno} </td>
                            <td>
                              <button
                                className={
                                  item.duebillofmonth
                                    ? "btn btn-sm btn btn-danger"
                                    : "btn btn-sm btn btn-success"
                                }
                                onClick={() => handleUserDueBills(item._id)}
                              >
                                See Duebills
                              </button>
                            </td>
                            <td>
                              <button
                                className="btn btn-sm btn btn-success"
                                onClick={() => handleAllBills(item._id)}
                              >
                                See Bills
                              </button>
                            </td>
                            <td> {item.phone ?? "No Phone"} </td>
                            <td> {item.email} </td>
                            <td>
                              <button className="btn btn-sm btn btn-info me-1">
                                <AiFillEdit />
                              </button>
                              <button
                                className="btn btn-sm btn btn-warning me-1"
                                // onClick={() => handleSingleModalShow(item._id)}
                              >
                                <IoEye />
                              </button>
                              <button
                                className="btn btn-sm btn btn-danger"
                                // onClick={() => handleDelete(item.id)}
                              >
                                <MdDelete />
                              </button>
                            </td>
                            <td>
                              <button className="btn btn-sm btn btn-info">
                                Send Notice <IoIosSend />
                              </button>
                            </td>
                          </tr>
                        );
                      })
                    : "User not Found"}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Container>
      </div>
    </>
  );
};

export default AllBtypeUsers;
