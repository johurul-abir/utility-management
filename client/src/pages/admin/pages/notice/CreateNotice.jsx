import { Card, CardBody, CardHeader } from "react-bootstrap";
import useForm from "../../../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { createNotice } from "../../../../features/notice/noticeApiSlice";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { setMessageEmpty } from "../../../../features/notice/noticeSlice";
import { useNavigate, Link } from "react-router-dom";

const CreateNotice = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { message, error } = useSelector((state) => state.notice);

  const { input, handelInputChange, resetForm } = useForm({
    title: "",
    content: "",
  });

  const handleNoticeSubmit = (e) => {
    e.preventDefault();
    dispatch(createNotice(input));
  };

  useEffect(() => {
    if (message) {
      toast.success(message);
      resetForm();
      setMessageEmpty();
      navigate("/admin/allnotice");
    }
    if (error) {
      toast.error(error);
      setMessageEmpty();
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
                <form action="" onSubmit={handleNoticeSubmit}>
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
                      name="img"
                      value={input.img}
                      onChange={handelInputChange}
                    />
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
