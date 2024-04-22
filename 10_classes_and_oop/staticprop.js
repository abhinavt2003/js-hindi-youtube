class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`Username: ${this.username}`)
    }

    static createId(){   //Access nhi dena chahte tbb static word ka use kr lo
        return `123`;
    }
}

const newUser= new User("abhinav");
// console.log(newUser.createId()); //static hai to access nhi hoga

class Teacher extends User{
    constructor(email,username){
        super(username)
        this.email=email
    }
}

const Iphone = new Teacher("Iphone","I@phone.com")
Iphone.logMe();
console.log(Iphone.createId()) //static child ko bhi aur inherited class ko bhi access nhi krne dega