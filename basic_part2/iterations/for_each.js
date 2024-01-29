const lang=["javascript","Java","Python"]
lang.forEach( (items)=>{
// console.log(items);
} )

function one(lang){
  // console.log(lang);
}
lang.forEach(one)

//uses callback function
//callback function does not have any name of it
lang.forEach( function(items){
// console.log(items);
} )


const objInArray=[
  {langName:"Javascript",
  studentId:"1"
  },
  {langName:"Java",
  studentId:"2"
  },
  {langName:"Python",
  studentId:"3"
  },
  {langName:"Javascript",
  studentId:"1"
  }
]
objInArray.forEach( (items)=>{
  console.log(items.langName);
  console.log(items.langName);
  console.log(items.studentId);

} )