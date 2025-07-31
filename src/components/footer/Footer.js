import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
import { SiWhatsapp } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa6";
import { GrLocation } from "react-icons/gr";
import { BsInstagram } from "react-icons/bs";
import { RiArrowRightSLine } from "react-icons/ri";
import { FiArrowUp } from "react-icons/fi";
import { Link } from "react-router-dom"; 



function Footer() {
  return (
    <>
      <Container fluid style={{ backgroundColor: "#1d1d1d" }} className="pb-5">
        <Container>
          <Row>
            <Col className="col-lg-3 col-md-6">
              <div className="footer-info">
                <h3
                  style={{
                    fontSize: "24px",
                    color: "white",
                    fontWeight: "700",
                    paddingTop: "53px",
                  }}
                >
                  Tenuta Ricco
                </h3>
                <p style={{ fontSize: "14px", color: "white" }}>
                  Via Montale n.24 <br />
                  73020 Cursi (LE) <br />
                  <span style={{ color: "#5c9f24" }}>Indicazioni stradali </span>
                  <br />
                  CIS: LE07502562000026253 <br />
                  P.IVA: 05049000754 <br /> <br />
                  <strong>Telefono: </strong>
                  <a
                    style={{ color: "rgb(92, 159, 36)", textDecoration: "none" }}
                    href="tel:+393501334670"
                  >
                    +393501334670
                  </a>
                  <br />
                  <strong>Whatsapp: </strong>
                  <a
                    style={{ color: "rgb(92, 159, 36)", textDecoration: "none" }}
                    href="https://api.whatsapp.com/send/?phone=393501334670&text=Messaggio+a+Tenuta+Ricco+-+Salento+http%3A%2F%2Fwww.tenutaricco.it&type=phone_number&app_absent=0"
                  >
                    invia un messaggio
                  </a>
                  <br />
                  <strong>Email: </strong>
                  <a
                    style={{ color: "rgb(92, 159, 36)", textDecoration: "none" }}
                    href="mailto:infoprenotazioni@vivimy.it"
                  >
                    infoprenotazioni@vivimy.it
                  </a>
                  <br />
                </p>
                <div className="social-links">
                  <a
                    className="socialIcons"
                    href="https://api.whatsapp.com/send/?phone=393501334670&text=Messaggio+a+Tenuta+Ricco+-+Salento+http%3A%2F%2Fwww.tenutaricco.it&type=phone_number&app_absent=0"
                  >
                    <i className="socialMediaIcon">
                      <SiWhatsapp />
                    </i>
                  </a>
                  <a
                    className="socialIcons"
                    href="https://www.facebook.com/tenutaricco"
                  >
                    <i className="socialMediaIcon">
                      <FaFacebook />
                    </i>
                  </a>
                  <a
                    className="socialIcons"
                    href="https://www.google.it/maps/dir/?api=1&destination=40.1580721,18.3101763"
                  >
                    <i className="socialMediaIcon">
                      <FaGooglePlusG />
                    </i>
                  </a>
                  <a
                    className="socialIcons"
                    href="https://www.google.it/maps/dir/?api=1&destination=40.1580721,18.3101763"
                  >
                    <i className="socialMediaIcon">
                      <GrLocation />
                    </i>
                  </a>
                  <a
                    className="socialIcons"
                    href="https://www.instagram.com/tenutaricco/?igshid=YmMyMTA2M2Y%3D"
                  >
                    <i className="socialMediaIcon">
                      <BsInstagram />
                    </i>
                  </a>
                </div>
              </div>
            </Col>
            <Col className="col-lg-3 col-md-6">
              <div className="footerLinks">
                <h6>Link</h6>
                <ul>
                  <li>
                    <i className="rightArrow">
                      <RiArrowRightSLine />
                    </i>
                    <a className="linkItems" href="#myCarousel">
                      Home
                    </a>
                  </li>
                  <li>
                    <i className="rightArrow">
                      <RiArrowRightSLine />
                    </i>
                    <a className="linkItems" href="#about">
                      Struttura
                    </a>
                  </li>
                  <li>
                    <i className="rightArrow">
                      <RiArrowRightSLine />
                    </i>
                    <a className="linkItems" href="#service">
                      Servizi
                    </a>
                  </li>
                  <li>
                    <i className="rightArrow">
                      <RiArrowRightSLine />
                    </i>
                    <a className="linkItems" href="#portfolio">
                      Alloggi
                    </a>
                  </li>
                  <li>
                    <i className="rightArrow">
                      <RiArrowRightSLine />
                    </i>
                    <a className="linkItems" href="#pricing">
                      Last minute
                    </a>
                  </li>
                  <li>
                    <i className="rightArrow">
                      <RiArrowRightSLine />
                    </i>
                    <a className="linkItems" href="#faq">
                      Domande frequenti
                    </a>
                  </li>
                  <li>
                    <i className="rightArrow">
                      <RiArrowRightSLine />
                    </i>
                    <a className="linkItems" href="#contact">
                      Contatti
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col className="col-lg-3 col-md-6">
              <div className="footerLinks">
                <h6>Alloggi</h6>
                <ul>
                  <li>
                    <i className="rightArrow">
                      <RiArrowRightSLine />
                    </i>
                    <Link className="linkItems" to="/room/0">
                      Allogio 1
                    </Link>
                  </li>
                  <li>
                    <i className="rightArrow">
                      <RiArrowRightSLine />
                    </i>
                    <Link className="linkItems" to="/room/1">
                      Allogio 2
                    </Link>
                  </li>
                  <li>
                    <i className="rightArrow">
                      <RiArrowRightSLine />
                    </i>
                    <Link className="linkItems" to="/room/2">
                      Allogio 3
                    </Link>
                  </li>
                  <li>
                    <i className="rightArrow">
                      <RiArrowRightSLine />
                    </i>
                    <Link className="linkItems" to="/room/3">
                      Allogio 4
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col className="col-lg-3 col-md-6">
              <div className="footerLinks">
                <h6>Termini e privacy</h6>
                <ul>
                  <li>
                    <i className="rightArrow">
                      <RiArrowRightSLine />
                    </i>
                    <a className="linkItems" href="/termini-e-condizioni">
                      Termini e condizioni
                    </a>
                  </li>
                  <li>
                    <i className="rightArrow">
                      <RiArrowRightSLine />
                    </i>
                    <a className="linkItems" href="/informativa-privacy">
                      Informativa privacy
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid style={{ backgroundColor: "black" }}>
        <div className="copyRight text-white pt-5 pb-3 text-center">
          © Copyright 2024
          <strong>
            <span className="copyRight text-white">Tenuta Ricco. </span>
          </strong>
          Tutti i diritti riservati
        </div>
        <div className="credits text-white pb-4 text-center">
          Designed by <br />
          <a
            href="https://www.execom.it/"
            style={{ color: "rgb(92, 159, 36)", textDecoration: "none" }}
          >
             execom.it
          </a>
        </div>
        <div className="backToTop text-center">
          <a
            href="#top"
            style={{
              color: "rgb(92, 159, 36)",
              textDecoration: "none",
              fontSize: "16px",
            }}
          >
            <FiArrowUp /> Back to top
          </a>
        </div>
      </Container>
    </>
  );
}

export default Footer;
