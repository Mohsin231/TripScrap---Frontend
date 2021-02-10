import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import TripScrapToDoTable from "./TripScrapToDoTable";

export default function TodoForm() {
  const [title, setTitle] = useState([]);

  const onChangeTitle = (event) => {
    setTitle({ title: event.target.value });
  };

  const [selectTaskData, setSelect] = useState({});

  const handleUpdate = (event, taskData) => {
    event.preventDefault();
    const updatedTask = { ...taskData, title: event.target.value };
    updateTodo(updatedTask);
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

  // fetch call that has create functionality :
  const url = "http://localhost:3001/todos";

  const createTodo = (event) => {
    event.preventDefault();

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

  const deleteTodo = (taskData) => {
    fetch(`${url}/${taskData._id}`, {
      method: "DELETE",
    }).then((res) => getTripTasks());
  };
  console.log(taskData._id);

  const updateTodo = (taskData) => {
    fetch(`${url}/${taskData._id}`, {
      method: "PUT",
      body: JSON.stringify(title),
    }).then((res) => getTripTasks());
  };

  return (
    <div>
      <Row className="adding-margin">
        <Form onSubmit={createTodo}>
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

      <Row className="adding-margin">
        <Form onSubmit={handleUpdate}>
          <Form.Group controlId="updateTodo">
            <h3>What would you like to update?</h3>
            <Form.Control
              type="title"
              //   handleChange={handleUpdate}
              placeholder="Update plans here."
            />
            <Button
              onClick={() => {
                updateTodo();
              }}
            >
              Update
            </Button>
          </Form.Group>
        </Form>
      </Row>

      <TripScrapToDoTable
        title={title}
        deleteTodo={deleteTodo}
        taskData={taskData}
      />
    </div>
  );
}
