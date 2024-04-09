// const tinderUser= new Object()  //Singleton object
const tinderUser= {}  //Non singleton object

tinderUser.id= "123abc" 
tinderUser.name= "Sam"
tinderUser.isLoggedIn= false


// console.log(tinderUser);

const regularUser= {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}  //Objects inside object

// console.log(regularUser.fullname.userfullname);

const obj1= {1:"a",2:"b"}
const obj2= {3:"a",4:"b"}

// const obj3= {obj1,obj2} //Aisa krne se object k andr object aa jaega jo dikhne me accha nhi lgta
// const obj3= Object.assign({},obj1,obj2)  // Ye array jaisa hi hai combine kr deta pr isme good practice hai aage ek {} lga do

const obj3= {...obj1,...obj2} //spread operator array jaisa
// console.log(obj3);

const users= [                              //Objects inside an Array 
    {
        id:1,
        email:"h@gmail.com"
    },
    {

    },
    {

    },
    {

    }
]

users[1].email       //Accessing objects inside an array

// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); //Gives all the keys of an object 
//Gives an array and we can loop and do other operations, helpful in various operations
// console.log(Object.values(tinderUser)); //GIves all the values of an object

// console.log(Object.entries(tinderUser)); //creates an array of key value pair

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); //Tells whether object have a property of specified name
// console.log(tinderUser.hasOwnProperty('isLogged'));   //true or false


const course={
    coursename: "js in hindi",
    price: "999",
    courseInstructor:"hitesh"
}
// course.courseInstructor
// course.courseInstructor
// course.courseInstructor   //Suppose we have to print this value multiple times then we will use another syntax 

//Destructuring
//Hota kya hai ki baar baar dot operator lgana logo ko pasand nhi aata jo usi kaam ko krne ka alg syntax hai
//Kuch hai nhi bs alg syntax hai pr log isse use krte hai
const {courseInstructor: instructor} = course // courseInstructor: instructor hme ye bta rha hai ki courseInstructor k jgh hm ab instructor naam ka use kr skte hai
//Dhyan ye rkho ki ye naam change ho jaa rha hai alternative name nhi hai

// console.log(courseInstructor);
console.log(instructor);

//Methods in React
// const navbar1 = (props.company) => {

// }
const navbar2= ({company}) => {

}

navbar(company= "hitesh")
//Isme navbar1 me normal dot operator use kiye hai aur navbar2 me destructuring use kiye hai

//API Concept+++++++++++++++++++++++++++++++++++++++++++++++++++++
//Basically jb apna kaam kisi ke sr pe daal dena ho to usko hm API khte hai, Lameman term me agr aap restaurant me jaake koi order krte ho
//To aapki tension ye nhi hai ki order kaise bnega wo API kr lega
//API kuch nhi hai kuch values hai jo Backend se aati hai phle wo XML me aati thi jo ki bhot complex hai, ab values aati hai JSON me

{
    //JSON 
}

// {
//     name: "hitesh",
//     coursename:"js in hindi",
//     price: "free"
// }

//Somrtimes we get API in the form of arrays too
[
    {},
    {},
    {}
]

