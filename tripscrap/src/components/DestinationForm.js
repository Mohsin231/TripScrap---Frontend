import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function DestinationForm() {

  
  return (
    <Row className="adding-margin">
      <Form>
        <Form.Group controlId="destination">
          <h3>Where do you want to go?</h3>
          <Form.Control type="text" placeholder="Put place here." />
          <Button variant="dark">Search</Button>
        </Form.Group>
      </Form>
    </Row>
  );
}
