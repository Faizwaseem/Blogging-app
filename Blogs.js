import{collection,getDocs,} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
import { auth,db } from "./config.js";



const date=new Date().toLocaleTimeString();
const headblog=document.querySelector('.headblog')


const time = +date.slice(0, 2)
const format = date.slice(9);
console.log(format);
console.log(time);

if(time > 6 && time < 12 && format ==='AM'){
headblog.innerHTML+=`Good Morning Readers`
console.log('Good Morning');
}
else if(time >12 && time < 4 && format ==='PM' ){
  headblog.innerHTML+=`Good AfterNoon Readers`

console.log('Good AfterNoon');

}

else if(time >4 && time < 8 && format ==='PM' ){
  headblog.innerHTML+=`Good Evening Readers`

  console.log('Good Evening');
  
  }
  

  else{
    headblog.innerHTML+=`Good Night Readers`

    console.log('Good Night');
    
    }
    



const div=document.querySelector('#renderdatablogs')
let arr=[]














async function render(){
  arr=[]
 div.innerHTML=''
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    // console.log(`${doc.id} => ${doc.data()}`);
  arr.push({...doc.data(),docId:doc.id})
  
});
console.log(arr);
 arr.forEach((item, index)=>{
div.innerHTML+=`<div class='blogsdata'><h1 class='mt-5 text-xl'><b>${item.tittle}</b></h1><div class=' '>${item.description}</div> <br> </div>`

})}
   render()



    





// const querySnapshot = await getDocs(collection(db, "users"));
// querySnapshot.forEach((doc) => {
// //   console.log(`${doc.id} => ${doc.data()}`);
//   arr.push(`${doc.id}=>${doc.data()}`)
//   console.log(arr);
// });














// render()
// async function render(){
//     arr=[]
// //    div.innerHTML=''
//     const querySnapshot = await getDocs(query(collection(db, "users")));
//     querySnapshot.forEach((doc) => {
//       console.log(`${doc.id} => ${doc.data()}`);
//     arr.push({...doc.data(),docId:doc.id})
//   console.log(arr);
  
//     });
//    arr.forEach((item, index)=>{
//   div.innerHTML+=`<div class='maindata'><h1 class='mt-5'><b>${item.tittle}</b></h1><div class=' '>${item.description}</div> <br> <div> <button  id="remove" class=" bg-sky-500 w-20 p-2 rounded">Delete</button>
//   <button id="edit" class=" bg-sky-500 w-20 p-2 rounded">Edit</button></div>`
  
//   }
//   )
// }
     