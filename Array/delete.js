// delete the element from the array
// 3,5,12,5,7,4,8 pos = 5
//output 3,5,12,5,7,8  4 will remove


function popOut(arr,p){

    for(let i  = p; i < arr.length; i++){
       arr[i] = arr[i +1];
    }
    arr.length--;
    return arr;
}

let data = [3,5,12,5,7,4,8];
pos = 5;
const result = popOut(data,pos)
console.log(result);