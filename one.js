let btn1=document.getElementById("btn1");

let username=document.getElementById("username");
let password=document.getElementById("password");

function storeData(){
    username=document.getElementById("username").value;
    let pwdValue=password.value;

    btn1.textContent="clicked";
    localStorage.setItem("userName",username);
    localStorage.setItem("password",pwdValue);

    window.location="home.html";
    

}
    let getValue=localStorage.getItem("userName");
    let getpwd=localStorage.getItem("password");
    if(getValue===null || getpwd===null){
        username.value="";
        password.value="";
        
    }
    else{
        username.value=getValue;
        password.value=getpwd;
    }