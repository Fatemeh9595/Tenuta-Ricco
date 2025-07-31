import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./RoomCard.css"
import { useNavigate } from "react-router-dom";



function RoomCard({title, roomType, bedNumber , img, roomIndex}){

  const navigate = useNavigate();
  const handleMoreInfoClick = () => {
    navigate(`/room/${roomIndex}`);
  };
    
    return(
        <>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
               <Card.Img className='img-fluid' src={img} />
               <Card.Title> {title} </Card.Title>
               <Card.Text> {roomType} </Card.Text>
               <Card.Text> {bedNumber} </Card.Text>
                <div className='myButtons'>
                  <Button onClick={handleMoreInfoClick} className='piuInfo'>
                     Più info
                    </Button><br />
                   <Button onClick={handleMoreInfoClick} className='roomPrenota'>
                     Prenota
                   </Button>
                </div>
            </Card.Body>
          </Card>
        </>
    )
}



export default RoomCard