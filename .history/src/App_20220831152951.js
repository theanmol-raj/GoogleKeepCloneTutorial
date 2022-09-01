import Homescreen from "./Screens/Homescreen";
import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import { getAuth } from "firebase/auth";
import app from './Firebase'
import { GoogleAuthProvider } from "firebase/auth";


function App() {
  const auth = getAuth(app);
  const [user , Setuser] = useState(true);
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
