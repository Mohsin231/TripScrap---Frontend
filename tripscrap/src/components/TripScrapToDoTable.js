import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";

export default function TripScrapToDoTable(props) {
  const findTodo = props.taskData.map((task) => {
    return (
      <div>
        <Table bordered hover className="table-todo">
          <thead>
            <tr>
              <th>Tripscrap Todo:</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{task.title}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  });

  return <div>{findTodo}</div>;
}
