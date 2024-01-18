let a=300 //globle scope
var b=300 //globle scope
if(true){// in the block each variable is in block scope or local scope
  let a=30
  var b=20
  const c=10
  console.log("Inner a:",a);
}
// console.log(a)//both variables are different
// console.log(b)//kuki hmne var ko badme nayi value dedi 
// console.log(c)


//  scope in nested functions--
// child function can access parent function's variable but parent function can not access child function's variable
function parent(){
  const username="Pranjal"
  function child(){
    const website="Github"
    // console.log(username);
  }
  // console.log((website)); can not use child's variable
  child()
}
parent()

// scope in nested if-------
if(true){
  const username="Jenny"
  if(username==="Jenny"){
    const website="Github"
    console.log(username)
  }
  console.log(username);
  // console.log(website);
}