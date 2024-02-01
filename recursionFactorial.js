//having a function where its calling itself
const fact = (n) =>{
    //recursive case
    if(n >=1){
        return n * fact(n-1)

    }
    //base case : when n =>0
        return 1;
}

console.log(fact(5))