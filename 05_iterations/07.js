//
const myNums= [1,2,3,4,5,6,7,8,9,10]

// const newNums=myNums.map( (num) => num+10)  //it automatically return value but if u open the scopes write return 
// console.log(newNums);

//Chaining -> More than one methods at a time
const newNums= myNums
               .map( (num) => num * 10  )  //Yha p chaining hoke array ikkatha ho chuka hai
               .map( (num) => num+1 )      //Isme sb print ho jaata hai ya koi operation ho jaati hai
               .filter( (num) => num>=40 )    //filter ka mtlb ye hota hai ki jo function me true h usi ko lo //filter me true or false wla game hai

console.log(newNums);

