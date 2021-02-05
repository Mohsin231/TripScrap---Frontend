import placeholder from "./placeholderimg.jpg"; // ignore this, this is just a placeholder image.

// here is the link for getting started with bootstrap: https://react-bootstrap.github.io/getting-started/introduction/

// this is how you import bootstrap globally.
// if it isn't working on your computer, you're going to have to download bootstrap locally with this command:
// npm install react-bootstrap bootstrap

// after installing react, to run everything and see how it looks, do the following:
// if you're not, cd into the src folder.
// once you're in the src folder, run the react app in your browser.

import "bootstrap/dist/css/bootstrap.min.css";

import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";

import "./App.css";

//  This below is the components we had within the app below

// import { useState } from "react";
// import TripScrap from "./components/Tripscrap";
// import Destination from "./components/Destination";

// this was below:
// {/* <TripScrap /> */ }
// {/* <Destination /> */}

function App() {
  return (
    /*
    
    Below you're going to see a lot of different bootstrap elements. You're going to see these (there is a link to the documentation next to it for reference!)

    > <Container> & <Row> | docs: https://react-bootstrap.github.io/layout/grid/ 

    
    > <Button> | docs: https://react-bootstrap.github.io/components/buttons/
    


    > <InputGroup> | docs: https://react-bootstrap.github.io/components/input-group/ 
    


    > <FormControl> | docs: https://react-bootstrap.github.io/components/forms/ 
    


    > <Table> | docs: https://react-bootstrap.github.io/components/table/ 
    
    */

    <div className="App">
      <div class="side_bar">
        {/*  the containers and rows are a part of bootstrap's layout (it's their version of flex)
             here is a link to the documentation for the layout:  https://react-bootstrap.github.io/layout/grid/ */}

        <Container>
          <Row className="adding-margin">
            {/* this below would be the avatar button that when click opens up the user modal (stretch goal) */}
            <Button className="round-avatar"></Button>
          </Row>

          <Row className="adding-margin">
            <h3>Tripscrap Name:</h3>

            <InputGroup className="mb-3">
              {/* this FormControl is where the user would input the name for their Tripscrap. Whatever the user
            inputs here should be a saved value that shows up as the name of their Tripscrap above the cards.
            event.target.value ??? */}
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

          <Row className="adding-margin">
            <h3>Where are you going?</h3>
            <InputGroup className="mb-3">
              {/* this FormControl below is where the user would input their todos. This would be where the main
            functionality goes (ie, whatever the user inputs here would link to our APIs and when entered 
            would show in both our Tripscrap Todo table below and render in the cards.) so our TripScrap component would
            go within here to run the functionality. */}
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
          {/* this is the Tripscrap todo table: */}
          <Table bordered hover className="table-todo">
            <thead>
              <tr>
                <th>Tripscrap Todo:</th>
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
          <Row className="adding-margin">
            {/* these are the cards that would render the incoming information from the InputTodo above.
            the cards are currently static. But I believe we should have the information just rendering
            on these cards first before we start styling and doing ui/ux */}
            <Card style={{ width: "18rem" }} className="adding-margin">
              <Card.Img variant="top" src={placeholder} />
              <Card.Body>
                <Card.Title>Chicago</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="dark">Button</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: "18rem" }} className="adding-margin">
              <Card.Img variant="top" src={placeholder} />
              <Card.Body>
                <Card.Title>Chicago</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="dark">Button</Button>
              </Card.Body>
            </Card>
          </Row>

          <Row className="adding-margin">
            <Card style={{ width: "18rem" }} className="adding-margin">
              <Card.Img variant="top" src={placeholder} />
              <Card.Body>
                <Card.Title>Chicago</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="dark">Button</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: "18rem" }} className="adding-margin">
              <Card.Img variant="top" src={placeholder} />
              <Card.Body>
                <Card.Title>Chicago</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="dark">Button</Button>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
