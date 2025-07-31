import { Col , Container, Row } from "react-bootstrap"
import "./Counts.css"
import CountUp from 'react-countup';
import { IoHomeOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { GoSun } from "react-icons/go";
import { BsWater } from "react-icons/bs";



function Counts(){
    return(
      <>
      <Container>
        <Row className="mt-5" >
            <Col className="col-lg-3 col-md-6">
               <IoHomeOutline className="myIcon" />
               <CountUp end={4} className="myCountUp"/>
               <p className="ms-5 ps-3">alloggi disponibili, suddivisi in 3 case vacanza e 1 camera con bagno</p>
            </Col>
            <Col className="col-lg-3 col-md-6 position-relative">
               <IoPersonOutline className="myIcon" />
               <CountUp end={18} className="myCountUp"/>
               <p className="ms-5 ps-3">ospiti contemporaneamente in struttura</p>
            </Col>
            <Col className="col-lg-3 col-md-6 position-relative">
               <GoSun className="myIcon"  />
               <CountUp end={600} className="myCountUp"/>
               <p className="ms-5 ps-3">Kw prodotti all'anno dall'impianto fotovoltaico</p>
            </Col>
            <Col className="col-lg-3 col-md-6 position-relative">
               <BsWater className="myIcon" />
               <CountUp className="myCountUp"/>
               <p className="ms-5 ps-3">litri di acqua calda al giorno prodotti in estate dall'impianto solare termico</p>
            </Col>
          </Row>
      </Container>
      </>
    )
}


export default Counts