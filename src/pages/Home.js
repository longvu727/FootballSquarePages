import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Stack from 'react-bootstrap/Stack'
import Row from 'react-bootstrap/Row'
import '../css/home.css'
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


export default function Home() {
    const [formData, setFormData] = useState(null)

    return <>
    <Container>
        <Row className="justify-content-md-center align-items-center">
            <Col>
                <Form method="POST" role="form" >
                    <Stack gap={2} className="col-md-5 mx-auto">
                        <Form.Label>Football Square:</Form.Label>
                        <Form.Control type="text" name="game_guid" placeholder="Enter Game GUID" />
                        <Form.Control type="text" name="user_guid" placeholder="Enter User GUID" />
                        <Button type="submit" variant="primary">GO</Button>
                    </Stack>
                </Form>
            </Col>
        </Row>
    </Container>
    </>
}