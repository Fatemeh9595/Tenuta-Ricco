import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "../mySwiper/MySwiper.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Footer from "../footer/Footer";
import { useEffect, useState } from "react";
import { roomsData } from "../../roomsData";
import { useNavigate } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logoTenura from "../../assets/img/logo_tenuta.png"
import "../myNavbar/MyNavbar.css";

function RoomPage({ roomIndex }) {
  
    const handleLastMinuteClick = () => {
      navigate("/", { state: { scrollToPricing: true } });
    };

    const handleContactClick= () => {
      navigate("/", { state: { scrollToContact: true } });
    };

  
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const [roomsDatas] = useState(roomsData);
  
  if (roomIndex < 0 || roomIndex >= roomsDatas.length || isNaN(roomIndex)) {
    return (
      <Container className="text-center mt-5">
        <h1>Room not found</h1>
      </Container>
    );
  }
  
  const room = roomsDatas[roomIndex];
  const pictures = room.pictures ? Object.values(room.pictures) : [];
  
  const handlePrenotaClick = () => {
    navigate(`/room-book/${room.id}`, { state: { room } });
  };
  
  const expand = "md";
  
  return (
    <>
      <Container fluid id="roomPage">
        <Row className='m-0'>
          <Navbar style={{ backgroundColor: "#404040" }} key={expand} expand={expand} className="p-4">
            <Container>
              <Navbar.Brand href="/">
                <img className="logo-tenura ms-5" src={logoTenura} alt="Logo" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
              <Navbar.Offcanvas id={`offcanvasNavbar-expand-${expand}`} placement="end">
                <Offcanvas.Header closeButton />
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3 ms-5">
                    <Nav.Link className="m-2" href="/">HOME</Nav.Link>
                    <Nav.Link className="m-2" onClick={handleLastMinuteClick} >LAST MINUTE</Nav.Link>
                    <Nav.Link className="m-2" onClick={handleContactClick} >CONTATTI</Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        </Row>
      </Container>

      <Container fluid style={{ backgroundColor: "white" }}>
        <Container>
          <div className="text-center p-5">
            <Button onClick={handlePrenotaClick} style={{ backgroundColor: "#5c9f24", padding: "11px 32px", border: "none" }}>
              Prenota
            </Button>
          </div>

          <Row className="gy-4">
            <Col className="col-lg-8">
              {room.video && (
                <iframe
                  style={{ width: "100%", height: "500px", marginBottom: "30px" }}
                  src={room.video}
                  frameBorder="0"
                  title={room.title}
                />
              )}
              {pictures.length > 0 && (
                <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{ delay: 5000, disableOnInteraction: false }}
                  pagination={{ clickable: true }}
                  navigation={true}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper"
                  style={{height:"auto"}}
                >
                  {pictures.map((pictureUrl, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={pictureUrl}
                        alt={room.title ? `${room.title} – slide ${index + 1}` : `Camera – slide ${index + 1}`}
                        loading="lazy"
                      />
                    </SwiperSlide>
                  ))}

                </Swiper>
              )}
            </Col>

            <Col className="col-lg-4">
              <div style={{ boxShadow: "0px 0 30px rgba(42, 42, 42, 0.08)", padding: "30px" }}>
                <h3 style={{ fontWeight: "bold", fontSize: "22px", paddingBottom: "20px" }}>Caratteristiche</h3>
                <hr style={{ color: "gray" }} />
                <Row>
                  {room.iconsLink?.map((iconLink, index) => (
                    <Col className="col-lg-4 col-md-4 col-sm-6 col-6" key={index}>
                      <img src={iconLink} alt={room.iconsName?.[index]} />
                      <p>{room.iconsName?.[index]}</p>
                    </Col>
                  ))}
                </Row>
              </div>
              <div>
                <h2 style={{ fontSize: "26px", fontWeight: "700", paddingLeft: "30px", paddingTop: "35px" }}>Descrizione</h2>
                <p style={{ color: "#444444", fontSize: "16px", paddingLeft: "30px", paddingTop: "15px" }}>{room.description}</p>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Footer />
    </>
  );
}

export default RoomPage;
