import { useEffect, useState } from "react";
import API from "../../../../utils/api";
import { useDispatch, useSelector } from "react-redux";
import { getAllBtypeBills } from "../../../../features/btypebill/btypeApiSlice";
import { toast } from "react-toastify";
import { setMessageEmpty } from "../../../../features/btypebill/btypeBillSlice";

const CreatePayment = () => {
  const dispatch = useDispatch();
  const [alluser, setAlluser] = useState();

  const getUsers = async () => {
    const response = await API.get("/api/v1/user");
    setAlluser(response.data.users);
  };

  const { btypebills, message, error } = useSelector((state) => state.btype);

  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch(setMessageEmpty());
    }
    if (error) {
      toast.error(error);
      dispatch(setMessageEmpty());
    }
    getUsers();
    dispatch(getAllBtypeBills());
  }, [dispatch, message, error]);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-xl-8">
            <div className="card">
              <div className="card-header">
                <h2>Create Payment</h2>
              </div>
              <div className="card-body">
                <form action="" className="w-100">
                  <div
                    className="item mx-2"
                    style={{ width: "48%", display: "inline-block" }}
                  >
                    <label> Flate No </label>
                    <select name="" className="form-control">
                      <option value="">--select--</option>

                      {alluser?.map((item, index) => {
                        return (
                          <option value="" key={index}>
                            {item.flateno}
                          </option>
                        );
                      })}
                    </select>
                  </div>

                  <div
                    className="item"
                    style={{ width: "48%", display: "inline-block" }}
                  >
                    <label> Name of given payment </label>
                    <input
                      type="text"
                      className="form-control"
                      name="paymentman"
                    />
                  </div>

                  <div
                    className="item mx-2 mt-3"
                    style={{ width: "48%", display: "inline-block" }}
                  >
                    <label> Find bill </label>
                    <select name="" className="form-control">
                      <option value="">--select--</option>
                      {btypebills?.map((item, index) => {
                        return (
                          <option value="" key={index}>
                            {item.billdate}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div
                    className="item "
                    style={{ width: "48%", display: "inline-block" }}
                  >
                    <label> Total bill </label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="item mt-3">
                    <button className="btn btn-info mx-3">view bill</button>
                    <button type="submit" className="btn btn-success">
                      PayBill
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePayment;
