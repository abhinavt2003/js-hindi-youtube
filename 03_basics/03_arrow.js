//Arrow functions and this keyword
const user= {
    username: "hitesh",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to website`);
        // console.log(this);
    }
}

// user.welcomeMessage()
// user.username= "Abhinav"
// user.welcomeMessage()

console.log(this);