import { Container } from "react-bootstrap"
import"./Faq.css"
import Accordion from 'react-bootstrap/Accordion';
import { AiOutlineQuestionCircle } from "react-icons/ai";




function Faq(){
    return(
        <>
          <Container id="faq" className="pt-5 w-75 mb-5">
            <div className="section-title">
              <h2 className="mb-4" style={{color:"rgb(92, 159, 36)" , fontSize:"32px" , fontWeight:"700"}}>DOMANDE FREQUENTI</h2>
              <p className="mb-4" style={{color:"rgb(68, 68, 68)" , fontSize:"16px", fontWeight:"400"}}>In questa sezione trovate una breve raccolta delle domande più frequenti che ci vengono poste.</p>
            </div>
            <div className="faq-list">
              <Accordion>
                <Accordion.Item eventKey="0" className="m-3" >
                  <Accordion.Header><AiOutlineQuestionCircle className="questionMark" /><p className="domande">Come si arriva alla Tenuta Ricco?</p></Accordion.Header>
                  <Accordion.Body>
                    <p className="domande-body">La Tenuta Ricco si raggiunge facilmente seguendo queste </p> <span style={{color:"rgb(92, 159, 36)", fontSize:"16px" , fontWeight:"400"}}>indicazioni stradali</span>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className="m-3" >
                  <Accordion.Header><AiOutlineQuestionCircle className="questionMark" /><p className="domande">Come faccio a prenotare un alloggio?</p></Accordion.Header>
                  <Accordion.Body>
                    <p className="domande-body">Per prenotare uno o più alloggi e' possibile verificarne la disponibilita', nell'apposita sezione del sito, per il periodo in cui si intende trascorrere le proprie vacanze nella Tenuta. Si puo' quindi bloccare la prenotazione versando il totale dovuto, seguendo la semplice procedura di prenotazione degli alloggi</p>
                   </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className="m-3" >
                  <Accordion.Header><AiOutlineQuestionCircle className="questionMark" /><p className="domande">Posso disdire una prenotazione?</p></Accordion.Header>
                  <Accordion.Body>
                    <p className="domande-body">E' possibile disdire o modificare una prenotazione gia' effettuata, leggi i nostri</p> <span style={{color:"rgb(92, 159, 36)", fontSize:"16px" , fontWeight:"400"}}>Termini e condizioni</span>.
                   </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" className="m-3" >
                  <Accordion.Header><AiOutlineQuestionCircle className="questionMark" /><p className="domande">Posso raggiungere facilmente le principali località turistiche se alloggio presso la Tenuta Ricco?</p></Accordion.Header>
                  <Accordion.Body>
                    <p className="domande-body">Tenuta Ricco si trova al centro del Salento e rappresenta il luogo ideale da cui partire alla scoperta delle spiagge più belle e delle località turistiche salentine, tutte nel raggio di poche decine di km.</p>
                 </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </Container>
        </>
    )
}


export default Faq