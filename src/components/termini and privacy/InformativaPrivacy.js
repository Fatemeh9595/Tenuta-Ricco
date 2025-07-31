import {Container, Row , Col} from "react-bootstrap";
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




function InformativaPrivacy(){

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
                      <p style={{ color: "#323232" }}>Privacy Policy</p>
                    </h1>
                  </Navbar.Brand>
                  <Nav className="justify-content-end flex-grow-1 pe-3 ms-5">
                    <Nav.Link className="m-2 home border-bottom-0" href="#action1">
                      <div>
                        <p className="d-inline-block pe-2" style={{ color: "#5c9f24", fontSize: "16px" }}>
                          Home
                        </p>
                        <span className="d-inline-block" style={{ color: "#444444" }}>
                          /<span style={{ color: "#444444", fontSize: "16px" }} className="ps-2">
                            Privacy Policy
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
            <Row>
                <Col md={7} className="shadow p-5 h-100">
                   <div>
                     <h3>
                        Informativa sulla privacy
                     </h3><hr />
                     <p>
                      <b>
                        ultima modifica: 19/05/2022
                      </b>
                     </p>
                     <Row>
                        <p>
                        Questa pagina contiene l'informativa sulla privacy (Privacy Policy) e l'informativa estesa sull'utilizzo dei cookie (Cookie Policy) aggiornate in base al Regolamento Generale sulla Protezione dei Dati (GDPR- General Data Protection Regulation) n. 679/2016. Puoi ottenere ulteriori informazioni sul GDPR dalla pagina sulla protezione dei dati della Commissione Europea.
                        
                        Informiamo gli Utenti del sito circa le modalità di gestione dello stesso, con riguardo al trattamento dei loro Dati Personali, così come prescritto dall'art. 13 e 14 del Regolamento europeo n.679/2016 – General Data Protection Regulation.
                        
                        La presente informativa rispetta e si conforma pienamente anche alla Raccomandazione n.2/2001, che le autorità europee per la protezione dei dati personali, riunite nel Gruppo istituito dall'art. 29 della direttiva n. 95/46/CE, hanno adottato il 17 maggio 2001 per individuare alcuni requisiti minimi per la raccolta di dati personali online e, in particolare, le modalità, i tempi e la natura delle informazioni che i titolari del trattamento devono fornire agli utenti quando questi si collegano a pagine web, indipendentemente dagli scopi del collegamento.
                        
                        Con la consultazione di questo sito possono essere trattati dati relativi a persone identificate o identificabili.
                        
                        Si specifica che i meccanismi di consenso saranno evidenti, brevi e facilmente comprensibili; se le condizioni originali per cui si è chiesto il consenso dovessero subire modifiche, per esempio se cambiasse lo scopo del trattamento dei dati, sarà richiesto un ulteriore consenso ai sensi del Regolamento Europeo n. 679/2016.
                        
                        Si specifica inoltre che tutti i consensi raccolti saranno oggetto di documentazione tenuta separata e specifiche misure di sicurezza sono osservate per prevenire la perdita dei dati, usi illeciti o non corretti ed accessi non autorizzati. In caso di violazioni, gli utenti interessati saranno tempestivamente avvisati. Vi preghiamo inoltre di segnalarci eventuali anomalie riscontrate, la perdita o il furto delle credenziali di accesso al sito (qualora disponibili).
                        
                        I dati personali non saranno oggetto di diffusione ingiustificata e è riconosciuto l'esercizio dei diritti di cui agli artt. 11-20 del Regolamento europeo n. 679/2016 facendone richiesta al Titolare del trattamento.
                                                
                        </p>
                        <h5>
                          Titolare del trattamento
                        </h5>
                        <p>
                          Tenuta Ricco di De Luca Mara
                          via Montale snc
                          73020 Cursi (LE) - Italia
                          Cell: +39 366 8248613 - Email: tenutaricco@gmail.com
                          Partita Iva: 05049000754
                        </p>
                        <h5>
                          Luoghi (dove i dati raccolti vengono trattati)
                        </h5>
                        <p>
                          I trattamenti connessi ai servizi web di questo sito hanno luogo presso la sede aziendale del Titolare del trattamento, presso la sede della hosting provider e del gestore del sito web e sono curati solo da personale tecnico incaricato del trattamento, oppure da eventuali incaricati di occasionali operazioni di manutenzione, che si impegnano si da subito a rispettare le leggi europee sulla privacy e quanto riportato in questo documento.
                        </p>
                        <h5>
                          Tempi (per quanto tempo i dati raccolti vengono trattati)
                        </h5>
                        <p>
                          I dati sono trattati per il tempo necessario allo svolgimento del servizio richiesto dall'Utente o richiesto dalle finalità descritte in questo documento e comunque al massimo un anno dal conferimento. L'Utente può sempre chiedere l'interruzione del Trattamento o la cancellazione dei dati contattando il Titolare.
                        </p>
                        <h5>
                          Modi (come i dati raccolti vengono trattati)
                        </h5>
                        <p>
                          L'utilizzo dei dati avverrà con modalità idonee a garantire la sicurezza e la riservatezza degli stessi. I dati potranno essere trasmessi a soggetti terzi in forma aggregata e anonima o, in caso di legittima richiesta, all'Autorità Giudiziaria.
                        </p>
                        <h5>
                          Finalità (a quale scopo i dati raccolti vengono trattati)
                        </h5>
                        <p>
                          I dati personali forniti dall'Utente in maniera volontaria (richieste di informazioni, ecc.) sono utilizzati al solo fine di eseguire il servizio o la prestazione richiesta e sono comunicati a terzi solo nel caso in cui ciò sia necessario per ottemperare alle richieste medesime e comunque nel rispetto della normativa vigente sulla privacy e di quanto riportato in questo documento. Salvo diversamente dichiarato, non verranno ceduti a terzi.
  
                          I dati verranno trattati con strumenti informatici/telematici per rispondere alle domande ed ottemperare alle richieste, e per fornire i seguenti servizi, solo se richiesti e previo consenso specifico da indicare espressamente e separatamente dal precedente consenso:
                        </p>
                        <p>
                           inviare newsletter o informative
                           inviare contenuti editoriali, e-book, white paper, guide e monografie
                           partecipare ad eventi
                           inviare iniziative commerciali
                        </p>
                        <p>
                           Per necessità legate al funzionamento ed alla manutenzione, il sito e gli eventuali servizi terzi da esso utilizzati memorizzano cookie e raccolgono log di sistema, ossia file che registrano le interazioni e che possono contenere anche Dati Personali, quali l'indirizzo IP Utente.
                        </p>
                        <h5>
                           Esercizio dei diritti da parte degli Utenti
                        </h5>
                        <p>
                           I soggetti cui si riferiscono i Dati Personali hanno il diritto in qualunque momento di ottenere la conferma dell'esistenza o meno degli stessi presso il Titolare del Trattamento, di conoscerne il contenuto e l'origine, di verificarne l'esattezza o chiederne l'integrazione, la cancellazione, l'aggiornamento, la portabilità, la rettifica, la trasformazione in forma anonima o il blocco dei Dati Personali trattati in violazione di legge, nonché di opporsi in ogni caso, per motivi legittimi, al loro trattamento.
                        </p>
                        <h5>
                           Modifiche a questa Privacy Policy
                        </h5>
                        <p>
                           Il Titolare del Trattamento si riserva il diritto di apportare modifiche alla presente privacy policy in qualunque momento dandone pubblicità agli Utenti su questa pagina. Si prega dunque di consultare spesso questa pagina, prendendo come riferimento la data di ultima modifica indicata in alto. Nel caso di mancata accettazione delle modifiche apportate alla presente Privacy Policy, l'Utente è tenuto a cessare l'utilizzo dei servizi attivati e può richiedere al Titolare del Trattamento di rimuovere i propri Dati Personali. Salvo quanto diversamente specificato, la precedente Privacy Policy continuerà ad applicarsi ai Dati Personali sino a quel momento raccolti.
                        </p>
                        <h5>
                           Reclamo all'autorità competente
                        </h5>
                        <p>
                           Può essere sporto reclamo in relazione al trattamento all'Autorità competente: Garante sulla Protezione dei Dati personali, P.zza di Monte Citorio, 121 – 00186 Roma, Fax: (+39) 06.69677.3785, centralino telefonico: (+39) 06.696771, email: garante@gpdp.it
                        </p>
                     </Row>
                   </div>
                </Col>
                <Col md={1}>
                </Col>
                <Col md={4} className="shadow p-5 mt-4 h-100">
                  <div>
                    <h3>
                      Cookie
                    </h3><hr />
                    <h5>
                      Uso dei cookie
                    </h5>
                    <p>
                      Utilizziamo i cookie per rendere i servizi semplici ed efficienti per gli Utenti che visionano le pagine di questo sito; per chi acconsentirà al loro utilizzo, verranno inserite delle quantità minime di informazioni nei dispositivi in uso, che siano computer e periferiche mobili, in piccoli file di testo denominati “cookie” salvati nelle directory utilizzate dal browser web. Vi sono vari tipi di cookie, alcuni per rendere più efficace l'uso del sito, altri per abilitare determinate funzionalità. Analizzandoli in maniera particolareggiata i nostri cookie permettono di:
                    </p>
                    <p className="fw-bold">
                      memorizzare le preferenze inserite
                      evitare di reinserire le stesse informazioni più volte durante la visita quali ad esempio nome utente e password
                      poter utilizzare alcuni servizi forniti anche da terzi parti, come l'interazione con le reti sociali o la fruizione di mappe o video
                      analizzare l'utilizzo dei servizi e dei contenuti forniti dai siti per ottimizzarne l'esperienza di navigazione e i servizi offerti
                    </p>
                    <h5>
                      Tipologie di Cookie utilizzati
                    </h5>
                    <p className="fw-bold">
                      Cookie Tecnici
                    </p>
                    <p>
                      Questa tipologia di cookie permette il corretto funzionamento di alcune sezioni del Sito. Sono di due categorie, persistenti e di sessione: <br /><br />
                      <span className="fw-bold">persistenti</span>: una volta chiuso il browser non vengono distrutti ma rimangono fino ad una data di scadenza preimpostata <br />
                      <span className="fw-bold">di sessione</span>: vengono distrutti ogni volta che il browser viene chiuso <br /> <br />
                      Questi cookie, inviati sempre dal dominio del sito di navigazione, sono necessari a visualizzare correttamente il sito e in relazione ai servizi tecnici offerti, verranno quindi sempre utilizzati e inviati, a meno che l'utenza non modifichi le impostazioni nel proprio browser (inficiando così la visualizzazione delle pagine del sito).
                     </p>
                     <p className="fw-bold">
                       Cookie analitici
                     </p>
                     <p>
                       I cookie in questa categoria vengono utilizzati per collezionare informazioni sull'uso del sito. Useremo queste informazioni in merito ad analisi statistiche anonime al fine di migliorare l'utilizzo del sito e per rendere i contenuti più interessanti e attinenti ai desideri dell'utenza. Questa tipologia di cookie raccoglie dati in forma anonima sull'attività dell'utenza e su come è arrivata sul sito. I cookie analitici sono inviati dal sito stesso o da domini di terze parti.
                     </p>
                     <p className="fw-bold">
                       Cookie di analisi di servizi di terze parti
                     </p>
                     <p>
                        Questi cookie sono utilizzati al fine di raccogliere informazioni sull'uso del sito da parte degli utenti in forma anonima quali: pagine visitate, tempo di permanenza, origini del traffico di provenienza, provenienza geografica, età, genere e interessi ai fini di campagne di marketing. Questi cookie sono inviati da domini di terze parti esterni ai nostri siti.
                     </p>
                     <p className="fw-bold">
                        Cookie per integrare prodotti e funzioni di software di terze parti
                     </p>
                     <p>
                        Questa tipologia di cookie integra funzionalità sviluppate da terzi all'interno delle pagine del sito come le icone e le preferenze espresse nei social network al fine di condivisione dei contenuti del sito o per l'uso di servizi software di terze parti (come i software per generare le mappe e ulteriori software che offrono servizi aggiuntivi). Questi cookie sono inviati da domini di terze parti e da siti partner che offrono le loro funzionalità tra le pagine del sito.
                     </p>
                     <p className="fw-bold">
                        Cookie di profilazione
                     </p>
                     <p>
                        Sono cookie necessari a creare profili utenti al fine di inviare messaggi pubblicitari in linea con le preferenze manifestate dall'utente all'interno delle pagine del sito. Su questo sito sono utilizzati cookies di profilazione di altre parti e non gestiamo direttamente le preferenze o le scelte degli utenti del sito. Secondo la normativa vigente, non siamo tenuti a chiedere consenso per i cookie tecnici, in quanto necessari a fornire i servizi richiesti.
                     </p>
                  </div>
                </Col>
            </Row>
          </Container>
          <Footer/>
         </>
    )
}



export default InformativaPrivacy