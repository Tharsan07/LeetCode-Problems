/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    //Brute force solution
    let n = nums.length;
    let isFound = 0;
    for(let i = 0; i <= n;i++){
        isFound = 0;
        for( let j = 0; j < n; j++){
            if(nums[j]==i){
                isFound = 1;
                break;
            }
        }
        if(isFound === 0){
            return i;
        }
    }
    
};