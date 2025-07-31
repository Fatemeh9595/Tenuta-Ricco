import { Container, Row, Col } from "react-bootstrap"
import "./Clients.css"
import logoEuropa from "../../assets/img/logos/logo_europa.png"
import logoGalLevante from "../../assets/img/logos/logo_gal_levante.png"
import logoPugliaPromo from "../../assets/img/logos/logo_puglia_promo.jpeg"
import logoLeader from "../../assets/img/logos/logo_leader.png"
import logoPsr from "../../assets/img/logos/logo_psr.png"
import logoRegPuglia from "../../assets/img/logos/logo_reg_puglia.jpg"






function Clietns(){
    return(
      <>
        <Container fluid style={{backgroundColor: "#dcd6d6"}}>
            <Container>
                <Row className="mt-4 p-5 g-4">
                  <Col className="col-6 col-md-4 col-lg-2  d-flex justify-content-center align-items-cente">
                     <img className="img-fluid smallBrands" src={logoEuropa} alt="" />
                  </Col>
                  <Col className="col-6 col-md-4 col-lg-2  d-flex justify-content-center align-items-cente">
                     <img className="img-fluid smallBrands" src={logoGalLevante} alt="" />
                  </Col>
                  <Col className="col-6 col-md-4 col-lg-2  d-flex justify-content-center align-items-cente">
                     <img className="img-fluid smallBrands" src={logoPugliaPromo} alt="" />
                  </Col>
                  <Col className="col-6 col-md-4 col-lg-2  d-flex justify-content-center align-items-cente">
                     <img className="img-fluid smallBrands" src={logoLeader} alt="" />
                  </Col>
                  <Col className="col-6 col-md-4 col-lg-2  d-flex justify-content-center align-items-cente">
                     <img className="img-fluid smallBrands" src={logoPsr} alt="" />
                  </Col>
                  <Col className="col-6 col-md-4 col-lg-2  d-flex justify-content-center align-items-cente">
                     <img className="img-fluid smallBrands" src={logoRegPuglia} alt="" />
                  </Col>
               </Row>
            </Container>
        </Container>
      </>
    )
}


export default Clietns