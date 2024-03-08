//Indirect recursion refers to a situation in computer programming 
//where two or more functions call each other in a cyclic manner.


/**syntex
 * 
 * 
 * function a()
 * {
 * b()   calling function b
 * }
 * function b()
 * {
 * a()  calling function a
 * }
 * 
 * a() 1st calling from outside
 */

let money = 100;
let numPen = 0;

function buyPen(rupees){
    if(rupees > 0){
        console.log(`Balance you have in account ₹${rupees} and number of pens are ${numPen}`);
        anotherPen(rupees)
    }else{
        console.log(`Unable to process due to low balance ${rupees} and number of pens are ${numPen}`)
    }
    
}
function anotherPen(rupees){
    numPen++; 
    buyPen(rupees-10);      //price of a single Pen is ₹10
}
buyPen(money)