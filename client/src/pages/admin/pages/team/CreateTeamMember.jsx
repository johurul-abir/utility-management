import { Card, CardBody, CardHeader, CloseButton } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import API from "../../../../utils/api";
import useForm from "../../../../hooks/useForm";
import "./team.scss";
import { toast } from "react-toastify";
import { useState } from "react";

const CreateTeamMember = () => {
  const [file, setfile] = useState();
  const nvigate = useNavigate();
  const { input, handelInputChange, resetForm } = useForm({
    name: "",
    position: "",
    phone: "",
    email: "",
    salary: "",
    location: "",
    facebook: "",
    instagram: "",
    linkedin: "",
    pintarest: "",
    age: "",
    marrid_status: "",
    gender: "",
  });

  const handleFileChange = (e) => {
    setfile(e.target.files[0]);
  };

  const form_data = new FormData();

  form_data.append("name", input.name);
  form_data.append("position", input.position);
  form_data.append("phone", input.phone);
  form_data.append("email", input.email);
  form_data.append("salary", input.salary);
  form_data.append("location", input.location);
  form_data.append("facebook", input.facebook);
  form_data.append("instagram", input.instagram);
  form_data.append("linkedin", input.linkedin);
  form_data.append("pintarest", input.pintarest);
  form_data.append("age", input.age);
  form_data.append("marrid_status", input.marrid_status);
  form_data.append("gender", input.gender);
  form_data.append("teamphoto", file);

  const handleTeamSubmit = async (e) => {
    e.preventDefault();

    await API.post("/api/v1/team", form_data);

    toast.success("Create successfull");
    resetForm();
    setfile(null);
    nvigate("/admin/allteam");
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-xl-10">
            <Link
              to="/admin/allteam"
              className="btn btn-sm btn btn-primary mb-1"
            >
              All Team Member
            </Link>
            <Card>
              <CardHeader>
                <h3>Create Team Member</h3>
              </CardHeader>
              <CardBody>
                <form action="" method="post" enctype="multipart/form-data">
                  <div className="ditem mb-3 ">
                    <div className="item ">
                      <label>Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={input.name}
                        onChange={handelInputChange}
                      />
                    </div>

                    <div className="item ">
                      <label>Position</label>
                      <input
                        type="text"
                        className="form-control"
                        name="position"
                        value={input.position}
                        onChange={handelInputChange}
                      />
                    </div>
                  </div>

                  <div className="ditem mb-3">
                    <div className="item mb-2">
                      <label>Phone</label>
                      <input
                        type="text"
                        className="form-control"
                        name="phone"
                        value={input.phone}
                        onChange={handelInputChange}
                      />
                    </div>

                    <div className="item mb-2">
                      <label>Email</label>
                      <input
                        type="text"
                        className="form-control"
                        name="email"
                        value={input.email}
                        onChange={handelInputChange}
                      />
                    </div>
                  </div>

                  <div className="ditem mb-3">
                    <div className="item mb-2">
                      <label>Salary</label>
                      <input
                        type="text"
                        className="form-control"
                        name="salary"
                        value={input.salary}
                        onChange={handelInputChange}
                      />
                    </div>

                    <div className="item mb-2">
                      <label>location</label>
                      <input
                        type="text"
                        className="form-control"
                        name="location"
                        value={input.location}
                        onChange={handelInputChange}
                      />
                    </div>
                  </div>

                  <div className="ditem mb-3">
                    <div className="item mb-2">
                      <label>linkedin</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="-LinkedIn url-"
                        name="linkedin"
                        value={input.linkedin}
                        onChange={handelInputChange}
                      />
                    </div>

                    <div className="item mb-2">
                      <label>pintarest</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="-pintarest url-"
                        name="pintarest"
                        value={input.pintarest}
                        onChange={handelInputChange}
                      />
                    </div>
                  </div>

                  <div className="ditem mb-3">
                    <div className="item mb-2">
                      <label>facebook</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="-facebook url-"
                        name="facebook"
                        value={input.facebook}
                        onChange={handelInputChange}
                      />
                    </div>

                    <div className="item mb-2">
                      <label>instagram</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="-instagram url-"
                        name="instagram"
                        value={input.instagram}
                        onChange={handelInputChange}
                      />
                    </div>
                  </div>

                  <div className="ditem mb-3">
                    <div className="item mb-2">
                      <label>gender</label>
                      <select
                        className="form-control"
                        name="gender"
                        value={input.gender}
                        onChange={handelInputChange}
                      >
                        <option value="">--select--</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Custom">Custom</option>
                      </select>
                    </div>

                    <div className="item mb-2">
                      <label>marrid_status</label>
                      <select
                        name="marrid_status"
                        className="form-control"
                        value={input.marrid_status}
                        onChange={handelInputChange}
                      >
                        <option value=""> --Select--</option>
                        <option value="Married"> Married</option>
                        <option value="Unmarried"> Unmarried</option>
                      </select>
                    </div>
                  </div>

                  <div className="ditem mb-3">
                    <div className="item mb-2">
                      <label>age</label>
                      <input
                        type="text"
                        className="form-control"
                        name="age"
                        value={input.age}
                        onChange={handelInputChange}
                      />
                    </div>

                    <div className="item mb-2">
                      <label>Upload photo</label>
                      <input
                        type="file"
                        className="form-control"
                        name="teamphoto"
                        onChange={handleFileChange}
                      />
                      <div className="img_preview mt-2">
                        {file && (
                          <div className="img_box">
                            <CloseButton onClick={() => setfile(null)} />
                            <img src={URL.createObjectURL(file)} alt="" />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="item mb-2">
                    <button
                      type="submit"
                      className="btn btn-success"
                      onClick={handleTeamSubmit}
                    >
                      Submit Now
                    </button>
                  </div>
                </form>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateTeamMember;
