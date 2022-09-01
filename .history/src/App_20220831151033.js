import Homescreen from "./Screens/Homescreen";
import { Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homescreen />} />
        <Route path="about" element={<h1>Hello About</h1>} />
      </Routes>
      
    </div>
  );
}

export default App;
