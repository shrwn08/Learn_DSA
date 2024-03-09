function reverse(ar){
    let n = ar.length -1;
    for(let i = 0; i <= n; i++){
        if(i !== ar.length){
            let temp = ar[i];
        ar[i] = ar[n];
        ar[n] = temp;

        }
        n--;
    }
    return ar;
}
let arr = [4,2,6,3,5,7]  //output = [7,5,3,6,2,4]
const result =reverse(arr)
console.log(result)