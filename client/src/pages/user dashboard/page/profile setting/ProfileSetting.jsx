import { useEffect } from "react";
import { FaUpload } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { setMessageEmpty } from "../../../../features/auth/authSlice";
import { getLoggedInUser } from "../../../../features/auth/authApiSlice";
import useForm from "../../../../hooks/useForm";
import avaterImg from "../../../../assets/img/avater.png";
import "./profileSetting.scss";

const ProfileSetting = () => {
  const dispatch = useDispatch();

  const { auths, message, error } = useSelector((state) => state.auth);

  const handleProfilePhotoChange = (e) => {
    const profilePhoto = e.target.files[0];

    const form_data = new FormData();

    form_data.append("studentphoto", profilePhoto);

    if (
      profilePhoto.type == "image/jpg" ||
      profilePhoto.type == "image/jpeg" ||
      profilePhoto.type == "image/png"
    ) {
      if (profilePhoto.size >= 400000) {
        return toast.error("Image size is Max");
      }

      return dispatch(changeProfileImg(form_data));
    } else {
      return toast.error("Allowed JPG, JPEG or PNG");
    }
  };

  const { input, handleInputChange } = useForm({
    lastname: auths.lastname,
    fathers_name: auths.fathers_name,
    dob: auths.dob,
    gender: auths.gender,
    blood_group: auths.blood_group,
    location: auths.location,
    city: auths.city,
    division: auths.division,
    zipcode: auths.zipcode,
    country: auths.country,
  });

  //update profile
  const hanldeProfileUpdate = (e) => {
    e.preventDefault();
    dispatch(updateAuthInfo(input));
  };

  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch(getLoggedInUser());
      dispatch(setMessageEmpty());
    }
    if (error) {
      toast.error(error);
      dispatch(setMessageEmpty());
    }
  }, [dispatch, message, error]);

  return (
    <>
      <div className="col-md-7 col-lg-8 col-xl-9">
        <div className="card">
          <div className="card-body">
            {/* Profile Settings Form */}
            <form onSubmit={hanldeProfileUpdate}>
              <div className="row">
                <div className="col-12 col-md-12">
                  <div className="mb-3">
                    <div
                      className="change-avatar d-flex"
                      style={{ alignItems: "center" }}
                    >
                      <div className="w-25">
                        <img className="w-75" src={auths?.photo ?? avaterImg} />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <div className="btn btn-sm btn btn-warning upload-btn">
                          <span>
                            <FaUpload /> Upload Photo
                          </span>
                          <input
                            type="file"
                            name="studentphoto"
                            onChange={handleProfilePhotoChange}
                          />
                        </div>
                        <small className="form-text text-muted">
                          Allowed JPG, JPEG or PNG. Max size of 2MB
                        </small>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-6">
                  <div className="mb-3">
                    <label className="mb-2">Fathers Nmae</label>
                    <input
                      type="text"
                      className="form-control"
                      name="fathers_name"
                      value={input.fathers_name}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="col-12 col-md-6">
                  <div className="mb-3">
                    <label className="mb-2">Date of Birth</label>
                    <div className="cal-icon">
                      <input
                        type="date"
                        className="form-control datetimepicker"
                        name="dob"
                        value={input.dob}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-6">
                  <div className="mb-3">
                    <label className="mb-2">Gender</label>
                    <div className="cal-icon">
                      <select
                        className="form-select form-control"
                        name="gender"
                        value={input.gender}
                        onChange={handleInputChange}
                      >
                        <option>-select-</option>
                        <option>Mail</option>
                        <option>Femail</option>
                        <option>Custom</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="mb-3">
                    <label className="mb-2">Blood Group</label>
                    <select
                      className="form-select form-control"
                      name="blood_group"
                      value={input.blood_group}
                      onChange={handleInputChange}
                    >
                      <option>-select-</option>
                      <option>A-</option>
                      <option>A+</option>
                      <option>B-</option>
                      <option>B+</option>
                      <option>AB-</option>
                      <option>AB+</option>
                      <option>O-</option>
                      <option>O+</option>
                    </select>
                  </div>
                </div>
                <div className="col-12">
                  <div className="mb-3">
                    <label className="mb-2">Address</label>
                    <input
                      type="text"
                      className="form-control"
                      name="location"
                      value={input.location}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="mb-3">
                    <label className="mb-2">City</label>
                    <input
                      type="text"
                      className="form-control"
                      name="city"
                      value={input.city}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="mb-3">
                    <label className="mb-2">Division</label>
                    <input
                      type="text"
                      className="form-control"
                      name="division"
                      value={input.division}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="mb-3">
                    <label className="mb-2">Zip Code</label>
                    <input
                      type="text"
                      className="form-control"
                      name="zipcode"
                      value={input.zipcode}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="mb-3">
                    <label className="mb-2">Country</label>
                    <input
                      type="text"
                      className="form-control"
                      name="country"
                      value={input.country}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
              <div className="submit-section">
                <button type="submit" className="btn btn-primary submit-btn">
                  Save Changes
                </button>
              </div>
            </form>
            {/* /Profile Settings Form */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileSetting;
