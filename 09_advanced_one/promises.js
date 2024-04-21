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
        let error= true;
        if(!error){
            resolve({username: "Abhinav", password: "123"})
        }
        else{
            //Rejection ki baat aa gyi 
            reject(`ERROR: Something went wrong`)
        }
    },2000)
})

const username= promise4.then((user) => {
    console.log(user);
    return user.username
})
console.log(username);