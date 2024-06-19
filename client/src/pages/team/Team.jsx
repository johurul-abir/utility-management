import "./Team.scss";
import { Devs } from "../../faker/fakedata";
import { Link } from "react-router-dom";
import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io";
import { CiLinkedin } from "react-icons/ci";
import { FaPinterest } from "react-icons/fa6";

const Team = () => {
  return (
    <>
      <div className="container ">
        <div className="Team_page_heading">
          <h1>Our Team Mebmer</h1>
          <div className="devider"></div>
        </div>

        <div className="team">
          {Devs.map((item, index) => {
            return (
              <div className="card shadow" key={index}>
                <div className="card-body">
                  <div className="team_box">
                    <img src={item.photo} alt="" className="img-fluid" />

                    <div className="teamContent">
                      <h3>{item.name}</h3>
                      <p>{item.skill}</p>
                    </div>

                    <div className="socialmedia">
                      <ul>
                        <li>
                          <Link to="">
                            <TiSocialFacebook />
                          </Link>
                        </li>
                        <li>
                          <Link to="">
                            <IoLogoInstagram />
                          </Link>
                        </li>
                        <li>
                          <Link to="">
                            <CiLinkedin />
                          </Link>
                        </li>
                        <li>
                          <Link to="">
                            <FaPinterest />
                          </Link>
                        </li>
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
