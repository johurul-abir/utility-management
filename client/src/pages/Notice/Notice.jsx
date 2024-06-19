import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import Slider from "react-slick";
import "./Notice.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Notice = () => {
  const settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    autoplaySpeed: 4000,
    speed: 500,
    responsive: [
      {
        breakpoint: 5000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="notice">
        <Container>
          <Row className="justify-content-center align-item-center">
            <Col md={10}>
              <div className="notice-area">
                <h2 className="text-center">Notice</h2>
                <div className="slider-container pt-3">
                  <Slider {...settings}>
                    <Card>
                      <CardHeader>
                        <h2>Gass bill Notice</h2>
                      </CardHeader>
                      <CardBody>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Voluptatibus sed deserunt molestiae dolore
                          voluptas vitae excepturi minima sapiente similique,
                          rem provident adipisci ipsum officiis sit beatae.
                          Excepturi voluptas laboriosam vitae?
                        </p>
                        <button className="btn btn-info"> See more</button>
                      </CardBody>
                    </Card>
                    <Card>
                      <CardHeader>
                        <h2>Gass bill Notice</h2>
                      </CardHeader>
                      <CardBody>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Voluptatibus sed deserunt molestiae dolore
                          voluptas vitae excepturi minima sapiente similique,
                          rem provident adipisci ipsum officiis sit beatae.
                          Excepturi voluptas laboriosam vitae?
                        </p>
                        <button className="btn btn-info"> See more</button>
                      </CardBody>
                    </Card>
                    <Card>
                      <CardHeader>
                        <h2>Gass bill Notice</h2>
                      </CardHeader>
                      <CardBody>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Voluptatibus sed deserunt molestiae dolore
                          voluptas vitae excepturi minima sapiente similique,
                          rem provident adipisci ipsum officiis sit beatae.
                          Excepturi voluptas laboriosam vitae?
                        </p>
                        <button className="btn btn-info"> See more</button>
                      </CardBody>
                    </Card>
                  </Slider>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Notice;
