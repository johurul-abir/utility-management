import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDueBillsForAdmin } from "../../../../features/btypebill/btypeApiSlice";
import { Card, CardBody, CardHeader } from "react-bootstrap";
import { IoEye } from "react-icons/io5";
import { CiSaveDown1 } from "react-icons/ci";
import { createPayment } from "../../../../features/payment/paymentApiSlice";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { setMessageEmpty } from "../../../../features/payment/paymentSlice";
import SingleBill from "../../../../components/single bill/SingleBill";

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
      <SingleBill
        singleBillsModal={singleBillsModal}
        singleData={singleData}
        setSingleBillsModal={setSingleBillsModal}
      />

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
