import Homescreen from "./Screens/Homescreen";
import { Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
      <Homescreen />
    </div>
  );
}

export default App;
