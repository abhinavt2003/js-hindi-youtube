const marvel_heroes= ["thor","Ironman","SpiderMan"]
const dc_heroes= ["superman","flash","batman"]

// marvel_heroes.push(dc_heroes) //Pushes contents of one another into another
// console.log(marvel_heroes);  //Array inside array
// console.log(marvel_heroes[3]); //Array of array

const allHeroes=marvel_heroes.concat(dc_heroes) //Returns a new array after concatenating
// console.log(allHeroes);

//Important //Destructuring of array
//Spread operator
//Isko yaad krne ke lie socho ek glass me paani hai ab glass gir jaega to paani spread ho jaega
const all_new_heroes= [...marvel_heroes,...dc_heroes,...allHeroes] //No limitation for arguments can spread as many you want
// console.log(all_new_heroes);

const another_array= [1,2,3,[4,5,6],7,[6,7],[4,5]]
const real_another_array= another_array.flat(Infinity) //Infinity ki jgh actually hme jitne partitions h hme wo pass krna hota hai
// console.log(real_another_array); //Kai arrays k andr arrays ab flat ho jaega

//Jb hme kisi list ya kisi alg data structures ko hme array me convert krna ho kyunki array ko use krna easy hai
console.log(Array.isArray("Abhinav")); //Checks whether given datatype is array
console.log(Array.from("Abhinav")); //Converts any data type objects strings etc into array

console.log(Array.from({name:"Abhi"}));   //Interesting case it doesnt directly converts it into array // Will see it further how to do it

let score1= 100;
let score2=200;
let score3= 300;

console.log(Array.of(score1,score2,score3)); // can use of instead of from 

