import { signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from "./config.js";

const email=document.querySelector('#email')
const pass=document.querySelector('#password')
const confirmpassword=document.querySelector('#confirmpassword')


onAuthStateChanged(auth, (user) => {
  if (user) {
      window.location = './dashboard.html'
      return
  }
});

const form=document.querySelector('form')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    signInWithEmailAndPassword(auth, email.value, pass.value)
    .then((userCredential) => {
       console.log(email.value)
      const user = userCredential.user;
    console.log(user)
    window.location='./dashboard.html'
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage)
    });

})