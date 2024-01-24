// // for loop
// for (let i = 1; i <=10; i++) {
//   // console.log(`outer loop ${i}`);
//   for (let j = 1; j <=10; j++) {
//     // console.log(`inner loop ${j}`);
//     // console.log(`${i}*${j}=`+i*j);
//   }
//   console.log();
// }

const newArray=["Fatima","Alexender","Goli","Jhony"]
for (let index = 0; index <newArray.length; index++) {
  const element = newArray[index];
  // console.log(element);
}


// Break Continue

for (let i = 0; i <=15; i++) {
  if(i==0){
    console.log("0 Detected");
    continue
  }
  if(i==5){
    console.log("5 Detected");
    break
  }
  console.log(i);
  
}