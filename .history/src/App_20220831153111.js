import Homescreen from "./Screens/Homescreen";
import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import { getAuth, signInWithPopup ,GoogleAuthProvider } from "firebase/auth";
import app from './Firebase';


function App() {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const [user , Setuser] = useState(true);

  function SignIn(){
    signInWithPopup(auth, provider)
  .then((result) => {
    const user = result.user;
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
  }

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
