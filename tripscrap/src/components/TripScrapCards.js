import React from 'react'
import Card from 'react-bootstrap/esm/Card'
import Button from 'react-bootstrap/esm/Button'
import placeholder from "../placeholderimg.jpg";


export default function TripScrapCards() {
    return (
      <div>
        <Card style={{ width: "18rem" }} className="adding-margin">
          <Card.Img variant="top" src={placeholder} />
          <Card.Body>
            <Card.Title>Chicago</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="dark"> Button</Button>
          </Card.Body>
        </Card>
      </div>
    );
}
