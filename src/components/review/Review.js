import { Container } from "react-bootstrap"
import "./Review.css"
import ListGroup from 'react-bootstrap/ListGroup';
import { FaCircleUser } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { TbBrandBooking } from "react-icons/tb";
import { SiAirbnb } from "react-icons/si";
import { AiFillGoogleCircle } from "react-icons/ai";






function Review(){
    return(
      <>
        <Container fluid id="review" className="myReview">
          <Container className="mt-5 w-75">
             <div className="section-title">
                <h2 style={{color:"rgb(92, 159, 36)" , fontSize:"32px" , fontWeight:"700", textAlign:"center ", paddingTop:"60px" , paddingBottom:"20px"}}>
                  RECENSIONI
                </h2>
                 <p style={{fontSize:"16px" , fontWeight:"400" , color:"rgb(68, 68, 68)", textAlign:"center", paddingBottom:"10px"}}>
                  Il parere dei nostri ospiti e' molto importante. I commenti positivi ci ripagano del duro lavoro, così come le critiche ci aiutano a migliorare!
                </p>
             </div>
             <div className="faq-list">
                <ListGroup variant="flush">
                  <ListGroup.Item className="mb-3">
                    <div className="d-inline-block">
                      <FaCircleUser className="myIcon pt-4" />
                    </div>
                    <div className="d-inline-block">
                      <b style={{fontSize:"16px"}}>
                        Derek Walz (USA)
                      </b>
                    </div>
                    <div className="d-inline-block ms-1">
                      <FaStar className="myStart" />
                      <FaStar className="myStart" />
                      <FaStar className="myStart" />
                      <FaStar className="myStart" />
                      <FaStar className="myStart" />
                    </div>
                    <p className="comment">
                     La nostra famiglia ha trascorso qui 3 settimane mentre i nostri figli correvano al Kartodromo La Conca. Gli appartamenti hanno superato le nostre aspettative, con arredi moderni e cucina completa. Inoltre avere una lavatrice nell'appartamento e' stato molto utile. La piscina e i giardini privati ​​e recintati sono ben tenuti e molto tranquilli. Torneremo sicuramente a stare qui per la nostra prossima gara al Kartodromo La Conca.
                    </p>
                  </ListGroup.Item>
                  <ListGroup.Item className="mb-3">
                    <div className="d-inline-block">
                      <FaCircleUser className="myIcon pt-4" />
                    </div>
                    <div className="d-inline-block">
                      <b style={{fontSize:"16px"}}>
                        Anna Maria Cantoro
                      </b>
                    </div>
                    <div className="d-inline-block ms-1">
                      <FaStar className="myStart" />
                      <FaStar className="myStart" />
                      <FaStar className="myStart" />
                      <FaStar className="myStart" />
                      <FaStar className="myStart" />
                    </div>
                    <p className="comment">
                     Quando varcherete i cancelli della Tenuta Ricco, troverete un'eccellente struttura dotata di una splendida piscina! Appartamenti nuovissimi e climatizzati, arredati con gusto e dotati di tutti i confort. La Tenuta e' immersa nel verde, con tanti alberi da frutto ed e' situata in posizione strategica per visitare tutto il Salento. Un grazie speciale a Marco, Nicola, Danilo e Mara che ci hanno fatto sentire a casa, perche' qui si respira la famosa accoglienza salentina. Noi ci ritorneremo presto e consigliamo a voi di andarci il prima possibile!
                    </p>
                  </ListGroup.Item>
                  <ListGroup.Item className="mb-3">
                    <div className="d-inline-block">
                      <FaCircleUser className="myIcon pt-4" />
                    </div>
                    <div className="d-inline-block">
                      <b style={{fontSize:"16px"}}>
                        Chiara
                      </b>
                    </div>
                    <div className="d-inline-block ms-1">
                      <FaStar className="myStart" />
                      <FaStar className="myStart" />
                      <FaStar className="myStart" />
                      <FaStar className="myStart" />
                      <FaStar className="myStart" />
                    </div>
                    <p className="comment">
                     Ho prenotato la sera per la mattina dopo e Marco e' stato fin da subito gentile e premuroso. La villetta e' contornata da un ampio giardino. L'apertura di infissi e cancello avviene con un'app, soluzione utilissima! Tutto davvero curatissimo, ma il pezzo forte e' la piscina. Per i bambini e' perfetta perche' non molto profonda. I proprietari vivono accanto e sono molto cordiali. All'interno il monolocale e' molto pulito ed ordinato, gli arredi sono nuovi, c'e' anche la lavatrice. E' stato difficile ripartire, ma torneremo!!!
                    </p>
                  </ListGroup.Item>
                  <ListGroup.Item className="mb-3">
                    <div className="d-inline-block">
                      <FaCircleUser className="myIcon pt-4" />
                    </div>
                    <div className="d-inline-block">
                      <b style={{fontSize:"16px"}}>
                        Giuseppe Di Giacomo
                      </b>
                    </div>
                    <div className="d-inline-block ms-1">
                      <FaStar className="myStart" />
                      <FaStar className="myStart" />
                      <FaStar className="myStart" />
                      <FaStar className="myStart" />
                      <FaStar className="myStart" />
                    </div>
                    <p className="comment">
                      Siamo rimasti sbalorditi dalla gentilezza, accoglienza e competenza del Sig.Marco. Abbiamo conosciuto anche i titolari della Tenuta Ricco ed anche loro sono il top, per accoglienza e disponibilita' ricevuta. La Tenuta e' uno spettacolo in tutto (alloggi, piscina, spazio verde, parcheggio, pulizia e tranquillita'). Cosa dire, e' stato amore a prima vista!!!! Sicuramente ritorneremo!!!! Grazie di tutto. Dalla famiglia di Antonio Di Giacomo.
                    </p>
                  </ListGroup.Item>
                  <ListGroup.Item className="mb-3">
                    <TbBrandBooking className="socialMediaIcon" />
                    <p className="socialMedia">
                      Leggi le nostre recensioni su <a style={{color:"rgb(0, 76, 184)" , fontWeight:"500" , textDecoration:"none"}} href="https://www.booking.com/hotel/it/tenuta-ricco.it.html#tab-reviews">Booking</a>
                    </p>
                  </ListGroup.Item>
                  <ListGroup.Item className="mb-3">
                    <SiAirbnb style={{color:"rgb(255, 90, 96)"}} className="socialMediaIcon" />
                    <p className="socialMedia">
                      Leggi le nostre recensioni su <a style={{color:"rgb(255, 90, 96)" , fontWeight:"500" , textDecoration:"none"}} href="https://www.airbnb.it/rooms/706332323735631867/reviews?adults=1&children=0&infants=0&check_in=2022-10-01&check_out=2022-10-06&federated_search_id=10ccfb25-b373-49bd-ac37-b68921cba4f8&source_impression_id=p3_1664009063_R90DrLM7shCxLYSU&scroll_to_review=712849608068642526">Airbnb</a>
                    </p>
                  </ListGroup.Item>
                  <ListGroup.Item className="mb-3">
                    <AiFillGoogleCircle className="socialMediaIcon" />
                    <p className="socialMedia">
                      Leggi le nostre recensioni su <a style={{color:"rgb(66, 133, 244)" , fontWeight:"500" , textDecoration:"none"}} href="https://www.google.com/search?sca_esv=8107429ce6c6ef59&rlz=1C5CHFA_enIT1023IT1023&sxsrf=ACQVn0_eOZWkRHPKOr-QRLWJIIiP3u70jw:1709316231442&q=tenuta+ricco+google+mybusiness&uds=AMwkrPs1hI3ZDRUlUIrXGO7pjUmofV8eAJjzWOc0TgNuNdu2hZkAYay-0pbGsRzsVk20FdSWKKuqDJpr9S6xuVoK4-YlFiSc7z0J0gL84hvFyEpCSdFmUANImEUvqpG7P8AAzOa6E0Mq-vUGpURawE-1tN6-MilL7w&si=AKbGX_rcuucMgom2rba1cdwsvM2SVoIkP2btyqGMV4t0GuHIs4sGV_1tpuqR0YHG4Rzd9SeyQnyWz4Updeee2UYhkbdpBWON106hnKh6McvMyCCeI7EsYhc%3D&sa=X&ved=2ahUKEwi0paKW09OEAxX9XvEDHc3cAW4Q3PALegQIFBAE&biw=1467&bih=831&dpr=2">Google</a>
                    </p>
                  </ListGroup.Item>
                </ListGroup>
             </div>
          </Container>
        </Container>
      </>
    )
}


export default Review