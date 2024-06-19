import loginbanar from "../../assets/img/login-banner.jpg";
import useForm from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../features/auth/authApiSlice";
import { useEffect } from "react";
import createToast from "../../utils/toastify";
import { setMessageEmpty } from "../../features/auth/authSlice";
import { Link } from "react-router-dom";

const Login = () => {
  //usedispatch
  const dispatch = useDispatch();

  //auth selector
  const { loading, error, message } = useSelector((state) => state.auth);

  const { input, handelInputChange } = useForm({
    auth: "",
    password: "",
  });

  //handler
  const handelLogIn = (e) => {
    e.preventDefault();
    dispatch(userLogin(input));
  };

  useEffect(() => {
    if (message) {
      createToast(message, "success");
      dispatch(setMessageEmpty());
    }

    if (error) {
      createToast(error);
      dispatch(setMessageEmpty());
    }
  }, [message, error, dispatch]);

  return (
    <>
      <div className="content top-space">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              {/* Login Tab Content */}
              <div className="account-content">
                <div className="row align-items-center justify-content-center">
                  <div className="col-md-7 col-lg-6 login-left">
                    <img
                      src={loginbanar}
                      className="img-fluid"
                      alt="Doccure Login"
                    />
                  </div>
                  <div className="col-md-12 col-lg-6 login-right">
                    <div className="login-header">
                      <h3>
                        Login <span>Now</span>
                      </h3>
                    </div>
                    <form onSubmit={handelLogIn}>
                      <div className="mb-3 form-focus">
                        <input
                          type="text"
                          className="form-control floating"
                          name="auth"
                          onChange={handelInputChange}
                          value={input.name}
                        />
                        <label className="focus-label">Email or Phone</label>
                      </div>
                      <div className="mb-3 form-focus">
                        <input
                          type="password"
                          className="form-control floating"
                          name="password"
                          onChange={handelInputChange}
                          value={input.password}
                        />
                        <label className="focus-label">Password</label>
                      </div>
                      <div className="text-end">
                        <a className="forgot-link" href="forgot-password.html">
                          Forgot Password ?
                        </a>
                      </div>

                      <button
                        className="btn btn-primary w-100 btn-lg login-btn"
                        type="submit"
                      >
                        {loading ? "Loding..." : "Login"}
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
                      <div className="text-center dont-have">
                        Don’t have an account?
                        <Link to="/register"> Register </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/* /Login Tab Content */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
