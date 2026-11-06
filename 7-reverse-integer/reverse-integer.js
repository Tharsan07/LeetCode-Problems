/**
 * @param {number} x
 * @return {number}
 */

 // Made 2 mistakes, its not a regular reverese integer, values to be returned eighet possituve or negative
 //Handle this constion also  [-2 ** 31, 2 ** 31 - 1]
var reverse = function(x) {
    let orginalNum = x;
    let sum = 0;
    if (x === 0) return x;
    x = Math.abs(x);
    while (x > 0){
        let temp = x % 10;
        sum = sum * 10 + temp;
        x = Math.floor(x / 10);
    }

    if ( sum < -(2 ** 31) ||sum > (2 ** 31) - 1 ) return 0;
    return orginalNum > 0 ? sum : -sum; 
};