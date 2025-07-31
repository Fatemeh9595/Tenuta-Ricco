import { Col, Container, Row } from "react-bootstrap"
import "./About.css"
import MySwiper from "../mySwiper/MySwiper"
import { IoBedOutline } from "react-icons/io5";
import { MdPlaylistAddCheck } from "react-icons/md";
import { LuShield } from "react-icons/lu";
import { BiReceipt } from "react-icons/bi";


function About(){
    return(
      <>
        <Container id="about">
           <Row>
                <iframe className="mt-5 img-fluid" style={{height:"500px"}} src="https://www.youtube.com/embed/csOs2Via0zg" frameBorder="0"></iframe>
           </Row>
           <Row className="gy-4 mt-4">
               <Col className="col-lg-6">
                  <MySwiper/>
               </Col>
               <Col className="col-lg-6 ps-5">
                  <h3 className="pt-5" style={{fontFamily:"Roboto, sans-serif" , fontSize:"34px" , fontWeight:"700px" , color:"rgb(68, 68, 68)"}} >La struttura</h3>
                  <p style={{textAlign:"justify", fontFamily:"Open Sans, sans-serif" , fontSize:"16px" , fontWeight:"400px" , color:"rgb(68, 68, 68)" , lineHeight:"24px"}}>
                    Tenuta Ricco nasce su una antica dimora salentina ristrutturata, si compone di due case vacanza da 5 posti letto ciascuna, e di due camere da 3 e 5 posti letto rispettivamente. La struttura rientra nel programma di intervento PSR Puglia 2014/2020 - Gal Porta a Levante - Intervento 2.3 Sviluppo di servizi di ospitalità per rafforzare l'offerta turistica, che ha consentito la ristrutturazione dell'immobile a fini turistico-ricettivi
                  </p>
                  <Row className="pt-4">
                     <Col className="col-md-6" style={{position:"relative"}}>
                        <div>
                          <i className="myIcons"><BiReceipt /></i>
                          <h1 className="myHeader">Struttura accreditata</h1>
                        </div>
                        <p className="myPara">
                          Tenuta Ricco e' un b&b regolarmente accreditato dalla Regione Puglia, con Codice Identificativo Struttura (CIS): LE07502562000026253
                        </p>
                     </Col>
                     <Col className="col-md-6" style={{position:"relative"}}>
                        <div>
                          <i className="myIcons"><IoBedOutline /></i>
                          <h1 className="myHeader">Posti letto</h1>
                        </div>
                        <p className="myPara">
                          La struttura puo' ospitare sino a 18 ospiti nei quattro alloggi disponibili, situati uno al piano terra e tre al piano primo
                        </p>
                     </Col>
                  </Row>
                  <Row className="pt-4">
                     <Col className="col-md-6" style={{position:"relative"}}>
                        <div>
                          <i className="myIcons"><MdPlaylistAddCheck /></i>
                          <h1 className="myHeader">Servizi inclusi</h1>
                        </div>
                        <p className="myPara">
                          Gli ospiti possono fruire gratuitamente di diversi servizi, tra cui la grande piscina di 90 metri quadrati, la rete Wi-fi in fibra e i posti auto riservati nell'area parcheggio dedicata
                        </p>
                     </Col>
                     <Col className="col-md-6"style={{position:"relative"}}>
                        <div>
                          <i className="myIcons"><LuShield /></i>
                          <h1 className="myHeader">Totalmente ecosostenibile</h1>
                        </div>
                        <p className="myPara">
                          Grazie ad un impianto fotovoltaico che produce energia elettrica e ad un impianto solare termico che produce acqua calda sanitaria, la struttura è assolutamente green ed ecosostenibile
                        </p>
                     </Col>
                  </Row>
               </Col>
           </Row>
        </Container>
      </>
    )
}


export default About