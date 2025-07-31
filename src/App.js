import React from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Home from "./components/home/Home";
import RoomPage from "./components/roomPage/RoomPage";
import RoomFinalBook from "./components/roomFinalBook/roomFinalBook";
import TerminiECondizioni from "./components/termini and privacy/TerminiECondizioni";
import InformativaPrivacy from "./components/termini and privacy/InformativaPrivacy";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room/:roomIndex" element={<RoomPageWrapper />} />
        <Route path="/room-book/:roomId" element={<RoomFinalBook />} />
        <Route path="/termini-e-condizioni" element={<TerminiECondizioni />} />
        <Route path="/informativa-privacy" element={<InformativaPrivacy />} />
      </Routes>
    </BrowserRouter>
  );
}

function RoomPageWrapper() {
  const { roomIndex } = useParams(); 
  return <RoomPage roomIndex={parseInt(roomIndex, 10)} />; 
}




export default App;