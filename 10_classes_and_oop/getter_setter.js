class User{
    constructor(email,password){
        this.email= email;
        this.password= password
    }
    get email(){ //Agr getter setter bnane hai to jis property ko set ya get kr rhe uska naam same hoga
        return this._email.toUpperCase()
    }
    set email(value){
        this._email=value
    }
    get password(){  //getter likha hai to setter bhi dena pdega
        return this._password.toUpperCase()
    }

    set password(value){   
        this._password=value
    }

    //Ab constructor set to kr rha hai email,password but ab getter,setter se password ko override kr de rhe
}

const hitesh =new User("h@hitesh.com","abc")
console.log(hitesh.password); //setter bhi set kr rha hai aur constructor bhi set kr rha to ye infinite loop chlne lgega, dono me race lg jaati hai 
console.log(hitesh.email);