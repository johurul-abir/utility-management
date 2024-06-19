import { Link, useNavigate } from "react-router-dom";
import registerbanner from "../../assets/img/register-baner.jpg";
import useForm from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { registerDonor } from "../../features/auth/authApiSlice";
//import { toast } from "react-toastify";
import { useEffect } from "react";
import createToast from "../../utils/toastify";
import { setMessageEmpty } from "../../features/auth/authSlice";

const RegisterDonor = () => {
  //dispatch
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
    role: "donor",
  });

  //form submit
  const handleSubmitForm = () => {
    dispatch(registerDonor(input));
  };

  // useEffect
  useEffect(() => {
    if (message) {
      createToast(message, "success");
      resetForm();
      navigate("/login");
      dispatch(setMessageEmpty());
    }

    if (error) {
      createToast(error);
      dispatch(setMessageEmpty());
    }
  }, [error, message, dispatch]);

  return (
    <>
      <div className="content top-space">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              {/* Register Content */}
              <div className="account-content">
                <div className="row align-items-center justify-content-center">
                  <div className="col-md-7 col-lg-6 login-left">
                    <img
                      src={registerbanner}
                      className="img-fluid"
                      alt="Doccure Register"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                  <div className="col-md-12 col-lg-6 login-right">
                    <div className="login-header">
                      <h3>
                        Donor Register
                        <Link to="/register">Are you a Patient?</Link>
                      </h3>
                    </div>
                    {/* Register Form */}
                    <div className="regForm">
                      <div className="mb-3 form-focus">
                        <input
                          type="text"
                          className="form-control floating"
                          name="name"
                          onChange={handelInputChange}
                          value={input.name}
                        />
                        <label className="focus-label">Name</label>
                      </div>
                      <div className="mb-3 form-focus">
                        <input
                          type="text"
                          className="form-control floating"
                          name="auth"
                          onChange={handelInputChange}
                          value={input.auth}
                        />
                        <label className="focus-label">Mobile or Email</label>
                      </div>
                      <div className="mb-3 form-focus">
                        <input
                          type="password"
                          className="form-control floating"
                          name="password"
                          onChange={handelInputChange}
                          value={input.password}
                        />
                        <label className="focus-label">Create Password</label>
                      </div>
                      <div className="text-end">
                        <Link className="forgot-link" to="/login">
                          Already have an account?
                        </Link>
                      </div>
                      <button
                        className="btn btn-primary w-100 btn-lg login-btn"
                        onClick={handleSubmitForm}
                      >
                        {loading ? "Loding..." : "Signup"}
                      </button>
                      <div className="login-or">
                        <span className="or-line" />
                        <span className="span-or">or</span>
                      </div>
                      <div className="row social-login">
                        <div className="col-6">
                          <a href="#" className="btn btn-facebook w-100">
                            <i className="fab fa-facebook-f me-1" /> Login
                          </a>
                        </div>
                        <div className="col-6">
                          <a href="#" className="btn btn-google w-100">
                            <i className="fab fa-google me-1" /> Login
                          </a>
                        </div>
                      </div>
                    </div>
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

export default RegisterDonor;
