/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let ind = 0;
    for(let j = 0; j < nums.length; j++){
        if(nums[j]!=val){
            nums[ind]=nums[j];
            ind++;
        }
    }
    return ind;
    
};