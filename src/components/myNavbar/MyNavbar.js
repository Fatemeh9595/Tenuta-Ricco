import "./MyNavbar.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logoTenura from "../../assets/img/logo_tenuta.png"
import { Row } from "react-bootstrap";


function MyNavbar(){

    const expand ="md"  

    return(
        <>
          <Container fluid>
            <Row>
              <Navbar key={expand} expand={expand} className="mb-3">
                <Container>
                  <Navbar.Brand href="/">
                    <img className="logo-tenura ms-5" src={logoTenura} alt="" />
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                  <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-${expand}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                    placement="end"
                  >
                    <Offcanvas.Header closeButton>
                      <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                        Offcanvas
                      </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                      <Nav className="justify-content-end flex-grow-1 pe-3 ms-5">
                        <Nav.Link className="m-2 home" href="#myCarousel">HOME</Nav.Link>
                        <NavDropdown className="m-2" 
                          title="CHI SIAMO"
                          id={`offcanvasNavbarDropdown-expand-${expand}`}
                        >
                          <NavDropdown.Item href="#about">
                            Struttura
                          </NavDropdown.Item>
                          <NavDropdown.Item href="#whyUs">
                             Perché da noi 
                          </NavDropdown.Item>
                          <NavDropdown.Item href="#faq">
                            Domande frequenti
                          </NavDropdown.Item>
                          <NavDropdown.Item href="#team">
                            Siti partner
                          </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link className="m-2" href="#service">SERVIZI</Nav.Link>
                        <Nav.Link className="m-2" href="#portfolio">ALLOGGI</Nav.Link>
                        <Nav.Link className="m-2" href="#review">RECENSIONI</Nav.Link>
                        <Nav.Link className="m-2" href="#pricing">LAST MINUTE</Nav.Link>
                        <Nav.Link className="m-2" href="#contact">CONTATTI</Nav.Link>
                        <Nav.Link className="m-2 prenota" href="#portfolio">PRENOTA</Nav.Link>
                        <NavDropdown className="m-2 lingua"
                          title="LINGUA"
                          id={`offcanvasNavbarDropdown-expand-${expand}`}
                        >
                          <NavDropdown.Item href="#action3">
                            Italiano
                            </NavDropdown.Item>
                          <NavDropdown.Item href="#action4">
                            Englese
                          </NavDropdown.Item>
                        </NavDropdown>
                      </Nav>
                    </Offcanvas.Body>
                  </Navbar.Offcanvas>
                </Container>
              </Navbar>
            </Row>
          </Container>
        </>
    )
}



export default MyNavbar