const follow= document.querySelector('#btn-follow')
const unfollow= document.querySelector('#btn-unfollow')
const h5=document.querySelector('h5')
let count=0
follow.addEventListener('click',function(obj){
    if(count==0){
        h5.innerHTML='following'
        h5.style.color='green'
        follow.innerHTML='unfollow'
        follow.style.background='#c04000'
        
        count=1
            }else{
                h5.innerHTML='click to follow'
                h5.style.color='red'
                follow.innerHTML='follow'
                follow.style.background='orange'
                count=0
            }
            
})
// unfollow.addEventListener('click',function(obj){
//     if(count==0){
//         h5.innerHTML='click to follow'
//         h5.style.color='red'
//             }
            
// })