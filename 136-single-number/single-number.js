/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
     const freq = new Map();

     for (let num of nums){
        freq.set(num, (freq.get(num)||0) +1);
     }

    for( let [num,count] of freq){
        if(count === 1) return num;
    }
    
};