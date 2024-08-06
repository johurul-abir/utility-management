import { AiFillEdit } from "react-icons/ai";
import { IoEye } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import API, { baseURL } from "../../../../utils/api";
import { useEffect, useState } from "react";

import { CloseButton, Modal, ModalBody, ModalHeader } from "react-bootstrap";
import { toast } from "react-toastify";

const ComplainHistory = () => {
  const [conplain, setComplain] = useState();
  const [noticeModal, setNoticeModal] = useState(false);
  const [singleComplain, setSingleComplain] = useState();

  //all complain here
  const getAllComplain = async () => {
    const data = await API.get("/api/v1/complain");
    const allComplains = data.data.complain;

    const singleUserComplains = allComplains?.filter(
      (item) =>
        item.user_id?._id === JSON.parse(localStorage.getItem("user"))?._id
    );

    setComplain(singleUserComplains);
  };

  //get single complain here
  const singleComplainhanler = async (id) => {
    const response = await API.get(`/api/v1/complain/${id}`);
    setSingleComplain(response.data.singleComplain);
    setNoticeModal(true);
  };

  //delete complain here
  const handleDelete = async (id) => {
    await API.delete(`/api/v1/complain/${id}`);
    toast.success("delete successfull");
    getAllComplain();
  };

  useEffect(() => {
    getAllComplain();
  }, []);

  return (
    <>
      <Modal show={noticeModal}>
        <ModalHeader>
          <h2>Single Complain</h2>
          <CloseButton onClick={() => setNoticeModal(false)} />
        </ModalHeader>
        <ModalBody>
          <h3>{singleComplain?.title}</h3>
          <br />
          <img
            src={baseURL + "/complain/" + singleComplain?.photo}
            alt=""
            className="w-100"
          />
          <p>{singleComplain?.content}</p>
        </ModalBody>
      </Modal>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="card">
              <div className="card-header">
                <h2>All Complain</h2>
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
                    {conplain?.length > 0
                      ? conplain.reverse().map((item, index) => {
                          return (
                            <tr
                              className="align-middle text-center"
                              key={index}
                            >
                              <td style={{ width: "3%" }}> {index + 1} </td>
                              <td style={{ width: "12%" }}>
                                {item?.photo ? (
                                  <img
                                    src={baseURL + "/complain/" + item?.photo}
                                    style={{
                                      width: "60px",
                                      height: "40px",
                                      objectFit: "cover",
                                      borderRadius: "5px",
                                    }}
                                  />
                                ) : undefined}
                              </td>
                              <td style={{ width: "25%" }}>
                                <h6>{item.title}</h6>
                              </td>
                              <td>
                                <p>
                                  {item?.content
                                    ?.split(" ")
                                    .slice(0, 8)
                                    .join(" ")}
                                </p>
                              </td>
                              <td style={{ width: "130px" }}>
                                <button className="btn btn-sm btn btn-info me-1">
                                  <AiFillEdit />
                                </button>
                                <button
                                  className="btn btn-sm btn btn-warning me-1"
                                  onClick={() => singleComplainhanler(item._id)}
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

export default ComplainHistory;
