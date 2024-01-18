//  Immediately Invoked Function Expressions [IIFE] ----- this runs as soon as it is defined.


// Simple IIFE
((a,b)=>console.log(a+b))(1,2);


// Named IIFE
( function hello(){
  console.log("hello")
})();

(async()=>console.log("hhh"))()