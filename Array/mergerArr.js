//Merger of Two array 
//[2,4,6,7,8,9][1,3,5,10,11,12] => [2,4,6,7,8,9,1,3,5,10,11,12] output

function mergerArray(data1,data2){
    let n1 = data1.length;
    let n2 = data2.length;
    let arr3 = [];
    for(let i = 0; i < n1; i++){
        arr3[i] = data1[i];
    }
    for(let i = 0, j = n1; i < n2, j < n1+n2; i++,j++ ){
        arr3[j] = data2[i];
    }
    return arr3;
}
let arr1 = [2,4,6,7,8,9];
let arr2 = [1,3,5,10,11,12];
const result = mergerArray(arr1,arr2);
console.log(result);