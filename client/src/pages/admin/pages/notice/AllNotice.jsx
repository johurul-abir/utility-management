import { useEffect, useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { IoEye } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteNotice,
  getAllNotice,
  getSingleNotice,
} from "../../../../features/notice/noticeApiSlice";
import { CloseButton, Modal, ModalBody, ModalHeader } from "react-bootstrap";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { baseURL } from "../../../../utils/api";

const AllNotice = () => {
  const dispatch = useDispatch();
  const [noticeModal, setNoticeModal] = useState(false);
  const { notices, message, error } = useSelector((state) => state.notice);
  const { singlenotice } = useSelector((state) => state.notice);

  //single Notice
  const handleNotice = (id) => {
    setNoticeModal(true);
    dispatch(getSingleNotice(id));
  };

  const handleDelete = async (id) => {
    dispatch(deleteNotice(id));
  };

  useEffect(() => {
    if (message) {
      toast.success(message);
    }
    if (error) {
      toast.success(error);
    }
    dispatch(getAllNotice());
  }, [dispatch, message, error]);

  return (
    <>
      <Modal show={noticeModal}>
        <ModalHeader>
          <h3>Notice</h3>
          <CloseButton onClick={() => setNoticeModal(false)} />
        </ModalHeader>
        <ModalBody>
          <h1>{singlenotice?.title}</h1>
          <br />
          <img
            src={baseURL + "/notice/" + singlenotice?.img}
            alt=""
            className="w-100"
          />
          <p>{singlenotice?.content}</p>
        </ModalBody>
      </Modal>

      <div className="container">
        <div className="row">
          <div className="col-xl-10">
            <Link
              to="/admin/createnotice"
              className="btn btn-sm btn btn-success mb-1"
            >
              create new Notice
            </Link>
            <div className="card">
              <div className="card-header">
                <h2>All Notice</h2>
              </div>
              <div className="card-body">
                <table className="table table-stripe responsive" border="1px">
                  <thead>
                    <tr className="align-middle text-center">
                      <th>#</th>
                      <th>Photo</th>
                      <th>Title</th>
                      <th>Content</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {notices?.length > 0
                      ? notices.map((item, index) => {
                          return (
                            <tr
                              className="align-middle text-center"
                              key={index}
                            >
                              <td style={{ width: "3%" }}> {index + 1} </td>
                              <td style={{ width: "12%" }}>
                                <img
                                  src={baseURL + "/notice/" + item?.img}
                                  style={{
                                    width: "60px",
                                    borderRadius: "5px",
                                  }}
                                  alt=""
                                />
                              </td>
                              <td style={{ width: "25%" }}>
                                <h6>{item.title}</h6>
                              </td>
                              <td>
                                <p>{item.content}</p>
                              </td>
                              <td style={{ width: "130px" }}>
                                <button className="btn btn-sm btn btn-info me-1">
                                  <AiFillEdit />
                                </button>
                                <button
                                  className="btn btn-sm btn btn-warning me-1"
                                  onClick={() => handleNotice(item._id)}
                                >
                                  <IoEye />
                                </button>
                                <button
                                  className="btn btn-sm btn btn-danger"
                                  onClick={() => handleDelete(item._id)}
                                >
                                  <MdDelete />
                                </button>
                              </td>
                            </tr>
                          );
                        })
                      : "No Notice found"}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllNotice;
