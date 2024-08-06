import { Card, CardBody, CardHeader, CloseButton } from "react-bootstrap";
import useForm from "../../../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { createNotice } from "../../../../features/notice/noticeApiSlice";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { setMessageEmpty } from "../../../../features/notice/noticeSlice";
import { useNavigate, Link } from "react-router-dom";
import "./notice.scss";

const CreateNotice = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [file, setfile] = useState();

  const { message, error } = useSelector((state) => state.notice);

  const { input, handelInputChange, resetForm } = useForm({
    title: "",
    content: "",
  });

  const handleImageChange = (e) => {
    setfile(e.target.files[0]);
  };

  const handleNoticeSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", input.title);
    formData.append("content", input.content);
    formData.append("noticephoto", file);

    dispatch(createNotice(formData));
    setfile(null);
  };

  useEffect(() => {
    if (message) {
      toast.success(message);
      resetForm();
      navigate("/admin/allnotice");
      dispatch(setMessageEmpty());
    }
    if (error) {
      toast.error(error);
      dispatch(setMessageEmpty());
    }
  }, [dispatch, message, error, resetForm, navigate]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <Link
              to="/admin/allnotice"
              className="btn btn-sm btn btn-primary mb-1"
            >
              All Notice
            </Link>
            <Card>
              <CardHeader>
                <h3>Create Notice</h3>
              </CardHeader>
              <CardBody>
                <form
                  enctype="multipart/form-data"
                  method="post"
                  onSubmit={handleNoticeSubmit}
                >
                  <div className="item mb-2">
                    <label>Title</label>
                    <input
                      type="text"
                      className="form-control"
                      name="title"
                      value={input.title}
                      onChange={handelInputChange}
                    />
                  </div>

                  <div className="item mb-2">
                    <label>Notice body</label>
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
                    <label>Upload Notice photo</label>
                    <input
                      type="file"
                      className="form-control"
                      name="noticephoto"
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
                      Create Notice
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

export default CreateNotice;
