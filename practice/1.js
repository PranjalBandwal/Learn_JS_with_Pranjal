// Array Manipulation:
// Q1 Write a function that takes an array of numbers as a parameter and returns the sum of all the numbers in the array.
function takearray(array1) {
  let sum=0
  for(let i=1;i<=array1.length;i++)
  {
    sum+=i
  }
  return sum
}
array1=[1,2,3,4,5,6,7,8,9,10]
// console.log(takearray(array1));

  
// Array Filtering:

// Q2 Create a function that takes an array of integers as a parameter and returns a new array containing only the even numbers.

const takearray1= (array2) =>{
  const another_array=[]
  for(let i=1;i<=array2.length;i++){
    if(i%2===0){
      another_array.push(i)
    }
  }
  return another_array
}
// let array2=[1,2,3,4,5,6,7,8,9,10]
// console.log(takearray1([1,2,3,4,5,6,7,8,9,10]));



// Array Modification:

//Q3  Write a function that takes an array of strings and a new string. Add the new string to the end of the array and return the modified array.

const takearray2=(array3)=>{
  // const newstring=prompt("enter a string to add in array hit enter to print the modified array")
  const newstring="i am doing great"
  array3.push(newstring)
  return array3
}
let array3=["hello","this","is","Pranjal","here!","How you doing?"]
// console.log(takearray2(array3));



// Function with Multiple Parameters:

// Q4 Create a function that takes two parameters, an array of names and a name to search for. Check if the given name is present in the array and return a message indicating its presence or absence.

const takearray3=(array4,array5)=>{
  const isinarray=array4.includes(array5)
  return isinarray
}
let array4=["Joey","Monica","Chandler","Phoebe","Ross","Rachel"]
let array5=["Joey"]
// console.log(takearray3(array4,array5));

// Array Iteration:

// Q5. Write a function that takes an array of words and prints each word to the console using a loop.
function takearray4(words){
for(let i=1;i<=words.length;i++){
  console.log(words[i])
}
return
}
let words=["hello","how","are","you?"]
takearray4(words)