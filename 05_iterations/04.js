//Iterating on objects
const myObj= {
    js: 'javascript',
    cpp: 'c++',
    rb: 'rb',
    swift: 'swift by apple'
}

for (const key in myObj) {
    // console.log(`${key} shortcut is for ${myObj[key]}`);
}

// const programming= ["js","rb","py","java","cpp"]
// for (const key in programming) {
//     console.log(programming[key]);    //forin each keys ko print kr dega //Arrays ki bhi keys hoti hai?...Haan
// }

// const map= new Map()
// map.set('IN', "India")
// map.set('US', "United States of America")
// map.set('FR', "France")
// map.set('IN', "India") 

// for (const key in map) {   //Map is not iterable by this method
//     console.log(key);
// }