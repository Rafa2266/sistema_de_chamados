import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBlBhpkJjR_MXhjFUMB5pcpqaHisdY7fKI",
    authDomain: "tickets-72c3f.firebaseapp.com",
    projectId: "tickets-72c3f",
    storageBucket: "tickets-72c3f.appspot.com",
    messagingSenderId: "494341537840",
    appId: "1:494341537840:web:dda88e7e909690cf286df5",
    measurementId: "G-0XGDLLTM26"
  };

  const firebaseApp=initializeApp(firebaseConfig);
  const auth= getAuth(firebaseApp);
  const db =getFirestore(firebaseApp);
  const storage=getStorage(firebaseApp);

  export{db, auth, storage}