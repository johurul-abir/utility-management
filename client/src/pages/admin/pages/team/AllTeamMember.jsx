import { AiFillEdit } from "react-icons/ai";
import { IoEye } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import API, { baseURL } from "../../../../utils/api";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const AllTeamMember = () => {
  const [allteamMember, setAllTeamMember] = useState([]);

  const getAllTeamMembers = async () => {
    const allteam = await API.get("/api/v1/team");
    setAllTeamMember(allteam.data.allteam);
  };

  const handleDelete = async (id) => {
    await API.delete(`/api/v1/team/${id}`);
    toast.success("delete successfull");

    getAllTeamMembers();
  };

  useEffect(() => {
    getAllTeamMembers();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-xl-10">
            <Link to="/admin/team" className="btn btn-sm btn btn-success mb-1">
              create new team member
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
                      <th>Name</th>
                      <th>Phone</th>
                      <th>Email</th>
                      <th>Positon</th>
                      <th>Salary</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allteamMember?.length > 0
                      ? allteamMember.reverse().map((item, index) => {
                          return (
                            <tr
                              className="align-middle text-center"
                              key={index}
                            >
                              <td style={{ width: "3%" }}> {index + 1} </td>
                              <td style={{ width: "12%" }}>
                                <img
                                  src={baseURL + "/team/" + item?.photo}
                                  style={{
                                    width: "60px",
                                    borderRadius: "50%",
                                  }}
                                  alt=""
                                />
                              </td>
                              <td style={{ width: "25%" }}>
                                <h6>{item?.name}</h6>
                              </td>
                              <td>
                                <p>{item?.phone}</p>
                              </td>
                              <td>
                                <p>{item?.email}</p>
                              </td>
                              <td>
                                <p>{item?.position}</p>
                              </td>
                              <td>
                                <p>{item?.salary}</p>
                              </td>
                              <td style={{ width: "130px" }}>
                                <button className="btn btn-sm btn btn-info me-1">
                                  <AiFillEdit />
                                </button>
                                <button className="btn btn-sm btn btn-warning me-1">
                                  <IoEye />
                                </button>
                                <button
                                  className="btn btn-sm btn btn-danger"
                                  onClick={() => handleDelete(item?._id)}
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

export default AllTeamMember;
