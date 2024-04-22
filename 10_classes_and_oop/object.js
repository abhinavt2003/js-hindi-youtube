function multiplyBy5(num){
    return num*5;
}

multiplyBy5.power= 2

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);     //function() function bhi hai aur object bhi hai
console.log(multiplyBy5.prototype); //prototype jo bhi method hai uska this pointer deta hai

function createUser(username,score){
    this.username= username;
    this.score=score;
}

createUser.prototype.increment= function(){
    this.score++; //Jisne bhi bulaya hai uska score bdha do
}
createUser.prototype.printMe= function(){
    console.log(`Price is ${this.score}`)
}
const chai= new createUser("chai",25)  //createUser se jo prototype create kiye ho usko btana pdega ki ye properties chai ko deni hai aur wo hoga new keyword se
const tea= new createUser("tea",250)

chai.printMe()