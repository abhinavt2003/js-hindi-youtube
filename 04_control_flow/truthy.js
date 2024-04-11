const userEmail= []   //yha hm koi bhi values le le rhe hai aur wo true ho jaa rhi h

if(userEmail){
    console.log("Got user email");
}
else {
    console.log("Dont have email");
}

//Truthy or Falsy values

// false ->falsy value
//0 ->falsy value
//-0 ->falsy value
// BigInt -> falsy value
//Null -> falsy value
//undefined ->falsy value
//Nan ->falsy value

//Rest all are assumed to be truthy values
//truthy values
// "0","false",'false'," ",[],{},function()

if(userEmail.length === 0){
    console.log("Array is empty");
}

const emptyObj= {}  
if(Object.keys(emptyObj).length === 0){  //Object.keys(emptyObj) will return an array as previous now check for its length
    console.log("Object is empty");
}

// // These are very helpful and will be used ahead
// false == 0 ->true
// false == '' -> true
// 0 == '' ->true

