import { useEffect } from "react";
import { Card, CardBody, CardHeader, Container, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getRuningMonthDueUsers } from "../../../../../features/payment/paymentApiSlice";
import { IoEye } from "react-icons/io5";

const RuningMonthDueUsers = () => {
  const dispatch = useDispatch();

  const { runingdueusers } = useSelector((state) => state.payment);

  useEffect(() => {
    dispatch(getRuningMonthDueUsers());
  }, [dispatch]);

  return (
    <div className="runingdueusers">
      <Container>
        <Link to="/admin/admindashboard">
          <button className="btn btn-sm btn btn-primary mb-3">
            go dashboard
          </button>
        </Link>
        <Card>
          <CardHeader>
            <h2 className="text-danger">All B-Type runing month Due users</h2>
          </CardHeader>
          <CardBody>
            <Table responsive>
              <thead>
                <tr className="align-middle text-center">
                  <th>#</th>
                  <th>Flate No</th>
                  <th>Wonor Name</th>
                  <th>View</th>
                </tr>
              </thead>
              <tbody>
                {runingdueusers?.length > 0
                  ? runingdueusers?.map((item, index) => {
                      return (
                        <tr className="align-middle text-center" key={index}>
                          <td> {index + 1} </td>
                          <td className="text-danger"> {item?.flateno} </td>
                          <td> {item?.name} </td>
                          <td>
                            <button
                              className="btn btn-sm btn btn-warning me-1"
                              onClick={() => handleSingleModalShow(item._id)}
                            >
                              <IoEye />
                            </button>
                          </td>
                        </tr>
                      );
                    })
                  : "No Bill Found"}
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </Container>
    </div>
  );
};

export default RuningMonthDueUsers;
