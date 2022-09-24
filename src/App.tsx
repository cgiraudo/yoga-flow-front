import "./App.scss";
import List from "./routes/figures/List";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Ingredients from "./routes/ingredients/Ingredients";
import { Container, Nav, Navbar } from "react-bootstrap";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

const App = () => {
  return (
    <Container className="mt-2">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Application de recettes</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Recettes</Nav.Link>
              <Nav.Link href="#link">Ingrédients</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Ingredients />} />
          <Route path="/figures" element={<List />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
};

//export default withAuthenticator(App);
export default App;
