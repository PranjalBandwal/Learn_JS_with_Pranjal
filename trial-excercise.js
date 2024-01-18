"use-strict"
const newobj={
  a:123,
  b:()=>{
    // console.log(this.a,this);
    console.log(this);
  },
  c(){
    console.log(this.a,this);
  }
}
// newobj["b"];
// newobj.b();//undefined
// newobj.c();

const arrowfunstion= () => {
  const a=10
  const b=9
  return a+b
}
// console.log(arrowfunstion());

const arrowfunstion1= (a,b,...c) => [...c]
console.log(arrowfunstion1(1,2,3,4,5,6,7));

