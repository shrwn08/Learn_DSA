// Recursion: Re -> repeat, cursion -> itself
// Recursion occurs when a function calls itself.

// function recursion(num,){
   
    
//     if(num <= 30){
//         console.log(num);
//         recursion(num + 2);
        
//     }
    
// }
// let count = 0;

// const result = recursion(count);
// console.log(result);

function factorial(num){
    if(num === 0){
        return 1;
    }
    return num * factorial(num-1);
}
let num = 5;
const result = factorial(num);
console.log(result);