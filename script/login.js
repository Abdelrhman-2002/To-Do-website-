let username=document.getElementById("loginUserName");
let password=document.getElementById("loginPassword");
let log=document.getElementById("loginButton");
let users=[];
let userIndex;
log.addEventListener("click",function(){
  if(username.value!=''&&password.value!=''){
    users=JSON.parse(window.localStorage.getItem("Users"));
    if(checkUserExistence(users)){
      let user ={ 
        UserIndex: userIndex,
        UserName: username.value
      }
      window.localStorage.setItem("currentUser", JSON.stringify(user));
      username.value="";
      password.value="";
      window.location.href = "../html/tasks.html"
    }else{
      password.nextElementSibling.innerHTML = "incorrect username or password";
      password.nextElementSibling.style.color="red";
      password.value = "";
    }
  }else{
      if(username.value==''){
        username.style.outline = "1px solid red";
      }
      if(password.value==''){
        password.style.outline = "1px solid red";
      }
      password.nextElementSibling.innerHTML = "please enter all the fields";
      password.nextElementSibling.style.color="red";
  }
    
});
function checkUserExistence(users){
    for(let i=0; i<users.length; i++){
      if (users[i].Username==username.value&&users[i].Password==password.value){
          userIndex = i;
        return true;
      }
    }
    return false;
}
