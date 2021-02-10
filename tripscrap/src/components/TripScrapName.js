import Row from 'react-bootstrap/esm/Row'
import Form from 'react-bootstrap/esm/Form'
import Button from 'react-bootstrap/esm/Button'

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
