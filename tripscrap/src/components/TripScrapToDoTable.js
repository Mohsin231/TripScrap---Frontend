import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";



export default function TripScrapToDoTable({
  title,
  taskData,
  deleteTodo,
  updateTodo,
}) {
  const findTodo = taskData.map((task) => {
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
              <td>
                {task.title}
                <Button
                  onClick={() => {
                    deleteTodo(task);
                  }}
                            >Delete
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  });

  return <div>{findTodo}</div>;
}
