/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    
    if(x<0)return false;

    let orginalNum = x;
    let sum = 0;

    while(x>0){
        let temp = x % 10;
        sum = sum *  10 + temp ;
        x = Math.floor(x / 10); 

    }
    return orginalNum === sum;
};