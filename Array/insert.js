// insertion of data in the
// 2,3,5,3,5,6,8   position  = 3   insertvalue = 45;


function insertArray(arr,p,ins){
    for(let  i =  arr.length-1; i >= p; i-- ){

        if(i >= p){
            let temp = arr[i]
            arr[i] = ins;
            arr[i + 1] = temp;
        }
    }
    return arr;

}

let arr = [2,3,5,3,5,6,8];
let pos = 3;
let insertVal = 45;

const result = insertArray(arr,pos,insertVal);
console.log(result)

// time complexity = O(n);
// space complexity = O(1)