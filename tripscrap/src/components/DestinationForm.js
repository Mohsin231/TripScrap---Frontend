import Row from "react-bootstrap/esm/Row";
import Form from "react-bootstrap/esm/Form";
import Button from "react-bootstrap/esm/Button";

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
