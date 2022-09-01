import Homescreen from "./Screens/Homescreen";
import { Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAuth, signInWithPopup ,GoogleAuthProvider ,signOut } from "firebase/auth";
import app from './Firebase';
import LoginScreen from "./Screens/LoginScreen";


function App() {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const [user , Setuser] = useState(() => auth.currentUser);

  function SignIn(){
    signInWithPopup(auth, provider)
  .then((result) => {
    const u = result.user;
    Setuser(u);
  }).catch((error) => {
    console.log("error");
    Setuser(null);
  });
  }


  function SignOut(){
    signOut(auth).then(() => {
      Setuser(null);
    }).catch((error) => {
      // An error happened.
    });
  }
  
  useEffect(()=>{
    console.log("Hello Im Working")
  });


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={user ? <Homescreen SO={SignOut} /> : <LoginScreen SI={SignIn} />} />
        <Route path="about" element={<h1>Hello About</h1>} />
      </Routes>
      
    </div>
  );
}

export default App;
