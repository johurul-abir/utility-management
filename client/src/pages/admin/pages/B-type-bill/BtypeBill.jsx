import { Card, CardBody, CardHeader, Container, Row } from "react-bootstrap";
import "./BtypeBill.scss";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import useForm from "../../../../hooks/useForm";
import { creatBtypeBill } from "../../../../features/btypebill/btypeApiSlice";
import { useEffect } from "react";
import { setMessageEmpty } from "../../../../features/btypebill/btypeBillSlice";

const BtypeBill = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, message, error } = useSelector((state) => state.btype);
  const { input, handelInputChange, resetForm } = useForm({
    billdate: " ",
    expire: "",
    gass: " ",
    electricity: "",
    water: "",
    internalfacilities: "",
    safety: "",
    commonmitter: "",
    generator: "",
    garage: "",
    mosjid: "",
    staf: "",
  });

  const handleFormsubmit = async (e) => {
    e.preventDefault();
    dispatch(creatBtypeBill(input));
  };

  useEffect(() => {
    if (message) {
      toast.success(message);
      resetForm();
      dispatch(setMessageEmpty());
      navigate("/admin/btypebills");
    }

    if (error) {
      toast.error(error);
      dispatch(setMessageEmpty());
    }
  }, [message, error, setMessageEmpty]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-xl-8">
            <div className="btypebill ">
              <Container>
                <Row>
                  <Link
                    to="/admin/btypebills"
                    className="btn btn-sm btn btn-warning w-25 mb-2"
                  >
                    All bills
                  </Link>
                  <Card>
                    <CardHeader>
                      <h2>Create btype bill</h2>
                    </CardHeader>
                    <CardBody>
                      <form action="">
                        <div className="item my-3 ">
                          <label> Bill Date </label>
                          <input
                            type="date"
                            name="billdate"
                            className="form-control"
                            value={input.billdate}
                            onChange={handelInputChange}
                          />
                        </div>

                        <div className="item my-3 ">
                          <label style={{ color: "red" }}> Expire Date </label>
                          <input
                            type="date"
                            name="expire"
                            className="form-control"
                            value={input.expire}
                            onChange={handelInputChange}
                          />
                        </div>

                        <div className="item my-3 ">
                          <label htmlFor="">Gass Bill</label>
                          <input
                            type="text"
                            name="gass"
                            className="form-control"
                            value={input.gass}
                            onChange={handelInputChange}
                          />
                        </div>
                        <div className="item my-3">
                          <label htmlFor="">Electricity Bill</label>
                          <input
                            type="text"
                            name="electricity"
                            className="form-control"
                            value={input.electricity}
                            onChange={handelInputChange}
                          />
                        </div>
                        <div className="item my-3">
                          <label htmlFor="">Water</label>
                          <input
                            type="text"
                            name="water"
                            className="form-control"
                            value={input.water}
                            onChange={handelInputChange}
                          />
                        </div>
                        <div className="item my-3">
                          <label htmlFor="">For Intranal Facilities</label>
                          <input
                            type="text"
                            name="internalfacilities"
                            className="form-control"
                            value={input.internalfacilities}
                            onChange={handelInputChange}
                          />
                        </div>
                        <div className="item my-3">
                          <label htmlFor="">Safety charge</label>
                          <input
                            type="text"
                            name="safety"
                            className="form-control"
                            value={input.safety}
                            onChange={handelInputChange}
                          />
                        </div>
                        <div className="item my-3">
                          <label htmlFor="">Common Metter</label>
                          <input
                            type="text"
                            name="commonmitter"
                            className="form-control"
                            value={input.commonmitter}
                            onChange={handelInputChange}
                          />
                        </div>
                        <div className="item my-3">
                          <label htmlFor="">Generator Charge</label>
                          <input
                            type="text"
                            name="generator"
                            className="form-control"
                            value={input.generator}
                            onChange={handelInputChange}
                          />
                        </div>
                        <div className="item my-3">
                          <label htmlFor="">Garage Bill </label>
                          <input
                            type="text"
                            name="garage"
                            className="form-control"
                            value={input.garage}
                            onChange={handelInputChange}
                          />
                        </div>
                        <div className="item my-3">
                          <label htmlFor="">Mosjid Bill </label>
                          <input
                            type="text"
                            name="mosjid"
                            className="form-control"
                            value={input.mosjid}
                            onChange={handelInputChange}
                          />
                        </div>
                        <div className="item my-3">
                          <label htmlFor="">Staf Salary </label>
                          <input
                            type="text"
                            name="staf"
                            className="form-control"
                            value={input.staf}
                            onChange={handelInputChange}
                          />
                        </div>

                        <div className="item my-3 w-100 text-center">
                          <button
                            className="btn btn-success w-50"
                            type="submit"
                            onClick={handleFormsubmit}
                          >
                            {loading ? "Loding..." : "Create Bill"}
                          </button>
                        </div>
                      </form>
                    </CardBody>
                  </Card>
                </Row>
              </Container>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BtypeBill;
