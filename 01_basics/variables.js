// variables ko declare krne ke do tarike hai const and var/let
//var hm use nhi krte kyunki usme functional aur block scope defined nhi hota hai
//const and let memory space create kr deta hai
const accountId= 144553
//const ki value change nhi hoti hai
let accountEmail= "abhinavt1606@gmail.com"
var accountPassword= "12345"
accountCity= "Jaipur" 

let accountState;//Bina const aur let use kiye bina kr skte hai but it is a bad practice. By default undefined store krega account state me

// accountId= 2 // Not allowed to alter const variables 

accountEmail= "hchc@gmail.com"
accountPassword= "211211"
accountCity= "bangalore"
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
console.log(accountId);