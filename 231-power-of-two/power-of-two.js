/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if (n < 1) return false;
    if (n <= 2) return true;
    
    while(n >= 2){
        if(n % 2 === 1) return false;
        n=n/2;
    }
    return n === 1;
};