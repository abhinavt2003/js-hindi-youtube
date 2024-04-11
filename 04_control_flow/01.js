//Logic Control Flow
//if statement
if(true){
    //true hai to execute hoga //false to nhi hoga
}
const isUserLoggedIn = true;
if(isUserLoggedIn){

}

//Comparison operators
// <,>,>=,<=,==(to equals to),!= (not equals to), strict equal ===(it also checks the datatype)
if(2=="2"){ //true condition do not checks the data type
    // console.log("Executed 1");
}
if(2 === "2"){ //false condition data type not same
    // console.log("Executed 2");
}

const temperature =41
// if(temperature<50){
//     console.log(less than 50);
// }
// else{
//     console.log("Temperature greater than 50");
// }
// else keyword --> ya to if execute hoga ya else hoga

// const score =200
// if(score>100){
//     const power= "fly"
//     console.log(`User power ${power}`);
// }

const balance =1000
// if(balance>500) console.log("test");   //Implicit scope //single line 

// if(balance<500){
//     console.log("less than ");
// }
// else if(balance<750){
//     console.log("less than 750");
// }
// else if(balance<900){
//     console.log("less than 900");
// }
// else {
//     console.log("More than 900");
// }

//logical operator
const userLoggedIn= true;
const debitCard= true
const loggedInWithGoogle= true
const loggedInWithEmail= true
// if(userLoggedIn && debitCard){
//     console.log("Allowed to shop");
// }
// if(userLoggedIn && debitCard && (loggedInWithGoogle || loggedInWithEmail)){
//     console.log("Allowed to have discount");
// }

//Nullish Coalescing Operator (??): null undefined
let val1;
// val1= 5 ?? 10           //Kbhi kbhi hme database se do values milti hai us case me specially ye use hota hai
// val1= null??10             //null nhi hoga kyunki yha 10 nhi hota koi function hota hai to values aayi to function me jayegi nhi to null ho jaegi
// val1 = undefined ?? 15         // 15
// val1= null ?? 10 ?? 20     //Phli value jha mil gyi whi assign ho jaega yaani 10

console.log(val1);

//Ternary Operator
// condition ? true : false
// const iceTeaPrice=100
// iceTeaPrice<=80 ? console.log("Less than 80"): console.log("More than 80");;