import "./Portfolio.css";
import Nav from 'react-bootstrap/Nav';
import { Col, Container, Row } from "react-bootstrap";
import RoomCard from "../roomCard/RoomCard";
import React, { useState } from "react";
import { roomsData } from "../../roomsData";
import { motion, AnimatePresence } from "framer-motion";

function Portfolio(props, ref) {
  const [roomsInfo] = useState(roomsData);
  const [filter, setFilter] = useState("ALL");

  const handleFilterChange = (filterKey) => {
    setFilter(filterKey);
  };

  const filteredRooms =
    filter === "ALL"
      ? roomsInfo
      : roomsInfo.filter((room, index) => `ALLOGGIO ${index + 1}` === filter);

  return (
    <>
      <Container id="portfolio" ref={ref}>
        <section>
          <h2
            style={{
              fontSize: "32px",
              color: "rgb(92, 159, 36)",
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            ALLOGGI
          </h2>
          <p style={{ textAlign: "center", color: "rgb(68, 68, 68)" }}>
            Abbiamo dotato i nostri alloggi di tutti i comfort per soddisfare ogni esigenza. Qui trovi i video, le foto e la descrizione di tutti gli alloggi.
          </p>
        </section>
        <section className="m-5">
          <Nav
            variant="underline"
            defaultActiveKey="ALL"
            className="justify-content-center align-items-center"
          >
            <Nav.Item>
              <Nav.Link
                style={{
                  backgroundColor: filter === "ALL" ? "rgb(92, 159, 36)" : "white",
                  color: filter === "ALL" ? "white" : "black",
                  borderRadius: "4px",
                  padding: "8px",
                }}
                onClick={() => handleFilterChange("ALL")}
              >
                TUTTI GLI ALLOGGI
              </Nav.Link>
            </Nav.Item>
            {roomsInfo.map((_, index) => (
              <Nav.Item key={index}>
                <Nav.Link
                  className="alloggioButton"
                  style={{
                    backgroundColor:
                      filter === `ALLOGGIO ${index + 1}`
                        ? "rgb(92, 159, 36)"
                        : "white",
                    color:
                      filter === `ALLOGGIO ${index + 1}`
                        ? "white"
                        : "black",
                    borderRadius: "4px",
                    padding: "8px",
                  }}
                  onClick={() => handleFilterChange(`ALLOGGIO ${index + 1}`)}
                >
                  ALLOGGIO {index + 1}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </section>
        <section>
          <Row id="myRoomCard" className="gy-5">
            <AnimatePresence>
              {filteredRooms.map((room, index) => (
                <Col key={index} className="col-lg-3 col-md-6">
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                  >
                    <RoomCard {...room} roomIndex={index} />
                  </motion.div>
                </Col>
              ))}
            </AnimatePresence>
          </Row>
        </section>
      </Container>
    </>
  );
}

export default React.forwardRef(Portfolio);