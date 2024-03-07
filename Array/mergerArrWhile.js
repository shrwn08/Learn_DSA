function mergerWithWhile(data1,data2){
    let data3 =[];

    let d1 = 0, d2 = 0, d3 = 0   //i is index for d1, j is for d2, k is for d3

    while(d1 < data1.length && d2 < data2.length){
        if(data1[d1] < data2[d2]){
            data3[d3] = data1[d1];
            d1++;
        }else {
            data3[d3] = data2[d2];
            d2++;
        }
        d3++;
    }
    while (d1 < data1.length) {
        data3[d3] = data1[d1];
        d1++;
        d3++;
    }


    while (d2 < data2.length) {
        data3[d3] = data2[d2];
        d2++;
        d3++;
    }

    return data3;
}

let arr1 = [2,4,1,5,3,7];
let arr2 = [34,13,65,87,56];

const result = mergerWithWhile(arr1,arr2)
console.log(result);