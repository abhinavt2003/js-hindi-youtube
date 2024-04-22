//Promises

//Jyadatar promises consume hi hote hai
// fetch('https://something.com').then().catch().finally()

const promise1= new Promise(function(resolve,reject){       //Promise ek object hai
    //Do an async task
    //DB calls, cryptography, network calls
    setTimeout(function(){
        // console.log("Async task is complete");
        resolve()   //Resolve aur then() ko connect krna pdega kyunki then() resolve se connected hai //Ab resolve kroge mtlb then function k chlne ka time aa gya hai
    },1000)
})  

promise1.then(function(){   //Consuming promises  // then() ka connection hai resolve ke saath
    // console.log("Promise consumed"); 
})   

//Another syntax
new Promise(function(resolve,reject){     //Resolve aur then ek hi part me kr dia hai iss syntax me 
    setTimeout(function(){
        // console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    // console.log("Async 2 resolved");
})

const promise3= new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "Chai",email: "chai@example.com"})   //resolve k andr jo bhi parameter pass kroge wo hme then() me mil jaata hai aur wha argument pass krke isse use kr skte hai
    },1000)
})
promise3.then(function(user){
    console.log(user);
})

const promise4= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error= true  //true set kroge to catch block run krega
        if(!error){
            resolve({username: "Abhinav", password: "123"})
        }
        else{
            //Rejection ki baat aa gyi 
            reject(`ERROR: Something went wrong`)
        }
    },2000)
})

//Chaining concept
//DataBase connection me ye syntax bhot kaam aayega
promise4
.then((user) => {
    // console.log(user);
    return user.username  //Ye then() ko return krega
})
.then((username) => {
    // console.log(username);
})
.catch(function(error){
    // console.log(error)
})
.finally(() =>{    //promise chahe resolve ya reject ho ye hmesha chlega
    // console.log("Promise is either resolved or rejected");
})

//Async and Await syntax
const promise5= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error= true  //true set kroge to catch block run krega
        if(!error){
            resolve({username: "JavaScript", password: "123"})
        }
        else{
            //Rejection ki baat aa gyi 
            reject(`ERROR: JS went wrong`)
        }
    },2000)
});

//error true set hai mtlb error aayegi ab agr error aayegi to problem aayegi kyunki async/await directly error handle nhi krta hai
//iske lie alg se try/catch block lgana pdega
async function consumeFromPromise5(){   //async aa gya to hm andr await use kr skte hai
    try{
        const response= await promise5 
        // console.log(response);
    }
    catch(error){
        // console.log(error)
    }
}
consumeFromPromise5()


// async function getAllUsers(){
//     try{
//         const response= await fetch('https://jsonplaceholder.typicode.com/users')
//         const data= await response.json()    //Data string me aa rha hai usko json me convert kr do  //json() ka response lene me bhi time lgta hai to hme json ko bhi await krna pdega
//         console.log(data);
//     } catch(error){
//         console.log("E: ",error);
//     }
// }
// getAllUsers()


//Same upr wle kaam ko then/catch se kro
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
}) 
.catch((error) => console.log(error))

//Phli json ka data aa rha hai then async wgrh aa rha. Lekin upr ka code phle run krna tha

// fetch() global function
// Note: This feature is available in Web Workers.

// The global fetch() method starts the process of fetching a resource from the network, returning a promise that is fulfilled once the response is available.

// The promise resolves to the Response object representing the response to your request.

// A fetch() promise only rejects when the request fails, for example, because of a badly-formed request URL or a network error. A fetch() promise does not reject if the server responds with HTTP status codes that indicate errors (404, 504, etc.). Instead, a then() handler must check the Response.ok and/or Response.status properties.

// The fetch() method is controlled by the connect-src directive of Content Security Policy rather than the directive of the resources it's retrieving.