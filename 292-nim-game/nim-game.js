/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
    if( n <= 2) return true;
    if(n > 2){
        if ( n % 4 == 0){
            return false;
        }
    }
    return true;
};