import { Container , Row , Col } from "react-bootstrap"
import "./WhyUs.css"


function WhyUs(){
    return(
      <>
        <Container id="whyUs" fluid className="m-5 pt-5 whyChooseUs">
           <section className="m-5">
              <h2 style={{color:"rgb(92, 159, 36)" , fontSize:"32px" , fontWeight:"bold", textAlign:"center"}}>PERCHE' DA NOI</h2>
              <p style={{textAlign:"center" , color:"rgb(68, 68, 68)"}}>
                Vogliamo suggerirvi tre validi motivi per trascorrere le vostre vacanze presso la Tenuta Ricco
              </p>
           </section>
           <Container>
             <Row className="g-4">
                <Col className="col-lg-4">
                  <div className="box">
                      <span className="myNumber">01</span>
                      <h4 className="myTitle">Posizione strategica</h4>
                      <p className="myText">
                        La Tenuta si trova nel cuore del Salento. In appena 20 minuti si raggiunge il centro storico di Lecce. In solo 15 minuti ci si immerge nelle acque di Otranto o si puo' osservare il mare dalle scogliere di Castro. Siamo ad un passo dai borghi della Grecia Salentina
                      </p>
                  </div>
                </Col>
                <Col className="col-lg-4">
                  <div className="box">
                    <span className="myNumber">02</span>
                    <h4 className="myTitle">Relax assoluto</h4>
                    <p className="myText">
                      Immersa nel verde della tipica campagna salentina, tra ulivi, agrumi e piante aromatiche, Tenuta Ricco offre un'atmosfera di assoluto relax, per ritrovare se' stessi e dimenticare lo stress della vita quotidiana
                   </p>
                  </div>
                </Col>
                <Col className="col-lg-4">
                  <div className="box">
                    <span className="myNumber">01</span>
                    <h4 className="myTitle">Tanti servizi e vacanza green</h4>
                    <p className="myText">
                      I nostri ospiti possono fruire gratuitamente della grande piscina, del posto auto, della connessione Wi-fi. La vacanza e' 100% green, perche' l'energia e l'acqua calda sono ricavati dal sole
                    </p>
                  </div>
                </Col>
             </Row>
           </Container>
        </Container>
      </>
    )
}


export default WhyUs