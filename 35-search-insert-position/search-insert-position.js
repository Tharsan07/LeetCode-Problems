/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {

/* Brute force solution 
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
    */ 

 /*Optimal solution */

 let start = 0;
 const n = nums.length;
 let end = n - 1;
let mid = 0;
let position = 0;

while (start <= end){
    mid = start + Math.floor(( end - start)/2);

    if(nums[mid] == target){
        return mid;
    }
    else if (nums[mid] < target){
        start = mid + 1;
    }
    else{
        end = mid - 1;
    }
}
  return start;  
};