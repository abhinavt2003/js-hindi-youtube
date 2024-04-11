//Immediately Invoked Functions Expressions(IIFE)
//kai baar hm nhi chahte ki hm jo global variables likh rhe wo koi problem kre ya kbhi hm aise file likhte hai jisme sirf database connections hote hai aise case me hm IIFE ka use krte hai

//Named IIFE
(function chai(){         //Hmne ( ) se wrap kr diya IIFE krne k lie aur last me () call ke lie
    console.log(`DB CONNECTED`);
}) () ;                     //IIFE ko pta nhi hota ki kbb rukna hai isilie iss syntax me mandatory h aap semi colon de last me

// ()() ->Phle bracket me IIFE function ki definition likhenge aur dusra () execution call ke lie hai

//Interview question
//IIFE ka use hm global scope se jo pollution hoti hai usse htane k lie use kiya

//IIFE with arrow functions
//Unnamed IIFE
( (name) => {
    console.log(`DB Connected 2 ${name}`);
})
("abhinav") ;  //Isko bhi function jaise hi treat krna hai bs ye do kaam ek saath kr rha //Jo bhi isko execute kr rha tha usko value dedi aur argument de diya 


