import { Col, Container, Row } from "react-bootstrap";
import "./Contact.css";
import { GrLocation } from "react-icons/gr";
import { BsPhone } from "react-icons/bs";
import { FaPhone } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";



function Contact(){
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToContact) {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

    return(
      <>
        <Container fluid id="contact" className="mb-5 pb-5" style={{backgroundColor:"#ffffff"}}>
           <Container>
             <section className="text-center">
                <h2 className="contatti">CONTATTI</h2>
                <p className="contatti-des">
                  Nel cuore del Salento, Tenuta Ricco è ad un passo dalle principali mete turistiche, in un'oasi di pace e di tranquillità.
                </p>
             </section>
             <section className="text-center">
                <Row>
                   <Col className="col-md-4">
                      <div className="contact-address">
                         <i><GrLocation className="contatti-icon" /></i>
                         <h3 className="contact-option">INDIRIZZO</h3>
                         <p style={{fontSize:"16px", fontWeight:"400" }}>Via Montale n.24, 73020 Cursi (LE)</p>
                         <a style={{fontSize:"16px", fontWeight:"400", color:"rgb(92, 159, 36)", textDecoration:"none"}} href="https://www.google.it/maps/dir/?api=1&destination=40.1580721,18.3101763">Indicazioni stradali</a>
                      </div>
                   </Col>
                   <Col className="col-md-4">
                      <div className="contact-phone">
                        <i><BsPhone className="contatti-icon"/></i>
                        <h3 className="contact-option">TELEFONO E WHATSAPP</h3>
                        <p>
                          <i style={{color:"rgb(92, 159, 36)", fontSize:"15px"}}><FaPhone /></i>
                          <a style={{textDecoration:"none", color:"rgb(92, 159, 36)", marginLeft:"5px", fontSize:"16px"}} href="tel:+393483751185">+39 3483751185</a>
                        </p>
                        <p>
                          <i style={{color:"rgb(92, 159, 36)", fontSize:"20px", marginRight:"5px"}}><FaWhatsapp /></i>
                           <a style={{color:"rgb(92, 159, 36)", fontSize:"16px", textDecoration:"none"}} href="https://api.whatsapp.com/send/?phone=393483751185&text=Messaggio+a+Tenuta+Ricco+-+Salento+http%3A%2F%2Fwww.tenutaricco.it&type=phone_number&app_absent=0"> Whatsapp</a>
                        </p>
                      </div>
                   </Col>
                   <Col className="col-md-4">
                      <div className="contact-email">
                        <i className="contatti-icon"><TfiEmail /></i>
                        <h3 className="contact-option">EMAIL</h3>
                        <p>
                          <a style={{textDecoration:"none", color:"rgb(92, 159, 36)", fontSize:"16px"}} href="mailto:infoprenotazioni@vivimy.it">infoprenotazioni@vivimy.it</a>
                        </p>
                      </div>
                   </Col> 
                </Row>
             </section>
           </Container>
        </Container>
      </>
    )
}


export default Contact