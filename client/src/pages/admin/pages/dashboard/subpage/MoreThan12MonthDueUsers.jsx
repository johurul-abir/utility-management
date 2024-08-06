import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, CardBody, CardHeader, Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IoEye } from "react-icons/io5";
import { moreThen12MonthDueUsers } from "../../../../../features/payment/paymentApiSlice";

const MoreThan12MonthDueUsers = () => {
  const dispatch = useDispatch();

  const { morethan12monthdueusers } = useSelector((state) => state.payment);

  useEffect(() => {
    dispatch(moreThen12MonthDueUsers());
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
                {morethan12monthdueusers?.length > 0
                  ? morethan12monthdueusers?.map((item, index) => {
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

export default MoreThan12MonthDueUsers;
