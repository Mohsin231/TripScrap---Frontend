import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function TripScrapName() {
  

  return (
    <Row className="adding-margin">
      <Form>
        <Form.Group controlId="tripscrap-name">
          <h3>TripScrap Name:</h3>
          <Form.Control
            type="text"
            placeholder="Put name here."
          />
          <Button variant="dark">Button</Button>
        </Form.Group>
      </Form>
    </Row>
  );
}
