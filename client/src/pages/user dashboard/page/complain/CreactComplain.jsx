import { useEffect, useState } from "react";
import { Card, CardBody, CardHeader, CloseButton } from "react-bootstrap";

import useForm from "../../../../hooks/useForm";
import API from "../../../../utils/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CreactComplain = () => {
  const [file, setfile] = useState();
  const navigate = useNavigate();

  const { input, handelInputChange, resetForm } = useForm({
    title: "",
    content: "",
  });

  const handleImageChange = (e) => {
    setfile(e.target.files[0]);
  };

  const handleComplainSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", input.title);
    formData.append("user_id", JSON.parse(localStorage.getItem("user"))?._id);
    formData.append("content", input.content);
    formData.append("conplainphoto", file);

    await API.post("api/v1/complain", formData);

    setfile(null);
    resetForm();
    navigate("/dashboard/userdashboard");
    toast.success("Complain Submmit successfull");
  };

  useEffect(() => {}, []);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-xl-10">
            <Card>
              <CardHeader>
                <h3>Create Complain</h3>
              </CardHeader>
              <CardBody>
                <form
                  enctype="multipart/form-data"
                  method="post"
                  onSubmit={handleComplainSubmit}
                >
                  <div className="item mb-2">
                    <label>Complain Title</label>
                    <input
                      type="text"
                      className="form-control"
                      name="title"
                      value={input.title}
                      onChange={handelInputChange}
                    />
                  </div>
                  {/* send User Id */}
                  <div className="item mb-2 d-none">
                    <input type="text" name="user_id" />
                  </div>

                  <div className="item mb-2">
                    <label>Type your complain</label>
                    <textarea
                      type="text"
                      rows="3"
                      className="form-control"
                      name="content"
                      value={input.content}
                      onChange={handelInputChange}
                    ></textarea>
                  </div>

                  <div className="item mb-2">
                    <label>Upload complain file</label>
                    <input
                      type="file"
                      className="form-control"
                      name="conplainphoto"
                      onChange={handleImageChange}
                    />
                    <div className="img_preview_box mt-3 w-25">
                      {file && (
                        <>
                          <CloseButton onClick={() => setfile(null)} />
                          <img
                            className="w-100"
                            src={URL.createObjectURL(file)}
                          />
                        </>
                      )}
                    </div>
                  </div>

                  <div className="item mb-2">
                    <button type="submit" className="btn btn-success">
                      Submmit Complain
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

export default CreactComplain;
