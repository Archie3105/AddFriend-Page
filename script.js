let istatus = document.querySelector("h5");
let btn = document.querySelector("#add");
let check=0;

// you can add & remove friend with single button

btn.addEventListener("click",function(){
  if(check==0){
    istatus.innerHTML="Friends";
    istatus.style.color="green";
    btn.innerHTML="Remove Friend"
    btn.style.backgroundColor="red";
    // btn.style.color= "red";
    check=1; 
  }
  else{
    istatus.innerHTML="Stranger";
    istatus.style.color="red";
    btn.innerHTML="Add Friend";
    btn.style.backgroundColor="cadetblue";
    check=0;
  }
})

/*For add & remove both button
let removeFriend=document.querySelector("#remove")

addFriend.addEventListener("click", function () {
  istatus.innerHTML = "Friends";
  istatus.style.color = "green";
});

removeFriend.addEventListener("click", function(){
    istatus.innerHTML="Stranger"
    istatus.style.color="red"
})  */
