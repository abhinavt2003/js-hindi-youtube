//Prototype
let myHero= ["thor","spiderman"]

let heroPower= {
    thor: "hammer",
    spiderman: "sling",
    getSpiderPower: function(){
        // console.log(`Spidey power is ${this.spiderman}`);
    }
}

//object ke ander hi apna function inject kr du
Object.prototype.abhinav= function(){
    // console.log("Abhinav is present in all objects");
}

//Actually me hr cheez object se hokr k gujregi to array/object dono me abhinav ki power hogi, kynuki hmne object ko ye power de di hai
heroPower.abhinav()
myHero.abhinav()

//Agr mai power sirf array ko du to object me bhi by default power chli jaegi ya nhi??

Array.prototype.heyAbhinav= function(){
    // console.log("Abhinav says Hello");
}

myHero.heyAbhinav()
// heroPower.heyAbhinav()  //object me power nhi aayegi agr aap array ko power die ho kyunki ye path me power nhi deta hai


//Inheritance
const user={
    name: "Chai",
    email: "chai@google.com"
}
const teacher= {
    makeVideo: true
}
const TeachingSupport= {
    isAvailable: false
}
const TASupport= {
    makeAssignment: 'JS Assignment',
    fulltime: true,
    __proto__: TeachingSupport    //Connects TeachingSupport with TASupport
}

teacher.__proto__= user   //Outdated approach

//Modern syntax
Object.setPrototypeOf(TeachingSupport,teacher)



let myName="Abhinav         "
console.log(myName.length);
// //Apna alg trueLength likhna hai  //Ye trim se bhi kr skte hai
String.prototype.trueLength= function(){
    console.log(`${this}`);             //myName me reference hi Abhinav ka hai isilie yhi milega
    console.log(`True length is: ${this.trim().length}`);
}

myName.trueLength() //True length is 7

"abhinav".trueLength()
"iceTea".trueLength()