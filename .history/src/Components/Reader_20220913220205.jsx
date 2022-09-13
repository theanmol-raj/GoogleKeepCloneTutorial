import React, { useEffect, useState } from 'react'
import { getFirestore, collection, query, where, onSnapshot } from "firebase/firestore";
import app from '../Firebase';


function Reader() {
    const db = getFirestore(app) ;
    const [notes , SetNotes] = useState([]) ;

    useEffect(()=>{
        const unsubscribe = onSnapshot(collection(db), (querySnapshot) => {
            const cities = [];
            querySnapshot.forEach((doc) => {
                cities.push(doc.data().name);
            });
            console.log("Current cities in CA: ", cities.join(", "));
          });
          
    } ,[db]);




  return (
    <div className=" grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4">

    </div>
  )
}

export default Reader