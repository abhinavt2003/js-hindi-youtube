//Inheritance
class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`USERNAME IS ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)  //Phle jo mai function bnake set krta tha this value pass krta tha usko ye easily kr deta hai refer myClasses.js Line 3
        this.email=email;
        this.password=password;
    }
    addCourse(){
        console.log(`New course was added by ${this.username}`);
    }
}

const chai= new Teacher("chai","chai@teacher.com","124")
chai.addCourse()
chai.logMe()

const masalaChai= new User("masalachai")
// masalaChai.addCourse() //Dont have access
masalaChai.logMe()

console.log(chai===masalaChai); //false
console.log(chai instanceof Teacher); //true
console.log(chai instanceof User); //true