//Reduce method
//Shopping cart bnane me help krta h
//0 + 1 + 2 + 3 + 4 
// const initialValue = 0
// const sumWithInitial = array1.reduce(
//     (accumulator,currentValue) => accumulator+ currentValue,
//     initialValue
// );

// console.log(sumWithInitial);
//Expected output : 10


const myNums= [1,2,3]
// const myTotal=myNums.reduce( function (acc,currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc+currval
// },0)  //function k baad comma lgak initial value de do
// console.log(myTotal);

//Reduce with arrow functions
const myTotal= myNums.reduce( (acc,curr) => acc+curr,0 )

console.log(myTotal);

const shoppingCart= [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 4999
    },
    {
        itemName: "Android course",
        price: 6999
    },
    {
        itemName:"data scientist",
        price: 12999
    }
]

const priceToPay=shoppingCart.reduce( (acc,item) =>  acc+item.price,0 )
console.log(priceToPay);