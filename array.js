const marvel_heros=["Thor","Hulk","spiderman"]
const marvel_heroins=["Nathasha","wonder Woman","Black Widow"]
// console.log(marvel_heroins);
// console.log(marvel_heros.join(marvel_heroins)); // array1 ke har element ko array2 k har element k sth print krega

// console.log(marvel_heros.push(marvel_heroins)) //total elements print krega push krne k bad 
// marvel_heros.push(marvel_heroins)
// console.log(marvel_heros); //array1 m array2 ko as single element push krdiya //push() original array m changes krra h 

// concat() - combines two or more than two arrays and returns a new array without modifying an existing array
const dc=["chai","sbji","chowmin","pasta"]
const ab=["yes","we","can","add","multiple","arrays","with the help of concat()"]
// const all_heros=marvel_heros.concat(marvel_heros,dc,ab)
// console.log(all_heros);


// there is another way and recoomanded way to concat multiple arrays which is ------ SPREAD ARRAY/operator
//  it spreads array's each elements individually
// const new_all_arrays=[...ab,...dc,...marvel_heroins,...marvel_heros]
// console.log(new_all_arrays);

const another_array=[1,2,3,[4,5],6,[7,8,[9,10]],11]
// console.log(another_array);
//we want this array to be flatten means if we want k jo subarrays h wo b single array element m count ho wo .flat() s krskte h
// it Returns a new array with all sub-array elements concatenated with The maximum recursion depth it could be infinity or a fixed depth.
const new_another_array=another_array.flat(1)
const new_another_array1=another_array.flat(0)
const new_another_array2=another_array.flat(Infinity)
// console.log(new_another_array);
// console.log(new_another_array1);
// console.log(new_another_array2);


//the time of data scrapping
// if something is array we use isArray()
// console.log(Array.isArray("Pranjal"));//false bcz it is not an array

// //to convert something into array we use from()
// console.log(Array.from("Pranjal"))// converts the string "pranjal" into an array
// console.log(Array.from({name:"Pranjal"})); //it gives blank [] bcz it couldnot convert the object //INTRESTING POINT 

// instead of using from() we can also use of() for creating a new array with multiple variables
const a=100
let b=570
let c=789
console.log(Array.of(a,b,c));
