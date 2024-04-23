//Array

const myarr= [0,1,2,3,4,5,true,"hitesh"] // JavaScript arrays are Resizable , can be of mixed type 
const myArr= [0,1,2,3,4,5]              //Object , datatypes with collection of multiple items in a single variable
// console.log(myArr[0]);               //Cannot write it as console.log(myArr["one"])
//Whenver we do copy operations in Arrays it does form Shallow Copy
//Shallow copy is a copy whose properties shares the same reference point
//Means change in copy will be reflected in original

const myHeroes= ["shaktimaan","naagraj"]
const myArr2= new Array(1,2,3,4,5) //We don't apply square brackets in this declaration it will be automatically added
// console.log(myHeroes[0]);

//Array Methods
// myArr.push(6);
// console.log(myArr);
// myArr.pop(); 
// console.log(myArr);

// myArr.unshift(9)  //First place pe 9 insert ho jaega aur baaki elements 1 pos shift ho jaenge //time consuming operation
// console.log(myArr);
// myArr.shift()  // Inserted 9 will be removed
// console.log(myArr);

// console.log(myArr.includes(9)); //Result will be boolean
// console.log(myArr.indexOf(9)); //Returns index of the element

// const newArr= myArr.join() //Adds all the elements of an array into a string, separated by comma
//  console.log(myArr)     // Array format
//  console.log(newArr)    //String format

// console.log(typeof(myArr));  //Object
// console.log(typeof newArr);  //String

//slice, splice

console.log("A ",myArr);

const myn1= myArr.slice(1,3)  //Returns the copy of a section of an array and do not include the second argument
console.log(myn1);            //Do not change the original array take a copy without including second argument
console.log("B ",myArr)

const myn2= myArr.splice(1,3)  //Remove the given section from original array and also alters the original array
console.log(myn2);
console.log("C ",myArr)
