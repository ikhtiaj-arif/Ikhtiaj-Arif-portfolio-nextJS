const array = [2,2,2,2,2];

function x (arr) {
    let sum = 0;
    let avg = 0;
    let result = 0;
    arr.forEach(item => sum += item);
    avg = sum/arr.length;
    if(arr.indexOf(avg) === 0){
        result++
    }
    
    return result
}
console.log(x(array));