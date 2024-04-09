//Objects 
//Can be declared in two ways Literal and constructors
//singleton //Apne trh ka ek hi object hai //Constructor se object bnane pr singleton object bnta hai
//Multiple instances  //Through literals

//symbol declaration
const mySym= Symbol()


// object constructors
Object.create

//object literals 
const JsUser= {
    name:"Hitesh",  //Acts as a key value pair. In first whatever u write it will be treated as string but in second(value) u can give anything
    "full name": "Hitesh CHoudhary" , //Now it cant be access by dot(.) operator
    [mySym]:"myKey1",    //If you want to have it as Symbol datatype you have to write it with [Symbol] //For accessing you have to again have to refer it with []
    age: 18,
    location: "Jaipur",
    email: "hitesh192@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Wednesday"]
}

// console.log(JsUser); //Accessing an object
// console.log(JsUser["email"]);  //Another syntax //Here ["It should be in string format with inverted comma"]

// console.log(JsUser."full name") //Wrong when first is inclusively written in string format then we cant access it through dot operator
// console.log(JsUser["full name"]);  //Its the only way to access full name

// console.log(typeof JsUser.mySym);  //Used to print Symbol which we have declared  
// console.log(JsUser[mySym]);   //For accessing Symbol inside object //Interview related

JsUser.email= "abhinav492@gmail.com"  //Changing the objects
// Object.freeze(JsUser)   //The given object is freezed and will not undergo changes
JsUser.email= "hiteshchatgpt@gmail.com"  //This will not be reflected in object but will not throw error
// console.log(JsUser); //Poora object bta dega with its type

//Interview me puchte hai ki object me Symbol implement kro to agr koi Symbol data type bnake agr direct object me daalne ka kosis kroge 
//Ho to jaega pr wo string hoga typeof krke check kr lena, Agr symbol krna hai to [square bracket] k andr likhna hoga symbol ko
//Access krne ke lie bhi [ ] ka use krna hoga

//Functions add krna hai objects me
JsUser.greeting= function(){
    console.log("Hello Js User");
}

JsUser.greetingTwo= function(){
    console.log(`Hello Js User,${this.name}`); //String interpolation hai isme hm kisi variable ko bhi ${variable} se print kra skte h  //this same object ko reference krta hai 
} //Isme this same object ko reference kr rha hai aur us object ki properties access kr skta hai

console.log(JsUser.greeting());  
console.log(JsUser.greetingTwo());

//Majority cases me hm objects ko dot se access krenge mgr kuch cases jaise Symbol me hme sqr brackets se access krna pdta hai