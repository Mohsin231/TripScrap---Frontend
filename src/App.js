import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/esm/Button";
import Row from "react-bootstrap/esm/Row";
import "./App.css";

import TripScrapName from "./components/TripScrapName";
import DestinationForm from "./components/DestinationForm";
import TodoForm from "./components/TodoForm";
import TripScrapCards from "./components/TripScrapCards";

function App() {
  return (
    <div className="App">
      <div className="side_bar">
        <Container>
          <Row className="adding-margin">
            <Button className="round-avatar"></Button>
          </Row>
          <TodoForm />
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
