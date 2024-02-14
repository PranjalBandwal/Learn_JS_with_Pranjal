const follow=document.querySelector("#follow")
const unfollow=document.querySelector("#unfollow")
const isstatus=document.querySelector("h5")
follow.addEventListener("click",function(){
    isstatus.innerHTML = "Following"
    isstatus.style.color= "green"
})
unfollow.addEventListener("click",function(){
    isstatus.innerHTML = "Follow Mountains"
    isstatus.style.color= "Red"
})