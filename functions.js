function add(n1,n2){
  return n1+n2
}
// console.log(add(5,7));
// here Jacob is default value to avoid the undefined situation we can use this 
function username(username="Jacob"){
  // if(!username){
  //   return `enter your name`
  // }
  if(username===undefined){
    return `enter your name`
  }
  return `hello ${username}, you are loggedin`
}
// console.log(username("Pranjal"));
// console.log(username(""));
// console.log(username());


// when we don't know how many parameters are going to be there then we use REST OPERATOR('...')
// this operator coverts values into arrya

function handlemanyparameters(val1,val2,...numbers){
  return numbers
}
console.log(handlemanyparameters(100,200,300,400,500,600));
// here 100 and 200 are for val1 and val2 and rest are for numbers variable


// Functions with Objects-----
 const newobject={
  username:"Pranjal",id:123
 }
 function accessobject(anyobject){
  console.log(`your object values are:\nusername: ${anyobject.username}\tid:${anyobject.id}`);
 }
//  console.log(accessobject(newobject)); right output with undefined bcz the function doesnot return any value it simply prints
//  accessobject(newobject);

// we can also pass the object as argument
// accessobject({username:"Jacob",id:1453})



// Functions with Array-----------
const newarray=[100,200,300,400,500]
function accessarray(anyarray){
  return anyarray[2]
}
// console.log(accessarray(newarray));
// accessarray(newarray);//it gives nothing in output bcz we use return in function and does not print anything

// we can also pass array as the argument--
// console.log(accessarray([200,400,100,500]));