import "./App.scss";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Ingredients from "./routes/ingredients/Ingredients";
import { Container, Nav, Navbar } from "react-bootstrap";
import RecettesListe from "./routes/recettes/RecettesListe";

const App = () => {
  return (
    <>
      <Navbar
        className="navbar navbar-expand-lg navbar-dark bg-primary"
        expand="lg"
      >
        <Container>
          <Navbar.Brand href="/recettes">Application de recettes</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/recettes">Recettes</Nav.Link>
              <Nav.Link href="/ingredients">Ingrédients</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RecettesListe />} />
          <Route path="/ingredients" element={<Ingredients />} />
          <Route path="/recettes" element={<RecettesListe />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
