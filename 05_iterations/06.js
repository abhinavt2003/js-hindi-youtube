// const coding= ["js","ruby","java","python","cpp"]

// const values = coding.forEach(  (item) =>{
//     console.log(item);
//     return item; //ye koi value return nhi krta hai
// } )
// console.log(values);

const myNums= [1,2,3,4,5,6,7,8,9,10]

myNums.filter( (num) => num > 4 ) //filter bhi callback function leta hai //implicit declaration

const newNums= myNums.filter( (nums) => (nums>4) )  //Ye condition ke hisaab se values fetch out krega

const newNums2 = myNums.filter( (num) =>{
    return num >4 //Yha return likhna hoga kyunki ye implicit declaration nhi hai
} )
console.log(newNums);