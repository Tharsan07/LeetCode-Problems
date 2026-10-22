/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {

/* Brute force solution */ 
 let Position = 0;
    for( let i = 0; i < nums.length; i++){
        if(nums[i] >= target){
            Position = i;
            break;
        }
        else if( nums[i]<= target){
            Position = i + 1;
        }
    }
    return Position;
    
};