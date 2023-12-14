import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from "./config.js";


onAuthStateChanged(auth, (user) => {
        if (user) {
            window.location = './dashboard.html'
            
        }
        else{
            window.location='./index.html'
        }
      });
      