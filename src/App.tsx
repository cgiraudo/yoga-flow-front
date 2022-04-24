import "./App.scss";
import List from "./routes/figures/List";
import { Routes, Route, BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div className="mt-2">
      <BrowserRouter>
        <Routes>
          <Route path="/figures" element={<List />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
