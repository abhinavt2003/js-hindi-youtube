const user= {    //In JS object literal is object and it is the most basic unit, like we have classes in Java we have this in JS
    username: "abhinav",
    loginCount: 8,
    signedIn : true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);  //Ye agr browser me kroge to window object milta hai

const user2= {    //In JS object literal is object and it is the most basic unit, like we have classes in Java we have this in JS
    username: "abhinav",
    loginCount: 8,
    signedIn : true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        // console.log(this);
    }
}

//Constructor function  //new keyword nya context bnane me kaam aata hai aur isiko constructor function khte hai
// const promiseOne= new Promise
// const date= new Date()
function User(username,loginCount,isLoggedIn){
    this.username= username;   //this blank object hota hai ab isme this. krke values daalte jao
    this.loginCount= loginCount

    this.greetings= function(){
        // console.log(`Welcome ${this.username}`);
    }

    // return this   Implicitely return hota hi hai jrurat nhi hai krne ki
}

const userOne= User("abhinav",14,true)
// console.log(userOne);

const userTwo= User("Tiwari",13,false) //userTwo ne userOne ki values overwrite kr di
// console.log(userOne);   //Isilie hme new keyword lgana pdega

const user1=  new User("abhinav",14,true)
// console.log(user1);
const userTw= User("abhinav",14,true)
// console.log(user1);
// console.log(userTw);

//new keyword use krte hi empty object create hota hai jisse instance bolte hai
//Step1: Nya object create ho jaega
//Step2: Constructor function call hoga new keyword k karan
//Step3: Jo bhi arguments likhe hai wo this me inject ho jaate hai
//Step4: Function k ander mil jaega

//constructor
const u1= new User("abhi",14,true)
console.log(u1.constructor);         //apne baare me hi btaega ki u1 kya hai ek function hai User ka


//instanceof operator
function Car(make,model,year){
    this.make= make;
    this.model= model;
    this.year=year;
}
const auto= new Car('Honda','Accord',1990)

console.log(auto instanceof Car);
//Expected Output: true
console.log(auto instanceof Object);
// Expected Output : true