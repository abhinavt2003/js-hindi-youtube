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
    console.log("Inner ",a);
}
console.log("Outer ",a);

//Windows and Node Scope
//Windows ya Google me console me Scope alg hota hai aur Node ya code environment me scope alg hota hai1    