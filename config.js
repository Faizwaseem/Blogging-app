import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { getFirestore  } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";




const firebaseConfig = {
    apiKey: "AIzaSyBmIOd0SHb8RM3S_Yvh73dr-Nbkp1ZsNHs",
    authDomain: "blogging-app-c011e.firebaseapp.com",
    projectId: "blogging-app-c011e",
    storageBucket: "blogging-app-c011e.appspot.com",
    messagingSenderId: "216127997491",
    appId: "1:216127997491:web:80b52e68c9b7f542c9c546",
    measurementId: "G-3314GKR6JN"
  };
  
export const app = initializeApp(firebaseConfig);

 export const auth = getAuth(app);
 export const db = getFirestore(app)