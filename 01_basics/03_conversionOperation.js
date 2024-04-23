let score= "33abc" //Agr value null hogi to 0 aur undefined me undefined aayega

console.log(typeof score)
console.log(typeof(score));

//Conversion krne ki kosis krta hai
let valueInNumber= Number(score)
console.log(typeof(valueInNumber)); //Number
console.log(valueInNumber)  //NaN special type convert nhi hoga

//Different conversion examples
//"33" => 33
//"33abc"=> NaN
//true=> 1; false=> 0;

let isLoggedIn= 1; // " " "abhi" 
let booleanIsLoggedIn= Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

//Kaise convert hori values
//1 => true; 0=> false
//""=> false
//"hitesh"=> true

let someNumber = 33
let stringNumber = String(someNumber);
console.log(someNumber)
console.log(typeof(someNumber))
console.log(typeof stringNumber);