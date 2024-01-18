// function in object--
// we used 'this' to refer current context

const newobj={
  username:"Pranjal",
  id:123,
  greeting:function(){
    // console.log(`${this.username}, Welcome to the Javascript world`);
    console.log(this)
  }
}
// newobj.greeting()
// newobj.username="Nancy"
// newobj.greeting()
// console.log(newobj)
// console.log(this)

function water(){
  const username="PPPP"
  // console.log(this);
  // console.log(this.username); //undefined bcz we can not access this within a function but with objects we can.
}
water()

const abc=function(){
  let username="PPPP" //undefined can'nt access
  user="LoggedIN" //can access global scop variable bcz i did not define the variable as (let,const,var) it by default takes it as var and 'this' keyword can access this type of variable within a function
  // console.log(this.username);
  // console.log(this.user);
}
abc()

// Arrow function---------------

const newvar= (username) =>{
  // let username="GHJK"
  console.log(username);//we can directly access the variable without using 'this' keyword
  // console.log(this.username);//undefined
  // console.log(this.user);// undefined
  console.log(this);//empty {}
}
newvar("pranjal")