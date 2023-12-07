import { signOut,onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { db , auth} from "./config.js";
import { collection, where, addDoc,getDocs, doc ,orderBy, query, Timestamp} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"; 

let arr=[] 
const tittle=document.querySelector('#tittle')
const description=document.querySelector('#description')
const form=document.querySelector('#form')
const div=document.querySelector('#renderdata')

onAuthStateChanged(auth,(user)=>{
if(user){

  const uid=user.uid
  form.addEventListener('submit',(e)=>{
    if(tittle.value===''){

alert('please enter a tittle')
return
    }
    if(description.value===''){
      alert('please enter description')
    return
    }
    render(uid)
    e.preventDefault()
      try {
        const docRef =  addDoc(collection(db, "users"), {
          tittle: tittle.value,
          description: description.value,
          uid:uid,
          postDate: Timestamp.fromDate(new Date()),
        });
        console.log("Document written with ID: ", uid);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      tittle.value=''
      description.value=''  
    
    })
    render(uid)

}else{
window.location='./index.html'

}

})


// render(uid) 


  
async function render(uid){
  arr=[]
 div.innerHTML=''
  const querySnapshot = await getDocs(query(collection(db, "users"),where("uid","==",uid)));
  querySnapshot.forEach((doc) => {
    // console.log(`${doc.id} => ${doc.data()}`);
  arr.push({...doc.data(),docId:doc.id})
console.log(arr);

  });
 arr.forEach((item, index)=>{
div.innerHTML+=`<div class='maindata'><h1 class='mt-5'><b>${item.tittle}</b></h1><div class=' '>${item.description}</div> <br> <div> <button  id="remove" class=" bg-sky-500 w-20 p-2 rounded">Delete</button>
<button id="edit" class=" bg-sky-500 w-20 p-2 rounded">Edit</button></div>`

})}
   








//logout work strt
const logout=document.querySelector('#logout')

logout.addEventListener('click',(e)=>{
  e.preventDefault() 

        signOut(auth)
    
        console.log("signed out");
        window.location='./index.html'
      })
      
      //logout end


