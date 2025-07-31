import {Container, Row , Col } from "react-bootstrap";
import "../mySwiper/MySwiper.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logoTenura from "../../assets/img/logo_tenuta.png"
import "../myNavbar/MyNavbar.css";
import Footer from "../footer/Footer";




function TerminiECondizioni(){

  const expand = "md";
    return(
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
                      <Nav.Link className="m-2 border-bottom-0" href="#action1">
                        HOME
                      </Nav.Link>
                      <Nav.Link className="m-2 border-bottom-0" href="#action1">
                        LAST MINUTE
                      </Nav.Link>
                      <Nav.Link className="m-2 border-bottom-0" href="#action1">
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
                    <p style={{ color: "#323232" }}>Termini e condizioni</p>
                  </h1>
                </Navbar.Brand>
                <Nav className="justify-content-end flex-grow-1 pe-3 ms-5">
                  <Nav.Link className="m-2 home border-bottom-0" href="#action1">
                    <div>
                      <p className="d-inline-block pe-2" style={{ color: "#5c9f24", fontSize: "16px" }}>
                        Home
                      </p>
                      <span className="d-inline-block" style={{ color: "#444444" }}>
                        /<span style={{ color: "rgb(68, 68, 68)", fontSize: "16px" }} className="ps-2">
                         Termini e condizioni
                        </span>
                      </span>
                    </div>
                  </Nav.Link>
                </Nav>
              </Container>
            </Navbar>
          </Row>
        </Container>
        <Container className="mt-5">
        <Row className="gy-4">
          <Col md={3} className="shadow p-5 h-100">
             <div>
                <h3 className="fw-bold" style={{fontSize:"22px"}}>Prenotazioni e Accettazione</h3>
                <hr />
                 <p>
                   1) Per verificare la disponibilità degli alloggi si utilizza il modulo di prenotazione presente sul nostro sito web, o si può richiedere un preventivo. <br />
    
                   2) Dopo aver effettuato la richiesta di prenotazione, il cliente dovrà confermarla eseguendo il pagamento secondo le modalità riportate nella pagina di conferma della prenotazione.<br />
                   
                   3) In caso di mancata conferma della prenotazione entro 30 minuti dalla richiesta, la stessa sarà automaticamente cancellata. Successivamente alla ricezione del pagamento procederemo alla emissione e all'invio per email della fattura.<br />
                   
                   4) Dopo aver eseguito il pagamento l'ospite dovrà inviarci per email o altro mezzo informatico, ai fini degli obblighi di legge, un valido documento di identità; in caso contrario non potrà avere accesso nella struttura.<br />
                   
                   5) Il check-in all'arrivo si effettua dalle ore 15:00 alle ore 19:00; il check-out alla partenza si effettua entro le ore 10:00. Le richieste di late check-in e check-out possono comportare l'applicazione di un sovrapprezzo variabile. Non sono ammessi animali.<br />
                   
                   6) Ci riserviamo il diritto di sostituire l'alloggio assegnato all'ospite con altro di livello pari o superiore senza preavviso e senza aumento di prezzo.
               
                 </p>
              </div>          
          </Col>
          <Col md={1}>
          </Col>

          <Col md={3} className="shadow p-5 h-100">
             <div>
               <h3 className="fw-bold" style={{fontSize:"22px"}}>Prezzi e Modalità di Pagamento</h3>
               <hr />
               <p>
                  7) I prezzi sono intesi per alloggio e per la durata del soggiorno, e comprendono le tasse. L'imposta di soggiorno è inclusa nel prezzo. La prima colazione è esclusa.<br />
   
                  8) Il prezzo totale del soggiorno è quello che viene stampato a video durante la procedura di prenotazione sul nostro sito.<br />
                  
                  9) Il prezzo del soggiorno dovrà essere pagato anticipatamente e per intero, al momento della conferma della prenotazione, secondo le modalità indicate al termine della procedura di prenotazione.
                </p>
             </div>
           </Col>
           <Col md={1}>
          </Col>

          <Col md={3} className="shadow p-5 h-100">
             <div>
               <h3 className="fw-bold" style={{fontSize:"22px"}}>Cancellazioni</h3>
               <hr />
               <p>
                  10) La cancellazione o riduzione di una prenotazione già confermata deve essere comunicata con email a tenutaricco@gmail.com, oppure al numero +39 3668248613.<br />
                   
                   11) Alla ricezione della richiesta di cancellazione o riduzione della prenotazione, Tenuta Ricco renderà nuovamente disponibili le date precedentemente prenotate e confermate sul proprio sito e sui siti di prenotazione partner, e procederà al rimborso totale o parziale della prenotazione solo qualora riesca ad affittare l'alloggio ad altri ospiti per un periodo uguale o inferiore, senza subire alcuna perdita economica. In questo caso, alla ricezione del pagamento da parte dei nuovi ospiti per lo stesso periodo o per un periodo di durata inferiore rispetto alla prenotazione originale, Tenuta Ricco emmetterà nota di credito e procederà al rimborso totale o parziale della prenotazione.<br />
                   
                   12) Qualora Tenuta Ricco non riesca ad affittare ad altri ospiti per l'intero periodo della prenotazione o per parte di esso, secondo le modalità di cui al punto precedente, le somme versate a titolo di conferma della prenotazione saranno trattenute totalmente o parzialmente a titolo di penale.<br />
                   
                   13) Tenuta Ricco pubblicizza sul proprio sito e su internet la propria struttura, per cui gli ospiti hanno la possibilità di visionare la location e le stanze in modo dettagliato tramite video e foto presenti sul web. Pertanto non è ammesso rimborso qualora l'ospite non voglia restare una volta arrivato in struttura, o chieda per qualsiasi motivo il rimborso totale o parziale di una prenotazione confermata.
               </p>
             </div>             
          </Col>
          <Col md={1}>
          </Col>
        </Row>
      </Container>
      <Footer/>
      </>
    )
}



export default TerminiECondizioni