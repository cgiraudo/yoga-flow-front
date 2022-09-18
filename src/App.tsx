import "./App.scss";
import List from "./routes/figures/List";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Ingredients from "./routes/ingredients/Ingredients";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <Container className="mt-2">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Ingredients />} />
          <Route path="/figures" element={<List />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
};

export default App;
