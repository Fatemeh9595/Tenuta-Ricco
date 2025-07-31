import { Col, Container, Row } from "react-bootstrap"
import "./Team.css"



function Team(){
    return(
      <>
        <Container id="team" fluid style={{backgroundColor:"#f1f1f1"}}>
           <Container>
               <section className="section-title">
                 <b className="mb-3" style={{color:"rgb(92, 159, 36)", fontSize:"32px", display:"inline-block"}}>SITI PARTNER</b>
                 <p style={{color:"rgb(68, 68, 68)" , fontSize:"16px" , fontweight:"400px" , marginBottom:"30px"}}>
                  Tenuta Ricco e' presente sui piu' importanti siti di prenotazioni, a garanzia della qualita' del soggiorno offerto ai nostri ospiti.
                </p>
               </section>
               <section className="pb-4">
                  <Row className="pb-5">
                     <Col className="col-xl-3 col-lg-4 col-md-6 gy-3">
                      <div className="member">
                        <img className="img-fluid" src="https://www.tenutaricco.it/site/assets/img/logos/booking_logo.jpeg" alt="" />
                        <div className="member-info">
                          <div className="member-info-content">
                            <h4>Booking</h4>
                            <span>Prenota ora!</span>
                          </div>
                          <div className="social">
                            <a href="https://www.booking.com/hotel/it/tenuta-ricco.it.html">"Vai al sito"</a>
                          </div>
                        </div>
                      </div>
                     </Col>
                     <Col className="col-xl-3 col-lg-4 col-md-6 gy-3">
                      <div className="member">
                         <img className="img-fluid" src="https://www.tenutaricco.it/site/assets/img/logos/airbnb_logo.jpg" alt="" />
                         <div className="member-info">
 
                         </div>
                       </div>
                     </Col>
                     <Col className="col-xl-3 col-lg-4 col-md-6 gy-3">
                      <div className="member">
                         <img className="img-fluid" src="https://www.tenutaricco.it/site/assets/img/logos/google_hotel_logo.jpg" alt="" />
                         <div className="member-info">
 
                         </div>
                       </div>
                     </Col>
                     <Col className="col-xl-3 col-lg-4 col-md-6 gy-3">
                      <div className="member">
                         <img className="img-fluid" src="https://www.tenutaricco.it/site/assets/img/logos/tripadvisor_logo.jpg" alt="" />
                         <div className="member-info">
 
                         </div>
                       </div>
                     </Col>
                  </Row>
               </section>
           </Container>
        </Container>
      </>
    )
}


export default Team