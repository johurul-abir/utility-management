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
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { getAllNotice } from "../../features/notice/noticeApiSlice";

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

  const dispatch = useDispatch();

  const [seeMore, setSeeMore] = useState(5);
  const seemoreRef = useRef(null);

  const { notices } = useSelector((state) => state.notice);

  const handleReadMore = (data) => {
    setSeeMore(data);
  };

  useEffect(() => {
    dispatch(getAllNotice());
  }, [dispatch]);

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
                    {notices?.map((item, index) => {
                      return (
                        <Card key={index}>
                          <CardHeader>
                            <h2>{item?.title}</h2>
                          </CardHeader>
                          <CardBody>
                            <img
                              src="https://img.freepik.com/premium-vector/notice-free-vector_734448-5.jpg"
                              alt=""
                            />
                            <p>
                              {item?.content
                                ?.split(" ")
                                .slice(0, seeMore)
                                .join(" ")}
                            </p>

                            <button
                              className="btn btn-info"
                              onClick={() =>
                                handleReadMore(item?.content?.length)
                              }
                              ref={seemoreRef}
                            >
                              See more
                            </button>
                          </CardBody>
                        </Card>
                      );
                    })}
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
