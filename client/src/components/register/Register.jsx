import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useForm from "../../hooks/useForm";
import { useEffect } from "react";
import createToast from "../../utils/toastify";
import { setMessageEmpty } from "../../features/auth/authSlice";
import { registerPatient } from "../../features/auth/authApiSlice";

const Register = () => {
  //const navigae = useNavigate();

  const dispatch = useDispatch();

  //use selector
  const { loading, error, message } = useSelector((state) => state.auth);

  //navigate
  const navigate = useNavigate();

  //get form data
  const { input, handelInputChange, resetForm } = useForm({
    name: "",
    auth: "",
    password: "",
    cpass: "",
    flatetype: "",
    flateno: "",
  });

  //form submit
  const handleSubmitForm = () => {
    //check confirm password
    if (input.cpass !== input.password) {
      return createToast("password not match");
    }
    dispatch(registerPatient(input));
    resetForm();
  };

  // useEffect
  useEffect(() => {
    if (message) {
      createToast(message, "success");
      navigate("/admin/admindashboard");
      dispatch(setMessageEmpty());
    }

    if (error) {
      createToast(error);
      dispatch(setMessageEmpty());
    }
  }, [error, message, dispatch]);

  return (
    <>
      <div className="content w-100">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-10">
              {/* Register Content */}
              <div className="account-content">
                <div className="row align-items-center justify-content-center">
                  <div className="col-md-12 login-right">
                    <div className="login-header">
                      <h3>Flat Register</h3>
                    </div>
                    {/* Register Form */}
                    <form action="patient-register-step1.html">
                      <div className="mb-3 form-focus">
                        <input
                          type="text"
                          className="form-control floating"
                          name="name"
                          value={input.name}
                          onChange={handelInputChange}
                        />
                        <label className="focus-label">Name</label>
                      </div>
                      <div className="mb-3 form-focus">
                        <input
                          type="text"
                          className="form-control floating"
                          name="auth"
                          value={input.auth}
                          onChange={handelInputChange}
                        />
                        <label className="focus-label">Mobile or Email </label>
                      </div>

                      <div className="mb-3 form-focus">
                        <select
                          className="form-control"
                          name="flatetype"
                          value={input.flatetype}
                          onChange={handelInputChange}
                        >
                          <option value="">--Select flate type--</option>
                          <option value="A-type">A-type</option>
                          <option value="B-type">B-type</option>
                        </select>
                      </div>

                      <div className="mb-3 form-focus">
                        <input
                          type="text"
                          className="form-control floating"
                          name="flateno"
                          value={input.flateno}
                          onChange={handelInputChange}
                        />
                        <label className="focus-label">
                          Flate No (Example: A5-3-20)
                        </label>
                      </div>

                      <div className="mb-3 form-focus">
                        <input
                          type="password"
                          className="form-control floating"
                          name="password"
                          value={input.password}
                          onChange={handelInputChange}
                        />
                        <label className="focus-label">Create Password</label>
                      </div>

                      <div className="mb-3 form-focus">
                        <input
                          type="password"
                          className="form-control floating"
                          name="cpass"
                          value={input.cpass}
                          onChange={handelInputChange}
                        />
                        <label className="focus-label">Confirm Password</label>
                      </div>

                      <button
                        className="btn btn-primary w-100 btn-lg login-btn"
                        type="button"
                        onClick={handleSubmitForm}
                      >
                        {loading ? "Loding..." : "Signup"}
                      </button>
                    </form>
                    {/* /Register Form */}
                  </div>
                </div>
              </div>
              {/* /Register Content */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
