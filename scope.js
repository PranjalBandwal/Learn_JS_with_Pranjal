let a=300 //globle scope
var b=300 //globle scope
if(true){// in the block each variable is in block scope or local scope
  let a=30
  var b=20
  const c=10
  console.log("Inner a:",a);
}
console.log(a)//both variables are different
console.log(b)//kuki hmne var ko badme nayi value dedi 
// console.log(c)