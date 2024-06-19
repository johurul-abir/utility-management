import "./support.scss";
import support from "../../assets/img/support.jpg";
import { Col } from "react-bootstrap";
import { MdOutlinePhone } from "react-icons/md";

const Support = () => {
  return (
    <>
      <div className="support">
        <div className="container">
          <div className="row">
            <Col md={6}>
              <div className="left-support">
                <img src={support} alt="" />
              </div>
            </Col>
            <Col md={6}>
              <div className="right-support">
                <h1>Our best Supports</h1>
                <h6>
                  <span> Support-time: </span> 10.00am - 4.00pm
                </h6>
                <br />

                <h2>Hotline</h2>
                <div className="divider"></div>
                <h4>
                  <MdOutlinePhone />
                  <span></span>
                  01959609081
                </h4>
                <h4>
                  <span>
                    <MdOutlinePhone />
                  </span>
                  01959609081
                </h4>
              </div>
            </Col>
          </div>
        </div>
      </div>
    </>
  );
};

export default Support;
