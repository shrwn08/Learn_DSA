function bubbleSort(ar){
    
    for(let i = 0; i < ar.length; i++){
        // console.log(`step${i+1}`)
        for(let j = 0; j < ar.length; j++){
            // console.log("\t",ar[j],"i m j")
            if(ar[j] > ar[j+1]){
                let temp = ar[j];
                ar[j]=ar[j+1];
                ar[j+1] = temp;
            }
            // console.log(i,ar[j])
        }
        
    }
    return ar;
}
let arr = [89,56,78,34,5];


const result =bubbleSort(arr);
console.log(result);