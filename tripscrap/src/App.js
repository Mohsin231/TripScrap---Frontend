import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import "./App.css";

import TripScrapName from "./components/TripScrapName";
import DestinationForm from "./components/DestinationForm";
import TodoForm from "./components/TodoForm";
import TripScrapToDoTable from "./components/TripScrapToDoTable";
import TripScrapCards from "./components/TripScrapCards";

function App() {
  return ( 
    <div className="App">
      <div className="side_bar">
        <Container>
          <Row className="adding-margin">
            <Button className="round-avatar"></Button>
          </Row>

          <TripScrapName />

          <DestinationForm />

          <TodoForm />
        </Container>

        <Container>
          <TripScrapToDoTable />
        </Container>
      </div>

      <div className="main_card">
        <Container>
          <Row className="adding-margin">
            <TripScrapCards />
          </Row>
        </Container>
      </div>
    </div>
  );
}
export default App;
