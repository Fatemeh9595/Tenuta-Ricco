import { Col, Container, Row } from "react-bootstrap"
import "./Services.css"
import { BsDoorOpen } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { RiParkingBoxLine } from "react-icons/ri";
import { BsLifePreserver } from "react-icons/bs";
import { BsBullseye } from "react-icons/bs";
import { FaWifi } from "react-icons/fa6";
import { BsCurrencyEuro } from "react-icons/bs";
import { BsEggFried } from "react-icons/bs";





function Services(){
    return(
      <>
        <Container id="service">
           <section className="m-5">
             <h2 className="fw-bold text-center" style={{color:"rgb(92, 159, 36)" , fontSize:"32px" , fontFamily:" Roboto, sans-serif"}}>SERVIZI</h2>
             <p className="text-center mt-3" style={{fontFamily:"Open Sans, sans-serif" , fontSize:"16px" , color:"rgb(68, 68, 68)"}}>
               Ecco i servizi (inclusi e opzionali) a disposizione degli ospiti che soggiornano presso la nostra struttura.
             </p>
           </section>
           <Row className="g-5">
              <Col className="col-lg-4 col-md-6 text-center">
                <div className="iconDiv m-auto "><i className="icon"><BsDoorOpen /></i></div>
                <h4 className="mt-4">Alloggi</h4>
                <div className="title"></div>
                <p className="description mt-4">
                  18 posti letto totali suddivisi in 3 case vacanza da 4 o 5 posti letto ciascuna, complete di cucina (con piano cottura, forno, frigorifero, lavatrice), e una camera da 3 posti letto. Tutti gli alloggi sono dotati di TV, aria condizionata e bagno privato con doccia
                </p>
              </Col>
              <Col className="col-lg-4 col-md-6 text-center">
                <div className="iconDiv m-auto"><i className="icon"><HiOutlineShoppingBag /></i></div>
                <h4 className="mt-4">Biancheria</h4>
                <div className="title"></div>
                <p className="description mt-4">
                  Opzionale a pagamento. Vengono forniti: biancheria da bagno per ciascun ospite (telo bagno, asciugamani, ospite), biancheria completa da letto e kit cortesia bagno (bagnoschiuma, saponetta, carta igienica)
                </p>
              </Col>
              <Col className="col-lg-4 col-md-6 text-center">
                <div className="iconDiv m-auto"><i className="icon"><RiParkingBoxLine /></i></div>
                <h4 className="mt-4">Posto auto</h4>
                <div className="title"></div>
                <p className="description mt-4">
                  Ad ogni alloggio e' abbinato un posto auto custodito all'interno della struttura, incluso nel prezzo dell'alloggio
                </p>
             </Col>
              <Col className="col-lg-4 col-md-6 text-center">
                <div className="iconDiv m-auto"><i className="icon"><BsLifePreserver/></i></div>
                <h4 className="mt-4">Piscina</h4>
                <div className="title mt-4"></div>
                <p className="description mt-4">
                  Una grande piscina lunga 15 metri, larga 6 metri e alta 1,40 metri, con una zona dedicata ai piu' piccoli, e' gratuitamente a disposizione degli ospiti della struttura 
                </p>
             </Col>
              <Col className="col-lg-4 col-md-6 text-center">
                <div className="iconDiv m-auto"><i className="icon"><BsBullseye /></i></div>
                <h4 className="mt-4">Tempo libero</h4>
                <div className="title"></div>
                <p className="description mt-4">
                  I nostri ospiti possono opzionalmente prenotare le attivita' presso le strutture che sorgono nelle immediate vicinanze della Tenuta. Ad esempio campo da calcetto, tennis, padel, palestra, equitazione, noleggio biciclette e barche
                </p>
             </Col>
              <Col className="col-lg-4 col-md-6 text-center">
                <div className="iconDiv m-auto"><i className="icon"><FaWifi /></i></div>
                <h4 className="mt-4">Wifi</h4>
                <div className="title"></div>
                <p className="description mt-4">
                  Gli ospiti possono accedere gratuitamente al Wifi disponibile nella struttura, che e' dotata di un sistema di videosorveglianza interna per garantire la sicurezza
                </p>
             </Col>
              <Col className="col-lg-4 col-md-6 text-center">
                <div className="iconDiv m-auto"><i className="icon"><BsCurrencyEuro /></i></div>
                <h4 className="mt-4">Noleggio auto e transfer</h4>
                <div className="title"></div>
                <p className="description mt-4">
                  E' possibile prenotare, previa disponibilita', un'auto per visitare il Salento ed il servizio transfer (da e per stazioni ferroviarie, bus, porti ed aeroporti)
                </p>
              </Col>
              <Col className="col-lg-4 col-md-6 text-center">
                <div className="iconDiv m-auto"><i className="icon"><BsEggFried /></i></div>
                <h4 className="mt-4">Pasti</h4>
                <div className="title"></div>
                <p className="description mt-4">
                  Tenuta Ricco offre una ricca proposta di ristoranti, trattorie, agriturismi dove assaporare i piatti tipici della cucina salentina
                </p>
              </Col>
           </Row>
        </Container>
      </>
    )
}


export default Services