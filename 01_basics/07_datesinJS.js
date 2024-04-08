// Dates

let myDate = new Date()
// console.log(myDate.toString()); 
// console.log(myDate.toDateString()); 
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);  //Type of Date is object

// let myCreatedDate = new Date(2023, 0, 23) //Declaring a specific date //Month 0 se start hota hai Javascript me
// let myCreatedDate = new Date(2023, 0, 23, 5, 3) // (Year,Month,date,Hours,Minutes)
// let myCreatedDate = new Date("2023-01-14") // ("YYYY-MM-DD")
let myCreatedDate = new Date("01-14-2023")  //("MM-DD-YYYY")
// console.log(myCreatedDate.toLocaleString());

//Time Stamp in Date
//We can use new or use Date.now() to create timeStamp
//Date.now() present ki date dega
let myTimeStamp = Date.now()

// console.log(myTimeStamp); //Gives time in millisecond from Jan 1970
console.log(myCreatedDate.getTime()); //getTime() will give the exact value in millisecond from Jan 1970
// console.log(Math.floor(Date.now()/1000)); // Date.now() abhi ki date dega divide kro thousands se answer decimal me aayega wo decimal me naa aaye uske lie floor kr do

let newDate = new Date()
console.log(newDate); //Kuch assign na krne pr present ki date dega
console.log(newDate.getMonth() + 1); //getMonth se month mil jaega isme +1 krna hoga kyunki JavaScript me month 0 se start hota hai
console.log(newDate.getDay()); //getDay se day milega

// `${newDate.getDay()} and the time ` //String interpolation se date print kra rhe hai

newDate.toLocaleString('default', { // toLocaleString me bhot se paramters insert kr skte hai apn
    weekday: "long",                //(`Internationalisation`,{object})
})                                  // toLocaleString ko aur customise krne ka tarika