import { Container, Row , Col } from "react-bootstrap"
import "./Pricing.css"
import { FaPhone } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";




function Pricing(){
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToPricing) {
      const pricingSection = document.getElementById("pricing");
      if (pricingSection) {
        pricingSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);


    return(
      <>
        <Container id="pricing" fluid style={{backgroundColor:"white", padding:"50px"}}>
           <Container>
              <div className="section-title">
                 <h2 className="lastMinutesH">LAST MINUTE</h2>
                 <p className="lastMinutesP">
                   In questa sezione trovi i nostri <b>last minute</b>, a prezzi super convenienti. Approfitta subito dell'occasione!
                 </p>
              </div>
              <Row className="gy-4">
                  <Col className="col-md-6 col-lg-3">
                     <div className="lastMinutesGrayBox">
                        <h4> <sup style={{color:"rgb(92, 159, 36)"}}>€</sup> <p className="discountedPrice" style={{color:"rgb(92, 159, 36)"}}>550</p> <span className="realPrice" style={{color:" rgb(186, 186, 186)"}}> invece di €  650</span></h4>
                        <ul>
                          <li className="saveMoney">Risparmi 100 euro</li>
                          <li>Casa vacanza con cucina</li>
                          <li>4 posti letto</li>
                          <li>Wifi</li>
                          <li>Posto auto riservato</li>
                          <li>Biancheria e asciugamani esclusi</li>
                          <li>Ombrellone e due lettini</li>
                          <li>Colazione esclusa</li>
                        </ul>
                        <div className="btn-wrap">
                          <p style={{color:"rgb(92, 159, 36)" , fontSize:"16px", display:"inline-block"}}><FaPhone /></p>
                          <p style={{display:"inline-block"}}><a className="phoneNumber" href="tel:+39 3483751185">+39 3483751185</a></p>
                          <p><a style={{textDecoration:"none"}} href="https://api.whatsapp.com/send/?phone=393483751185&text=Messaggio+a+Tenuta+Ricco+-+Salento+http%3A%2F%2Fwww.tenutaricco.it&type=phone_number&app_absent=0"><FaWhatsapp style={{color:"rgb(92, 159, 36)", fontSize:"20px"}}/><span style={{color:"rgb(92, 159, 36)", fontSize:"16px"}}>Whatsapp</span></a></p>
                        </div>
                     </div>
                  </Col>
                  <Col className="col-md-6 col-lg-3">
                     <div className="lastMinutesGreenBox">
                        <h3 style={{fontSize:"18px" , fontWeight:"600", paddingBottom:"20px"}}>Last minute 7 giorni</h3>
                        <h4> <sup>€</sup> <p className="discountedPrice">300</p> <span className="realPrice"> invece di € 390</span></h4>
                        <ul>
                          <li className="saveMoney">Risparmi 90 euro!</li>
                          <li>Camera con bagno</li>
                          <li>2 posti letto</li>
                          <li>Wifi</li>
                          <li>Posto auto riservato</li>
                          <li>Biancheria e asciugamani esclusi</li>
                          <li>Ombrellone e due lettini</li>
                          <li>Colazione esclusa</li>
                        </ul>
                        <div className="btn-wrap">
                          <p style={{color:"white" , fontSize:"16px", display:"inline-block"}}><FaPhone /></p>
                          <p style={{display:"inline-block"}}><a style={{color:"white"}} className="phoneNumber" href="tel:+39 3483751185">+39 3483751185</a></p>
                          <p><a style={{textDecoration:"none"}} href="https://api.whatsapp.com/send/?phone=393483751185&text=Messaggio+a+Tenuta+Ricco+-+Salento+http%3A%2F%2Fwww.tenutaricco.it&type=phone_number&app_absent=0"><FaWhatsapp style={{color:"white", fontSize:"20px"}}/><span style={{color:"white", fontSize:"16px"}}>Whatsapp</span></a></p>
                        </div>
                     </div>
                  </Col>
                  <Col className="col-md-6 col-lg-3" >
                     <div className="lastMinutesGrayBox">
                        <h4> <sup style={{color:"rgb(92, 159, 36)"}}>€</sup> <p className="discountedPrice" style={{color:"rgb(92, 159, 36)"}}>320</p> <span className="realPrice" style={{color:" rgb(186, 186, 186)"}}> invece di € 400</span></h4>
                        <ul>
                          <li className="saveMoney">Risparmi 80 euro!</li>
                          <li>Casa vacanza con cucina</li>
                          <li>4 posti letto</li>
                          <li>Wifi</li>
                          <li>Posto auto riservato</li>
                          <li>Biancheria e asciugamani esclusi</li>
                          <li>Ombrellone e due lettini</li>
                          <li>Colazione esclusa</li>
                        </ul>
                        <div className="btn-wrap">
                          <p style={{color:"rgb(92, 159, 36)" , fontSize:"16px", display:"inline-block"}}><FaPhone /></p>
                          <p style={{display:"inline-block"}}><a className="phoneNumber" href="tel:+39 3483751185">+39 3483751185</a></p>
                          <p><a style={{textDecoration:"none"}} href="https://api.whatsapp.com/send/?phone=393483751185&text=Messaggio+a+Tenuta+Ricco+-+Salento+http%3A%2F%2Fwww.tenutaricco.it&type=phone_number&app_absent=0"><FaWhatsapp style={{color:"rgb(92, 159, 36)", fontSize:"20px"}}/><span style={{color:"rgb(92, 159, 36)", fontSize:"16px"}}>Whatsapp</span></a></p>
                        </div>
                     </div>
                  </Col>
                  <Col className="col-md-6 col-lg-3" >
                     <div className="lastMinutesGreenBox">
                        <h3 style={{fontSize:"18px" , fontWeight:"600", paddingBottom:"20px"}}>Last minute 7 giorni</h3>
                        <h4> <sup>€</sup> <p className="discountedPrice">620</p> <span className="realPrice"> invece di € 730</span></h4>
                        <ul>
                          <li className="saveMoney">Risparmi 110 euro!</li>
                          <li>Casa vacanza con cucina</li>
                          <li>5 posti letto</li>
                          <li>Wifi</li>
                          <li>Posto auto riservato</li>
                          <li>Biancheria e asciugamani esclusi</li>
                          <li>Ombrellone e due lettini</li>
                          <li>Colazione esclusa</li>
                        </ul>
                        <div className="btn-wrap">
                          <p style={{color:"white" , fontSize:"16px", display:"inline-block"}}><FaPhone /></p>
                          <p style={{display:"inline-block"}}><a style={{color:"white"}} className="phoneNumber" href="tel:+39 3483751185">+39 3483751185</a></p>
                          <p><a style={{textDecoration:"none"}} href="https://api.whatsapp.com/send/?phone=393483751185&text=Messaggio+a+Tenuta+Ricco+-+Salento+http%3A%2F%2Fwww.tenutaricco.it&type=phone_number&app_absent=0"><FaWhatsapp style={{color:"white", fontSize:"20px"}}/><span style={{color:"white", fontSize:"16px"}}>Whatsapp</span></a></p>
                        </div>
                     </div>
                  </Col>
              </Row>
           </Container>
        </Container>
      </>
    )
}


export default Pricing