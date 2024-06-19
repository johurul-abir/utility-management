import { useEffect } from "react";
import { Card, CardBody, CardHeader, Container, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllUsers } from "../../../../features/auth/authApiSlice";
import { AiFillEdit } from "react-icons/ai";
import { IoEye } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { IoIosSend } from "react-icons/io";

const AllBtypeUsers = () => {
  const dispatch = useDispatch();
  const { auths } = useSelector((state) => state.auth);

  //get all bills of user
  const handleAllBills = (id) => {
    alert(id);
  };

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <>
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
                  {auths?.length > 0
                    ? auths.map((item, index) => {
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
                              >
                                {item.duebillofmonth ? "See Due(2)" : "No due"}
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
