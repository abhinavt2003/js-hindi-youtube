//Arrow functions and this keyword
const user= {
    username: "hitesh",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to website`);
        // console.log(this);
    }
}

// user.welcomeMessage()
// user.username= "Abhinav"
// user.welcomeMessage()

// console.log(this);  //node code environment me ye empty object btaega aur browser me window btaega

// function chai(){
//     let username="abhinav"
//     console.log(this);  //Bhot se values aayegi
//     console.log(this.username) //Undefined bolega aisa sirf objects me kr skte hai functions me nahi
// }
// chai()

// const chai= function (){
//     let username= "hitesh"
//     console.log(this.username); //undefined bolega
// }

//Arrow functions
// const chai= () => {
//     let username= "abhi"
//     console.log(this.username); //undefined dega
// }

//Pure arrow functions
const addtwo= (num1,num2) => {
    return num1+num2;
}
console.log(addtwo(3,5));

//Implicit return 
const addTwo= (num1,num2) => (num1+num2)    //Isme hm phle {} hta denge aur hmara statement ek hi line ka hona chahie isilie return bhi hta do
//Is syntax me statement curly brackets k jgh normal brackets me wrap krenge agr curly brackets me krenge to return use krna pdega
console.log(addTwo(4,5));

//Object return krna function se
const add= (num1,num2) => ({username:"abhi"}) //object ko return krne k lie ek object ka bhi curly bracket lgana pdega
console.log(add(3,4));

//Kaise use krte hai different jgh pe
const myArray = [2,5,6,8,9,0]
myArray.forEach(function() {})  //forEach loop hai
myArray.forEach(() => {})    //Bs syntax smjh rhe
