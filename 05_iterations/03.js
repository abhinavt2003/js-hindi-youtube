//for of
//array specific loops
// ["",""]
// [{},{},{}]

// const arr= [1,2,3,4,5]
// for (const num of arr) {
//     console.log(num);
// }

// const greetings= "Hello world"
// for (const greet of greetings) {
//     console.log("Each char is ",greet);
// }

//Maps
//Map holds key-value pairs, and remembers the original insertion order of the keys. Any value(both keys and primitive values) may be used as either a key or a value
//Unique values
const map= new Map()
map.set('IN', "India")
map.set('US', "United States of America")
map.set('FR', "France")
map.set('IN', "India") //This will not be reflected in map stores unique values

// console.log(map);

// for (const key of map) {    //Prints the whole map
//     console.log(key);
// }

for (const [key,value] of map) {    //If you want only key then use [key] or if u want both use [key,value]
    console.log(key, ':- ',value);
}

const myObj={
    'game1':'NFS',
    'game2':'Spiderman'
}
for (const [key,value] of myObj) {    //myObj(object) is not iterable by this method
    console.log(key, ':- ',value);
}
