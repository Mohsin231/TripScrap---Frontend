import React, { useState, useEffect } from 'react';

import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function TripScrapName({initialName, changeName}) {
  

  return (
    <Row className="adding-margin">
      <Form>
        <Form.Group controlId="tripscrap-name">
          <h3>TripScrap Name:</h3>
          <Form.Control
            onChange={changeName}
            value={initialName}
            type="text"
            placeholder="Put name here."
          />
          <Button onClick={changeName}variant="dark">Button</Button>
        </Form.Group>
      </Form>
    </Row>
  );
}
