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
    _email: 'h@hc.com',
    _password: 'abc',

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email= value;
    }
}

const tea= Object.create(User)
console.log(tea.email);

//ECMA2022 me # use kr rhe hai jisse us constructor k property ko override nhi kr skte hai, pr abhi ye futuristic cheez hai