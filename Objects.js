//  we can declare objects with using 2 methods: 1. object literal(multiple instances) , 2.constructor (singleton)

// Singleton
// Object.create

// object literal
const JsUser={key:"value"} // by default jo key h use system as a string process krta h isly jb hm access krte h kisi object key ko we use it as in doble quotes "key"
// object declaration--
const User={
name:"Pranjal",
email:"bandwwalPranjall@google.com",
loginStatus:false,
lastLoginDays:["moday","wednesday","saturday"]
}
// object access
// console.log(User["email"]); //reccomanded way
// console.log(User.email);// also access this way

//take a symbol as an object key and print it//IMP as INTERVIEW prespective 
const mysymbol=Symbol("asKey")
const User1={
    name:"Pranjal",
    [mysymbol]:"Key1",//symbol
    email:"bandwwalPranjall@google.com",
    loginStatus:false,
    lastLoginDays:["moday","wednesday","saturday"]
    }
// console.log(User1[mysymbol]);
// console.log(typeof User1[mysymbol]);

// to change or override an object's key's value:
User1.loginStatus=true
// console.log(User1["loginStatus"]);

// // to lock an object---
// Object.freeze(User1)
// User1.email="bsjchdivdl"
// console.log(User1["email"]);
// console.log(User1);

// to add a key/ value in an object--
User1.fullname="Pranjal Bandwal"
// console.log(User1);

User1.greeting= function(){
    console.log(`Good Morning ${this.fullname}`);
}
console.log(User1.greeting());
