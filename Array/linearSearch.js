// need to search the element

// 2,4,1,5,74,86,8 searchValue = 7;


function linearSearch(data,sv){
    for(let i = 0; i < data.length; i++){
        if(data[i] === sv){
            return `we found the element at index ${i}`;
        }
    }
    return `not found`;
}

let arr = [2,4,1,5,74,86,8];
searchValue = 2;


const result = linearSearch(arr,searchValue);
console.log(result);