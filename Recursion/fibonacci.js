 function  fibonacci(n){
    if(n <= 1){

        return n;
    }else
    {
        return fibonacci(n-1) + fibonacci(n-2)
    }    

    
}

let num = 10;
for(let i = 0; i < num; i++){
    const result = fibonacci(i);
    console.log(result)
   
}

   

