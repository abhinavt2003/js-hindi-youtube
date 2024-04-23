//Interview question ye hai ki Math.pi ki value 3.14 hoti hai iski value change krk 4 kr skte hai ya nhi ? Haan to kaise nhi to kyu nahi?
const descriptor= Object.getOwnPropertyDescriptor(Math, "PI")  //kisi ki property janani hai
// console.log(descriptor);    //iski property kuch cheeze hard coded hai joki iski values ko change nhi hone dengi

// console.log(Math.PI);
// Math.PI= 5
// console.log(Math.PI); //Override nhi ho rhi value

const chai= {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,
    orderChai: function(){
        console.log("Chai nahi bani");
    }
}
// console.log(chai);
// console.log(Object.getOwnPropertyDescriptor(chai,"name") );  //chai k andr name property ka description dekh rhe hai 

Object.defineProperty(chai,'name',{
    writable: false,
    enumerable: false,   //isko false kroge to iterate nhi hoga
    configurable: false
})                          //Parameters(Kiski property change krni hai, Konsi property change krni hai, Kya change krna hai property me)

console.log(Object.getOwnPropertyDescriptor(chai,"name") );

for (const [key,value] of Object.entries(chai)) {
    if(typeof value != 'function'){
        console.log(`${key},${value}`);
    }
}