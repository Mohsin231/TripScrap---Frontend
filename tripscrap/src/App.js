import "./App.css";

import placeholder from "./placeholderimg.jpg";

import "bootstrap/dist/css/bootstrap.min.css";

import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Card from 'react-bootstrap/Card';

import Button from 'react-bootstrap/Button';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table'



// import { useState } from "react";
// import TripScrap from "./components/tripScrap";
// import Destination from "./components/destination";

// this was below:
// {/* <TripScrap /> */ }
// {/* <Destination /> */}

function App() {
  return (
    <div className="App">
      <div class="side_bar">
        <Container>
          <Row>
            <Button className="round-avatar"></Button>
          </Row>
          <Row>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="What do you want your tripscrap name to be?"
                aria-label="Tripscrap name"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Append>
                <Button variant="dark">Button</Button>
              </InputGroup.Append>
            </InputGroup>
          </Row>
          <Row>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Where do you want to go?"
                aria-label="Tripscrap todo"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Append>
                <Button variant="dark">Button</Button>
              </InputGroup.Append>
            </InputGroup>
          </Row>
        </Container>
        <Container>
          <Table striped bordered hover variant="light">
            <thead>
              <tr>
                <th>to do</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>tripscrap todo placeholder!</td>
              </tr>
              <tr>
                <td>tripscrap todo placeholder!</td>
              </tr>
              <tr>
                <td>tripscrap todo placeholder!</td>
              </tr>
              <tr>
                <td>tripscrap todo placeholder!</td>
              </tr>
              <tr>
                <td>tripscrap todo placeholder!</td>
              </tr>
              <tr>
                <td>tripscrap todo placeholder!</td>
              </tr>
              <tr>
                <td>tripscrap todo placeholder!</td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </div>
      <div class="main_card">
        <Container>
          <Row>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={placeholder} />
              <Card.Body>
                <Card.Title>Chicago</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Button</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={placeholder} />
              <Card.Body>
                <Card.Title>Chicago</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Button</Button>
              </Card.Body>
            </Card>
          </Row>

          <Row>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={placeholder} />
              <Card.Body>
                <Card.Title>Chicago</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Button</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={placeholder} />
              <Card.Body>
                <Card.Title>Chicago</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Button</Button>
              </Card.Body>
            </Card>
          </Row>

          <Row>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={placeholder} />
              <Card.Body>
                <Card.Title>Chicago</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Button</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={placeholder} />
              <Card.Body>
                <Card.Title>Chicago</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Button</Button>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
