import Homescreen from "./Screens/Homescreen";
import { Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAuth, signInWithPopup ,GoogleAuthProvider ,signOut, onAuthStateChanged } from "firebase/auth";
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
    onAuthStateChanged(auth , (us) => {
      if(us) {
        Setuser(us)
      }else{Setuser(null)}
    })
  },[]);


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={user ? <Homescreen user={user} SO={SignOut} /> : <LoginScreen SI={SignIn} />} />
        <Route path="about" element={<AboutScreen />} />
      </Routes>
      
    </div>
  );
}

function AboutScreen(){
  return (<div>
    About
  </div>)
}




export default App;
