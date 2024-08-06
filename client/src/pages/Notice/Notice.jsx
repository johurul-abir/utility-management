import {
  Card,
  CardBody,
  CardHeader,
  CloseButton,
  Col,
  Container,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
} from "react-bootstrap";
import Slider from "react-slick";
import "./Notice.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllNotice } from "../../features/notice/noticeApiSlice";
import { baseURL } from "../../utils/api";

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
  const [noticeModal, setNoticeModal] = useState(false);
  const [singleNotice, setSingleNotice] = useState();

  const { notices } = useSelector((state) => state.notice);

  const handleReadMore = (id) => {
    setNoticeModal(true);
    const data = notices.find((item) => item._id === id);
    setSingleNotice(data);
  };

  useEffect(() => {
    dispatch(getAllNotice());
  }, [dispatch]);

  return (
    <>
      {/* Single Modal show Modal */}
      <Modal show={noticeModal}>
        <ModalHeader>
          <h3> {singleNotice?.title} </h3>
          <CloseButton onClick={() => setNoticeModal(false)} />
        </ModalHeader>
        <ModalBody>
          <p>{singleNotice?.content}</p>
          <img
            src={baseURL + "/notice/" + singleNotice?.img}
            className="w-100"
          />
        </ModalBody>
      </Modal>
      <div className="notice">
        <Container>
          <Row className="justify-content-center align-item-center">
            <Col md={10}>
              <div className="notice-area">
                <h1 className="text-center">Notice</h1>
                <div className="slider-container pt-3">
                  <Slider {...settings}>
                    {notices?.map((item, index) => {
                      return (
                        <div className="noticeitem" key={index}>
                          <p className="mb-0 " style={{ fontSize: "12px" }}>
                            {`${new Date().getDate(item?.createdAt)} /
                              ${new Date().getMonth(
                                item?.createdAt
                              )} / ${new Date().getFullYear(item?.createdAt)}`}
                          </p>
                          <Card>
                            <CardHeader>
                              <h6>{item?.title}</h6>
                            </CardHeader>
                            <CardBody>
                              <img
                                src={baseURL + "/notice/" + item?.img}
                                alt=""
                              />
                              <p>
                                {item?.content
                                  ?.split(" ")
                                  .slice(0, 5)
                                  .join(" ")}
                              </p>

                              <button
                                className="btn btn-sm btn btn-info "
                                onClick={() => handleReadMore(item._id)}
                              >
                                See more
                              </button>
                            </CardBody>
                          </Card>
                        </div>
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
