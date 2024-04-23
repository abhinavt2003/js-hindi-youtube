//Functions
// console.log("A");
// console.log("B");
// console.log("H");
// console.log("I");
// console.log("N");
// console.log("A");
// console.log("V");

//Syntax
function sayMyName(){
    console.log("A");
    console.log("B");
    console.log("H");
    console.log("I");
    console.log("N");
    console.log("A");
    console.log("V");
}

// sayMyName  //Reference
// sayMyName() //Execution

// function addTwoNumbers(number1,number2){ //number1,number2 -> parameters
//     console.log(number1+number2);
// }

function addTwoNumbers(number1,number2){ //If we have to store it in other variable and then print
    // let result= number1+number2;
    // return result
    return number1+number2;
    console.log("Hitesh");   //This will not be printed
}

// addTwoNumbers(3,5) //3 and 5 are arguments
// addTwoNumbers(3,"4")
// addTwoNumbers(3,"a")
// addTwoNumbers(3,null)

const result=addTwoNumbers(4,5)
// console.log(result);

function loginUserMessage(username= "Sam"){ //Default value is "Sam" kuch nhi doge to Sam print krega
    if(username === undefined){ //Or if(!username)
        console.log("Pls enter username");
    }
    else{
        return `${username} just logged in`
    }   
}


// console.log(loginUserMessage("Abhinav"));
// console.log(loginUserMessage()) //Undefined aayega if condition likhni pdegi undefined wli

function calculateCartPrice(val1,val2,...num1){   //... ko hi rest aur spread operator bolte hai
    return num1;
}
console.log(calculateCartPrice(200,400,500,2000));  //Ek parameter hai par argument dher sare hai //Isko solve krne ke lie rest operator hota hai

const user={
    username: "hitesh",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
handleObject(user);
handleObject({         //Directly passing object in function argument
    username: "abhinav",
    price: 899
})

const myNewArray= [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))