import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import TripScrapToDoTable from "./TripScrapToDoTable";

export default function TodoForm() {
  const [title, setTitle] = useState([]);
  const [complete, setComplete] = useState(false);

  const onChangeTitle = (event) => {
    setTitle({ title: event.target.value });
  };

  const [taskData, setTaskData] = useState([]);

  function getTripTasks() {
    const url = "http://localhost:3001/todos";
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setTaskData(res);
        console.log(res);
      })
      .catch((error) => console.error);
  }
  // console.log(taskData)

  useEffect(() => {
    getTripTasks();
  }, []);

  // console.log(getTripTasks);

  const url = "http://localhost:3001/todos/";

  const onSubmit = (event) => {
    event.preventDefault();
    const tripscrapSchema = {
      title: title,
    };
    console.log(title);

    fetch(url, {
      method: "POST",
      body: JSON.stringify(title),
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setTitle(title);
      })
      .catch((error) => {
        console.log(error);
      });
    getTripTasks();
  };

  return (
    <div>
      <Row className="adding-margin">
        <Form onSubmit={onSubmit}>
          <Form.Group controlId="whatrudoing">
            <h3>What are you going to do there?</h3>
            <Form.Control
              type="title"
              onChange={onChangeTitle}
              placeholder="Put plans here."
            />
            <Button type="submit" variant="dark">
              Button
            </Button>
          </Form.Group>
        </Form>
      </Row>

      <TripScrapToDoTable taskData={taskData} />
    </div>
  );
}
