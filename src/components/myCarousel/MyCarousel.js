import "./MyCarousel.css"
import Carousel from 'react-bootstrap/Carousel';
import slide1 from "../../assets/img/slides/slide1.jpg"
import slide2 from "../../assets/img/slides/slide2.jpg"
import slide3 from "../../assets/img/slides/slide3.jpg"
import Button from 'react-bootstrap/Button';
import { Container, Row } from "react-bootstrap";




function MyCarousel({ portfolioRef }){

  const handleButtonClick = () => {
    if (portfolioRef && portfolioRef.current) {
      portfolioRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
    return(
      <>
       <Container fluid id="myCarousel">
         <Row> 
           <Carousel>
             <Carousel.Item>
               <img src={slide1} alt="slide1" className="img-slide img-slide-opacity" />
               <Carousel.Caption>
                 <h3 className="carouselH3 mb-5 animated animate__fadeInDown">La tua vacanza nel Salento</h3>
                 <p className="animated animate__fadeInUp">Situata nel cuore del Salento, Tenuta Ricco offre una atmosfera di assoluto relax ed una vacanza a pochi km dalle principali localita' turistiche salentine. La tenuta e' immersa nel verde del suo parco mediterraneo ed e' dotata di piscina a disposizione degli ospiti.</p>
                 <Button onClick={handleButtonClick} className="animated animate__fadeInUp mt-5 " style={{backgroundColor:"#5c9f24" , width:"150px"}} variant="secondary">PRENOTA</Button>{' '}
               </Carousel.Caption>
             </Carousel.Item>
             <Carousel.Item>
               <img src={slide2} alt="slide2" className="img-slide" />
               <Carousel.Caption>
                 <h3 className="carouselH3 mb-5 carouselH3 mb-5 animated animate__fadeInDown">Posizione strategica</h3>
                 <p className="animated animate__fadeInUp">Tenuta Ricco e' in posizione strategica per chi vuole immergersi nella splendida Lecce ed il suo barocco, nelle acque delle piu' belle località balneari del Salento (Otranto, Gallipoli, Castro, Torre dell'Orso, San Foca, Porto Cesareo, Santa Maria al Bagno, Ugento, Santa Maria di Leuca) oppure nella storia millenaria e nel fascino della Grecia Salentina</p>
                 <Button onClick={handleButtonClick} className="animated animate__fadeInUp mt-5 " style={{backgroundColor:"#5c9f24" , width:"150px"}} variant="secondary">PRENOTA</Button>{' '}
               </Carousel.Caption>
             </Carousel.Item>
             <Carousel.Item>
               <img src={slide3} alt="slide3" className="img-slide img-slide-opacity" />
               <Carousel.Caption>
                 <h3 className="carouselH3 mb-5 carouselH3 mb-5 animated animate__fadeInDown">Gli alloggi</h3>
                 <p className="animated animate__fadeInUp">
                 Tenuta Ricco offre tipologie di alloggi per tutte le esigenze: da camere doppie con servizio privato a vere e proprie case vacanza, dotate di aria condizionata, cucina, forno, frigorifero, lavatrice, Wi-Fi, TV e servizi igienici. Sono sempre a disposizione gratuitamente un posto auto e l'accesso alla grande piscina a servizio della struttura.
                 </p>
                 <Button onClick={handleButtonClick} className="animated animate__fadeInUp mt-5 " style={{backgroundColor:"#5c9f24" , width:"150px"}} variant="secondary">PRENOTA</Button>{' '}
               </Carousel.Caption>
             </Carousel.Item>
           </Carousel>
         </Row>
       </Container>
      </>
    )
}



export default MyCarousel