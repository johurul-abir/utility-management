import {
  Card,
  CardBody,
  CardHeader,
  Container,
  Modal,
  Row,
  Table,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoEye } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  deletePayment,
  getAllAdminPayments,
} from "../../../../features/payment/paymentApiSlice";
import { RxCross2 } from "react-icons/rx";
import Swal from "sweetalert2";
import { setMessageEmpty } from "../../../../features/payment/paymentSlice";
import { toast } from "react-toastify";
import DataTable from "react-data-table-component";

const AllPayment = () => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [search, setSearch] = useState("");
  const [filterData, setFilterData] = useState();

  //single data show state
  const [singleData, setSingleData] = useState(false);

  let { adminpayments, message, error } = useSelector((state) => state.payment);

  //single modal show handle
  const handleSingleModalShow = async (id) => {
    setModal(true);
    const data = await adminpayments.find((item) => item._id == id);
    setSingleData(data);
  };

  //delete payment
  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deletePayment(id));
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  //data table compnonent

  const columns = [
    {
      name: "Date",
      selector: (row) => row.btypebills?.billdate,
      sortable: true,
    },
    {
      name: "Flate No",
      selector: (row) => row.users?.flateno,
      sortable: true,
    },
    {
      name: "Total Bill",
      selector: (row) => row.amount,
    },
    {
      name: "Total Bill",
      selector: (row) => (
        <p>
          <button
            className="btn btn-sm btn btn-warning me-1"
            onClick={() => handleSingleModalShow(row._id)}
          >
            <IoEye />
          </button>
          <button
            className="btn btn-sm btn btn-danger"
            onClick={() => handleDelete(row._id)}
          >
            <MdDelete />
          </button>
        </p>
      ),
      sortable: true,
    },
  ];

  useEffect(() => {
    if (message) {
      dispatch(getAllAdminPayments());
      dispatch(setMessageEmpty());
    }
    if (error) {
      toast.error(error);
      dispatch(setMessageEmpty());
    }
    dispatch(getAllAdminPayments());
  }, [dispatch, message, error]);

  useEffect(() => {
    const flate = adminpayments?.filter((item) => {
      return item.users?.flateno?.toLowerCase().match(search.toLowerCase());
    });
    setFilterData(flate);
  }, [search]);

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
                      <p>
                        বিল প্রদানের তারিখ:&nbsp;{" "}
                        {singleData?.btypebills?.billdate}{" "}
                      </p>
                      <p>
                        বিল পরিশোধ তারিখ :&nbsp;
                        {singleData?.createdAt}
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
                          <td> {singleData.btypebills?.gass} </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td> বিদ্যুৎ বিল</td>
                          <td>{singleData.btypebills?.electricity} </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td> পানি বিল</td>
                          <td> {singleData.btypebills?.water} </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td> অভ্যন্তরিন পৌরসুবিধা</td>
                          <td> {singleData.btypebills?.internalfacilities} </td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>নিরাপত্তা চার্জ</td>
                          <td> {singleData.btypebills?.safety} </td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td> কমন মিটার</td>
                          <td> {singleData.btypebills?.commonmitter} </td>
                        </tr>
                        <tr>
                          <td>6</td>
                          <td>জেনারেটরের চার্জ</td>
                          <td> {singleData.btypebills?.generator} </td>
                        </tr>
                        <tr>
                          <td>7</td>
                          <td> গ্যারেজ বাবদ</td>
                          <td> {singleData.btypebills?.garage} </td>
                        </tr>
                        <tr>
                          <td>8</td>
                          <td> মসজিদ স্টাফ </td>
                          <td> {singleData.btypebills?.mosjid} </td>
                        </tr>
                        <tr>
                          <td>9</td>
                          <td> স্টাফ বেতন ও সার্ভিস চার্জ </td>
                          <td> {singleData.btypebills?.staf} </td>
                        </tr>
                        <tr>
                          <td>9</td>
                          <td> বিল জমা দেওয়ার শেষ তারিখ </td>
                          <td> {singleData.btypebills?.expire} </td>
                        </tr>
                        {new Date().getTime() >
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
                              <td> </td>
                              <td>
                                <b> সর্বোমোট</b>
                              </td>
                              <td>
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

      <div className="allpayment">
        <Container>
          <Link
            to="/admin/createpayment"
            className="btn btn-sm btn btn-primary mb-3"
          >
            Create Payment
          </Link>
          <Card>
            <CardHeader>
              <h2>All Payments</h2>
            </CardHeader>
            <CardBody>
              <DataTable
                columns={columns}
                data={search ? filterData : adminpayments}
                pagination
                highlightOnHover
                subHeader
                subHeaderComponent={
                  <input
                    type="text"
                    placeholder="search flate no"
                    className="form-control w-25"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                }
              />
              {/* <Table responsive>
                <thead>
                  <tr className="align-middle text-center">
                    <th>#</th>
                    <th>Date</th>
                    <th>Flate No</th>
                    <th> Total bill </th>
                    <th> Action </th>
                  </tr>
                </thead>
                <tbody>
                  {adminpayments?.length > 0
                    ? adminpayments?.map((item, index) => {
                        return (
                          <tr className="align-middle text-center" key={index}>
                            <td> {index + 1} </td>
                            <td> {item.btypebills?.billdate} </td>
                            <td> {item.users?.flateno} </td>

                            <td>
                              {item?.amount} <FaBangladeshiTakaSign />
                            </td>

                            <td>
                              <button
                                className="btn btn-sm btn btn-warning me-1"
                                onClick={() => handleSingleModalShow(item._id)}
                              >
                                <IoEye />
                              </button>
                              <button
                                className="btn btn-sm btn btn-danger"
                                onClick={() => handleDelete(item._id)}
                              >
                                <MdDelete />
                              </button>
                            </td>
                          </tr>
                        );
                      })
                    : "Payment not Found"}
                </tbody>
              </Table> */}
            </CardBody>
          </Card>
        </Container>
      </div>
    </>
  );
};

export default AllPayment;
