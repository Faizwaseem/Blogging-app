import { signOut,onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { db , auth} from "./config.js";
import { collection, addDoc,getDocs } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"; 

let arr=[] 
const tittle=document.querySelector('#tittle')
const description=document.querySelector('#description')
const form=document.querySelector('#form')
const div=document.querySelector('#div')

onAuthStateChanged(auth,(user)=>{
if(user){

  const uid=user.uid
  form.addEventListener('submit',(e)=>{
    if(tittle.value===''){

alert('please enter a tittle')
return
    }
    e.preventDefault()
      try {
        const docRef =  addDoc(collection(db, "users"), {
          tittle: tittle.value,
          description: description.value,
          uid:uid
        });
        console.log("Document written with ID: ", uid);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      
    
    })
    render(uid)

}else{
window.location='./index.html'

}

})




  
async function render(uid){
arr=[]
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    // console.log(`${doc.id} => ${doc.data()}`);
  arr.push({...doc.data(),docId:doc.id})
console.log(arr);

  });
 arr.forEach((item, index)=>{
div.innerHTML+=`<h1><b>${item.tittle}</b></h1><br><div>${item.description}</div>`



 })
}

   










//logout work strt
const logout=document.querySelector('#logout')

logout.addEventListener('click',(e)=>{
  e.preventDefault() 

        signOut(auth)
    
        console.log("signed out");
        window.location='./index.html'
      })
      
      //logout end


