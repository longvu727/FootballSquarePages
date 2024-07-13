import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Stack from 'react-bootstrap/Stack'
import Row from 'react-bootstrap/Row'
import '../css/home.css'
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Board from './Board';


export default function Home() {
  function searchGame(formData) {
    const data = fetch('http://localhost:3101/GetGame/' + formData.get("game_guid")).
                    then((response)=>response.json()).
                    then((json)=> setData(json));
  }

  const [data, setData] = useState(null)

  return <>
  <Container>
    <Row className="justify-content-md-center align-items-center">
      <Col>
        <Form action={searchGame}>
          <Stack gap={2} className="col-md-5 mx-auto">
            <Form.Control type="text" name="game_guid" placeholder="Enter Game GUID" />
            <Form.Control type="text" name="user_guid" placeholder="Enter User GUID" />
            <Button type="submit" variant="primary">GO</Button>
          </Stack>
        </Form>
      </Col>
    </Row>
    <Row> <Board data={data}/> </Row>
  </Container>
  </>
}