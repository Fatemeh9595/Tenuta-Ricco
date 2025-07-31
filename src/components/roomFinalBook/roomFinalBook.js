import React from "react";
import { Container, Row } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useParams } from "react-router-dom";
import { roomsData } from "../../roomsData";
import logoTenura from "../../assets/img/logo_tenuta.png";
import Contact from "../contact/Contact";
import "../myNavbar/MyNavbar.css";
import { useNavigate } from "react-router-dom";


function RoomFinalBook() {
  const navigate = useNavigate();

  const handleLastMinuteClick = () => {
    navigate("/", { state: { scrollToPricing: true } });
  };
  const handleContactClick = () => {
    navigate("/", { state: { scrollToContact: true } });
  };

  const expand = "md";

  const roomId = parseInt(useParams().roomId, 10); 
  const roomInfo = roomsData.find((room) => room.id === roomId); 

  if (!roomInfo) {
    return (
      <Container className="text-center mt-5">
        <h1>Room not found</h1>
      </Container>
    );
  }

  return (
    <>
      <Container fluid>
        <Row className="m-0">
          <Navbar style={{ backgroundColor: "#404040" }} key={expand} expand={expand} className="p-4">
            <Container>
              <Navbar.Brand href="/">
                <img className="logo-tenura ms-5" src={logoTenura} alt="Logo Tenuta" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3 ms-5">
                    <Nav.Link className="m-2 border-bottom-0" href="/">
                      HOME
                    </Nav.Link>
                    <Nav.Link className="m-2 border-bottom-0" onClick={handleLastMinuteClick} >
                      LAST MINUTE
                    </Nav.Link>
                    <Nav.Link className="m-2 border-bottom-0" onClick={handleContactClick} >
                      CONTATTI
                    </Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        </Row>
        <Row style={{ backgroundColor: "#f6f6f6" }}>
          <Navbar key={expand} expand={expand} className="mb-3">
            <Container>
              <Navbar.Brand href="#">
                <h1 style={{ fontSize: "28px", marginLeft: "50px" }}>
                  <p style={{ color: "#323232" }}>Stai prenotando l'alloggio {roomInfo.id}</p>
                </h1>
              </Navbar.Brand>
              <Nav className="justify-content-end flex-grow-1 pe-3 ms-5">
                <Nav.Link className="m-2 home border-bottom-0" href="#action1">
                  <div>
                    <p className="d-inline-block pe-2" style={{ color: "#5c9f24", fontSize: "16px" }}>
                      Home
                    </p>
                    <p className="d-inline-block pe-2" style={{ color: "#5c9f24", fontSize: "16px" }}>
                      / Allogio {roomInfo.id}
                    </p>
                    <span className="d-inline-block" style={{ color: "#444444" }}>
                      /<span style={{ color: "#444444", fontSize: "16px" }} className="ps-2">
                        Prenotazione
                      </span>
                    </span>
                  </div>
                </Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </Row>
      </Container>
      <Contact />
    </>
  );
}

export default RoomFinalBook;