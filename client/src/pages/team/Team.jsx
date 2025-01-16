import "./Team.scss";
import { Link } from "react-router-dom";
import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io";
import { CiLinkedin } from "react-icons/ci";
import { FaPinterest } from "react-icons/fa6";
import { useEffect, useState } from "react";
import API, { baseURL } from "../../utils/api";

const Team = () => {
  const [allteamMember, setAllTeamMember] = useState([]);

  const getAllTeamMembers = async () => {
    const allteam = await API.get("/api/v1/team");
    setAllTeamMember(allteam.data.allteam);
  };

  useEffect(() => {
    getAllTeamMembers();
  }, []);

  return (
    <>
      <div className="container ">
        <div className="Team_page_heading">
          <h1>
            {" "}
            <span className="text-info"> Our Team </span> Mebmer
          </h1>
          <div className="devider"></div>
        </div>

        <div className="team">
          {allteamMember?.map((item, index) => {
            return (
              <div className="card" key={index}>
                <div className="card-body">
                  <div className="team_box">
                    <img
                      src={baseURL + "/team/" + item?.photo}
                      alt=""
                      className="img-fluid"
                    />

                    <div className="teamContent">
                      <h3>{item?.name}</h3>
                      <p>{item?.position}</p>
                    </div>

                    <div className="socialmedia">
                      <ul>
                        {item?.facebook ? (
                          <li>
                            <Link to={item?.facebook}>
                              <TiSocialFacebook />
                            </Link>
                          </li>
                        ) : undefined}

                        {item?.instagram ? (
                          <li>
                            <Link to={item?.instagram}>
                              <IoLogoInstagram />
                            </Link>
                          </li>
                        ) : undefined}

                        {item?.linkedin ? (
                          <li>
                            <Link to={item?.linkedin}>
                              <CiLinkedin />
                            </Link>
                          </li>
                        ) : undefined}

                        {item?.pintarest ? (
                          <li>
                            <Link to={item?.pintarest}>
                              <FaPinterest />
                            </Link>
                          </li>
                        ) : undefined}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Team;
