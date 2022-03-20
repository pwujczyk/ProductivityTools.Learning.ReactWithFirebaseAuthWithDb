import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login.js"

function Test() {
  return (
      <div>
          pawel
      </div>
  );
}

function App() {
  return (

    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Test />} />
        </Routes>
      </Router>
    </div>
  );
}



export default App;
