	
let rightCircularShift = function (myArr, k){
    n=myArr.length
    k= k % n
    return  myArr.slice(-k).concat(myArr.slice(0, -k));
}

const myArr = [1, 2, 3, 4, 5 ,6 ,7]
k=3;
result= rightCircularShift(myArr,k)
console.log(JSON.stringify(result, null, 0));