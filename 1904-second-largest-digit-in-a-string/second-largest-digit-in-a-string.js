/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    let firstlargest = -Infinity;
    let secondLarget = -Infinity;
    for(let i = 0; i < s.length; i++){
        if(s.charAt(i) >= '0' || s.charAt(i) <= '9'){
            if(s.charAt(i)>firstlargest){
                secondLarget=firstlargest;
                firstlargest=Number(s.charAt(i));
            }
            else if(s.charAt(i)>secondLarget && s.charAt(i)<firstlargest){
                secondLarget =Number(s.charAt(i)); 
            }
        }
    }
    return secondLarget === -Infinity ? -1 : secondLarget;
};