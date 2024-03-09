function reverseArray(arr){
    if(arr.length >= 0){
        reverseArray(arr.length - 1)
    }
    
}
let arr = [3,4,2,5,6]   //output Should be [6,5,2,4,3]
for(let i = 0; i < arr.length; i++){
   const result =  reverseArray(i);
   console.log(result)
}
