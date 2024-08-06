import "./support.scss";
import support from "../../assets/img/support.jpg";
import { Col } from "react-bootstrap";

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
                <h1>
                  {" "}
                  <span className="text-info"> Our Support </span> and Help
                </h1>
                <h6>
                  <span> Support-time: </span> 10.00am - 4.00pm
                </h6>
                <br />

                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates cum error voluptatibus esse asperiores voluptatum
                  maiores facere fugit amet officia optio dolorum, harum totam
                  tempora consequuntur quam facilis dicta repellendus!
                </p>
                <button className="phone">+8801959 609081</button>
              </div>
            </Col>
          </div>
        </div>
      </div>
    </>
  );
};

export default Support;
