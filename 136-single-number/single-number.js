/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    //declare an map
    const map = new Map();
    //For storing all the values
    for(let num of nums){
        map.set(num,(map.get(num)||0)+1);
    }
    //for checking the occurence
    for(let[key, value] of map){
        if(value === 1) return key;
    }
};