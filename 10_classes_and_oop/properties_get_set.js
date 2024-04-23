//Function based Syntax
// function User(email,password){
//     this._email= email
//     this._password= password

//     Object.defineProperty(this,'email',{
//         get: function(){
//             return this._email.toUpperCase()
//         },
//         set: function(value){
//             this._email= value
//         }
//     })

//     Object.defineProperty(this,'password',{
//         get: function(){
//             return this._password.toUpperCase()
//         },
//         set: function(value){
//             this._password= value
//         }
//     })
// }
// const chai= new User("chai@chai.com","chai")
// console.log(chai.email);

//Object based Syntax

const User={
    email: 'h@hc.com',
    password: 'abc',

    get email(){
        return this.email.toUpperCase()
    },
    set email(value){
        this.email= value;
    }
}

const tea= Object.create(User)
console.log(tea._email);