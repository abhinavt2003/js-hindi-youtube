//JavaScript Single threaded hai isme hr cheez process hoti hai
//JavaScript Execution Context
// Global Execution Context  -> this

//Function Execution Context

//Eval Execution Context -> Part of Global EC

//Memory Creation Phase  -> Variables ko jgh allot ki jaati hai
//Executin Phase  -> Execution Phase

//Example Code
let val1=10;
let val2=5;
function addNum(val1,val2){
    let total= num1+num2;
    return total;
}
let result1= addNum(val1,val2);
let result2= addNum(10,2);

//Execute kaise hota h -> Explanation
// Step1:
//  Global Execution ->this k andr allocate hota hai
// Step2: 
// Creation Phase -> Variables ko ikaathe krk ek jgh rkha jaata hai
// val1-> undefined  //Is phase me initialy sbk andr undefined rkha jaata hai
// val2-> undefined
//addNum ->function definition aa jaegi
//result1 ->undefined
//result2->undefined
//Step3: 
// Execution Phase
//val1 ->10
//val2 ->5
//addNum ->Nothing
//result1 -> ab hme addNum ki jrurat hai ab addNum execute hoga uska alg block bnega alg environment context bnega (newvariable environment + Executional thread bnega)
//Wapis se memory creation aur execution phase chalenge addNum k lie 
//Memory Phase 
// val1 ->undefined
// val2 ->undefined.
// total-> undefined
//Executional Context
// num1 ->10
// num2 ->5
// total -> 15
// return back to parent executional context means global executional context
// Executional context gets deleted
// Now result ->15

//Call Stack
// -                           -
// -                           -
// -                           -
// -        three()            -        one()
// -        two()              -
// -       one()               -
// -  Global Execution         -      LIFO concept
// -----------------------------

