/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let cnt = 0;
    let max = -1;
    for(let i =0; i<nums.length;i++){
        if(nums[i]==0){
            cnt = 0;
        }
        else if(nums[i]===1){
            cnt++;
            if(max<cnt){
                max=cnt;
            }
        }
    }
    return max === -1 ?0:max;
    
};