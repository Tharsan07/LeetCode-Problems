/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {

    if(n <= 0){
        return false;
    }
//     while (n % 2 === 0) n = n/2;
//     while (n % 3 === 0) n = n/3;
//     while (n % 5 === 0) n = n/5;
    

//  return n === 1;
for ( let i of [2,3,5]){
    while(n % i == 0){
        n/=i;
    }
}
return n === 1;
};
  