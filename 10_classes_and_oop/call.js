//Call function
function SetUserName(username){
    //COmplex DB calls
    this.username= username
}

function createUser(username,email,password){
    SetUserName.call(this,username)  //Yha agr  hm call use nhi krte hai to username update nhi hoga kyunki ye username update to ho rha SetUserName me jakr pr jaise hi ye execute ho rha waise hi waps aate waqt call stack se execution variables delete ho jaa rhe, to isse bchne k lie call ka use krenge jo iska reference store krega, pr ab is reference ko current this me change krna hai taki wo delete na ho
    this.email= email
    this.password=password
}

const chai= new createUser("chai","chai@fb.com","123")
console.log(chai)