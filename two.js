/*
const firebaseConfig = {
  apiKey: "AIzaSyD6i3lPRLHMmPNdPp4gmqjZIBd1vPIi3yk",
  authDomain: "database-b231e.firebaseapp.com",
  databaseURL: "https://database-b231e-default-rtdb.firebaseio.com",
  projectId: "database-b231e",
  storageBucket: "database-b231e.appspot.com",
  messagingSenderId: "555675844914",
  appId: "1:555675844914:web:0cd8cfa503487e26a4972b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

*/

let getValue=localStorage.getItem("userName");

document.getElementById("head").innerHTML="Hello "+getValue;

let input1=document.getElementById("input1");
let buton=document.getElementById("buton");
let root=document.getElementById("root");
let backbtn=document.getElementById("backbtn");


/*
function addUser(){
  var userName=input1.value;
  firebase.database().ref("/").child(userName).update({
      purpose:"adding room name"
  });

*/

buton.addEventListener("click",function(){
  
    buton.textContent="add again";
    


    let head=document.createElement("button");
    head.textContent=input1.value;
    

    root.appendChild(head);
    let hr=document.createElement("hr");
    root.appendChild(hr)

    

    head.onclick=function(){
      window.location="room.html"
    }

    input1.value="";
   

});

backbtn.addEventListener("click",function(){
  window.location="index.html";
});


