let newdate=new Date()
console.log(newdate);
console.log(newdate.toLocaleDateString());
console.log(newdate.toDateString());
console.log(newdate);


let nydate=Date.now()
console.log(nydate); //milisecond
console.log(nydate/1000); //milisecond to second
console.log(Math.floor(nydate/1000)); //clear point value


console.log(newdate.getDay())
console.log(newdate.getDate())
console.log(newdate.getMonth())
console.log(newdate.getTime())
console.log(newdate.getUTCFullYear())

console.log(newdate.toLocaleString())