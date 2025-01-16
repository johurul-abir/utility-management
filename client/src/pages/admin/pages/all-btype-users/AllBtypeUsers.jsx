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
import { getActiveBills } from "../../../../features/btypebill/btypeApiSlice";
import { setId } from "../../../../features/btypebill/btypeBillSlice";
import SingleBill from "../../../../components/single bill/SingleBill";

const AllBtypeUsers = () => {
  const dispatch = useDispatch();

  //use states here
  const [seeBillModal, setSeeBillModal] = useState(false);
  const [paid, setPaid] = useState();
  const [singleBillsModal, setSingleBillsModal] = useState(false);
  const [singleData, setSingleData] = useState();
  const [nameFlate, setNameFlate] = useState();

  //use selectors here
  const { users } = useSelector((state) => state.user);

  const { activebills } = useSelector((state) => state.btype);

  //find Single bills
  const handleSingleModalShow = (id) => {
    setSingleBillsModal(true);
    const data = activebills.find((item) => item._id === id);
    setSingleData(data);
  };

  //get all due bills
  const handleUserDueBills = async (id) => {
    dispatch(setId(id));
  };

  //get all bill
  const handleAllBills = async (id) => {
    setSeeBillModal(true);

    setNameFlate(users.find((item) => item._id === id));

    const allPaidBills = await API.get(
      `/api/v1/btypebill/seeuserpaidbills/${id}`
    );

    setPaid(allPaidBills?.data?.userpaidbills);
  };

  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getActiveBills());
  }, [dispatch]);

  return (
    <>
      {/* see all bills Modal */}
      <div className="container">
        <div className="row">
          <div className="col-xl-10">
            <Modal show={seeBillModal}>
              <ModalHeader>
                <h3>
                  <span className="text-primary">
                    {" "}
                    {nameFlate?.flateno + ", " + nameFlate?.name}{" "}
                  </span>{" "}
                  All bills
                </h3>
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

      <SingleBill
        singleBillsModal={singleBillsModal}
        singleData={singleData}
        setSingleBillsModal={setSingleBillsModal}
      />

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
                            <td> {item?.name} </td>
                            <td> {item?.flateno} </td>
                            <td>
                              <Link to="/admin/showduebills">
                                <button
                                  className="btn btn-sm btn btn-danger"
                                  onClick={() => handleUserDueBills(item?._id)}
                                >
                                  Show Duebills
                                </button>
                              </Link>
                            </td>
                            <td>
                              <button
                                className="btn btn-sm btn btn-success"
                                onClick={() => handleAllBills(item?._id)}
                              >
                                Show Bills
                              </button>
                            </td>
                            <td> {item?.phone ?? "No Phone"} </td>
                            <td> {item?.email} </td>
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
