const follow=document.querySelector("#follow")
// const unfollow=document.querySelector("#unfollow")
const isstatus=document.querySelector("h5")
 count=0
follow.addEventListener("click",function(){
    if(count==0){
        isstatus.innerHTML = "Following"
        isstatus.style.color= "green"
        follow.innerHTML ="Unfollow"
        console.log("h")
        count=1
    }
    else{
        isstatus.innerHTML = "Follow Mountains"
        isstatus.style.color= "Red"
        follow.innerHTML="Follow"
        count=0
    }
})
// unfollow.addEventListener("click",function(){
//     isstatus.innerHTML = "Follow Mountains"
//     isstatus.style.color= "Red"
// })