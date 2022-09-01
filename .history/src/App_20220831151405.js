import Homescreen from "./Screens/Homescreen";
import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";


function App() {
  const [user , Setuser] = useState(null);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={user ? <Homescreen /> : "Login Please"} />
        <Route path="about" element={<h1>Hello About</h1>} />
      </Routes>
      
    </div>
  );
}

export default App;
