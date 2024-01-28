
const arr=[1,2,3,4,5,6,7,8,9,10]

for (const iterator of arr) {
  // console.log(iterator);
}

const abs=["Hello","this","is","Javascript"]
for (const a of abs) {
  // console.log(a);
}

const str="Pranjal Bandwal"
for (const i of str) {
  if(i==" ")continue // space detect hui to skip krdega age wala iteration print hoga
  // console.log(`each character ${i}`);
}

const map=new Map()
map.set('name',"Pranjal")
map.set(1,123)
map.set('name',"Pranjal")// not include duplicates
map.set('name',"Bandwal") // this will override the value
// console.log(map.size);
// console.log(map.get(1));
// console.log(map.get('name'));

for (const [key,value] of map) {
  console.log(value);
}
// map.delete()
console.log(map.size);