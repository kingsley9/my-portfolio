// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_M3eEUaScPv9PtTSCBy_eItA5VctbyPE",
  authDomain: "kokon-13827.firebaseapp.com",
  databaseURL: "https://kokon-13827-default-rtdb.firebaseio.com",
  projectId: "kokon-13827",
  storageBucket: "kokon-13827.appspot.com",
  messagingSenderId: "445530984843",
  appId: "1:445530984843:web:f2580f3607493dd89e9f8e",
};

// Use this to initialize the firebase App
const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const database = getDatabase(app);
export { app, database, ref, set };
