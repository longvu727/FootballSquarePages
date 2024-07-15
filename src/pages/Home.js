import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Stack from 'react-bootstrap/Stack'
import Row from 'react-bootstrap/Row'
import '../css/home.css'
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import Board from './Board';


export default function Home() {
  function startBoard(formData) {
    
    if (formData.get("game_guid")) {
      setGameData(formData.get("game_guid"));
    }

    if (formData.get("user_guid")) {
      setUserData(formData.get("user_guid"));
    }

  }

  const [userData, setUserData] = useState(null);
  const [gameData, setGameData] = useState(null);

  return <>
  <Container>
    <Row className="justify-content-md-center align-items-center">
      <Col>
        <Form action={startBoard}>
          <Stack gap={2} className="col-md-5 mx-auto">
            <Form.Control type="text" name="game_guid" placeholder="Enter Game GUID" />
            <Form.Control type="text" name="user_guid" placeholder="Enter User GUID" />
            <Button type="submit" variant="primary">GO</Button>
          </Stack>
        </Form>
      </Col>
    </Row>
    <Row> 
      { userData && gameData && <Board game={gameData} user={userData}/> }
    </Row>
  </Container>
  </>;
}