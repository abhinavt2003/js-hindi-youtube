//Scopes

// { //Scope  }  //Jab { } kisi function, if else loop k saath aata hai tb isko scope bolte hai

// var c= 300   //Global Scope
if(true){
    // let a= 10           //Block scope
    // const b= 20
    // var c= 30
    // d = 40
}

// console.log(a); // Have significance only between 6-8 LOC
// console.log(b); // Have significance only between 7-8 LOC
// console.log(c); // Par ye var hai ye print kr dega 30, isilie var use nhi krte 
// console.log(d); //Ye bhi print kr dega kyunki default me ye var hi le leta hai

let a=300  //Global
if(true){
    let a=30 //Local or Block scope
    const b=20
    // console.log("Inner ",a);
}
// console.log("Outer ",a);

//Windows and Node Scope
//Windows ya Google me console me Scope alg hota hai aur Node ya code environment me scope alg hota hai1  

//Closure in JavaScript
function one(){
    const username= "abhinav" 
    function two(){
        const website= "youtube"
        console.log(username);
    }
    // console.log(website); //Ye error de dega kyunki website defined nhi hai is scope me
    two() //Ye hai to hi username yani abhinav print agr isko call nhi krte to kuch bhi print nhi hota 
}
one() //Isko kuch print nhi hoga kyunki one() function two() ko access nhi kr skta hai

if(true){
    const username= "hitesh"
    if(username==="hitesh"){
        const website= " youtube"
        console.log(username+website);
    }
    // console.log(website); //Scope k bhar hai
}
// console.log(username); //Username ka scope yha nhi hai

//++++++++++++++++++++++++++++++++++++++++ Interesting Example +++++++++++++++++++++++++++++++++++++++++++++++++++

addone(5)
function addone(num){
    return num+1;
}
addone(5); //Isko hm declaration k upr bhi likh skte hai

//Another syntax of function declaration
const addTwo= function(num){
    return num+2
}
addTwo(5) //Isko hm function declaration k upr nhi likh skte hai

//Hoisting -> Ye khta hai declaration se phle hm fuction ko access kr pa rhe hai ya nhi
//Do syntax h function ka ek me kr skte hai aur ek me nhi