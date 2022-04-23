import './App.scss';
import List from './routes/figures/List';
import {

  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <Routes>
    <Route path="/figures" element={<List />} />

</Routes>
  );
}

export default App;
