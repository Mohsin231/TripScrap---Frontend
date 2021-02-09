import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function TodoForm() {
  const [title, setTitle] = useState("");
  const [complete, setComplete] = useState(false);

  const onChangeTitle = (event) => {
    setTitle({ title: event.target.value });
  };

    const url = "http://localhost:3001/todos/newTask"
    
    const onSubmit = (event) => {
        event.preventDefault();
        const tripscrapSchema = {
            title: title,
        };
        console.log(tripscrapSchema);

            fetch(url, {
                method: "POST",
                body: JSON.stringify(tripscrapSchema),
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then((res) => {
                    console.log(res.data);
                    setTitle(title);
                })
                .catch((error) => {
                    console.log(error);
                })
                // setComplete(true);
    }

  //   function postNewTask() {
  //     const url = "http://localhost:3001/todos/newTask";
  //     fetch(url, {
  //       method: "POST",
  //       mode: "cors",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(),
  //     }).then((res) => {
  //       setTaskData(res.data);
  //       console.log(res.data);
  //     });
  //   }

  //   const [taskData, setTaskData] = useState([]);

  //   function getTripTasks() {
  //     const url = "http://localhost:3001/todos";
  //     fetch(url)
  //       .then((res) => {
  //         setTaskData(res.data);
  //       })
  //       .catch((error) => console.error);
  //   }

  //   useEffect(() => {
  //     getTripTasks();
  //   }, []);

  //   console.log(getTripTasks);

  //   // function postNewTask() {
  //   //       const url = "http://localhost:3001/todos/newTask";
  //   //       fetch(url)
  //   //         .then((res) => {
  //   //           setTaskData(res.body);
  //   //           console.log(res);
  //   //         })
  //   //         .catch((error) => console.error);
  //   // }

  //   //   const [taskData, setTaskData] = useState([]);

  //   function postNewTask() {
  //     const url = "http://localhost:3001/todos/newTask";
  //     fetch(url, {
  //       method: "POST",
  //       mode: "cors",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(),
  //     }).then((res) => {
  //       setTaskData(res.data);
  //       console.log(res.data);
  //     });
  //   }

  //   useEffect(() => {
  //     postNewTask();
  //   }, []);

  // function getTripTasks() {
  //   const url = "http://localhost:3001/todos";
  //   fetch(url, {
  //     method: "GET",
  //     mode: "cors",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({}),
  //   })
  //     .then((res) => {
  //       setTaskData(res.data);
  //       console.log(res);
  //     })
  //     .catch((error) => console.error);
  // }

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
    </div>
  );
}
