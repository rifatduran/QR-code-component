import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import QR from './QR/QR'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<QR />}/>
      </Routes>
    </Router>
  );
}

export default App;
