// dependencies
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages and components
import Navbar from "./components/Navbar";
import Home from './pages/Home'
import Projects from './pages/Projects';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <div className="pages">
        <Routes>
          <Route 
          path="/"
          element={<Home />}
          />
          <Route
          path="/projects"
          element={<Projects />}
          />
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
