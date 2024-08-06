import { useEffect } from "react";
import { Card, CardBody, CardHeader, Container, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getRuningMonthPaidUsers } from "../../../../../features/payment/paymentApiSlice";
import { IoEye } from "react-icons/io5";

const RuningMonthPaidUsers = () => {
  const dispatch = useDispatch();

  const { runingpaidusers } = useSelector((state) => state.payment);

  useEffect(() => {
    dispatch(getRuningMonthPaidUsers());
  }, [dispatch]);
  return (
    <div className="runingpaidusers">
      <Container>
        <Link to="/admin/admindashboard">
          <button className="btn btn-sm btn btn-primary mb-3">
            go dashboard
          </button>
        </Link>
        <Card>
          <CardHeader>
            <h2 className="text-success">All B-Type runing month paid users</h2>
          </CardHeader>
          <CardBody>
            <Table responsive>
              <thead>
                <tr className="align-middle text-center">
                  <th>#</th>
                  <th>Submit Date</th>
                  <th>Flate No</th>
                  <th>Wonor Name</th>
                  <th>Total </th>
                  <th>View</th>
                </tr>
              </thead>
              <tbody>
                {runingpaidusers?.length > 0
                  ? runingpaidusers?.map((item, index) => {
                      return (
                        <tr className="align-middle text-center" key={index}>
                          <td> {index + 1} </td>
                          <td>
                            {" "}
                            {new Date().getDate(item?.createdAt) +
                              " / " +
                              new Date().getMonth(item?.createdAt) +
                              " / " +
                              new Date().getFullYear(item?.createdAt)}{" "}
                          </td>

                          <td
                            className="text-success "
                            style={{ fontWeight: "700" }}
                          >
                            {item?.users?.flateno}{" "}
                          </td>
                          <td> {item?.users?.name} </td>
                          <td> {item?.amount} </td>
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

export default RuningMonthPaidUsers;
