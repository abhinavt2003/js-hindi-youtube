//foreach loop
const coding =["js","ruby","java","python","cpp"]
// //sbse jyada isko kaam me lete hai
// coding.forEach( function (item) {  //foreeach ko ek callback function chahie hota hai aur callback function ka naam nhi hota hai aur is function ka argument likh k ander use kr skte ho
//     console.log(item);
// } )

//arrow function callback
// coding.forEach( (item) => {   //naam aur = hta do kyunki callback function me hm naam hta dete h
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe);  //parameters jaisa pass kr diye function

// coding.forEach( (item,index,arr)=> {  //Hm paramters me item,index,array bhi pass kr skte hai
//     console.log(item,index,arr);
// } )

const myCoding= [
    {
        languageName:"JavaScript",
        languageFileName:"js"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]
myCoding.forEach( (item) => {  //yha pe item hmara object k upr iterate kr rha hai
    console.log(item.languageName);
}  )   //Database me bhot kaam aane wla hai