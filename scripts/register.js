import { createUserWithEmailAndPassword,onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from "../config.js";
const firstname=document.querySelector('#firstname')
const lastname=document.querySelector('#lastname')
const email=document.querySelector('#email')
const pass=document.querySelector('#password')
const confirmpassword=document.querySelector('#confirmpassword')
const btn=document.querySelector('.btn')
const form=document.querySelector('#form')

onAuthStateChanged(auth, (user) => {
  if (user) {
      window.location = './dashboard.html'
      return
  }
});


form.addEventListener('submit',(e)=>{
e.preventDefault()

  createUserWithEmailAndPassword(auth, email.value, pass.value)
    .then((userCredential) => {
       console.log(email.value)
      const user = userCredential.user;
    console.log(user)
    window.location='dashboard.html'
console.log('login success');

  })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage)
    });


  

})