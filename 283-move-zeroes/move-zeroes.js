/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    //count number of zero
let count = 0;
let len = nums.length;
for(let i =  0; i < nums.length; i++){
    if(nums[i]==0){
        count++;
    }
}
let ind = 0;
for(let i = 0; i < nums.length; i++){
    if(nums[i]!=0){
        nums[ind++]=nums[i];
    }
}
for(let i = ind; i<len; i++){
    nums[i]=0;
}
return nums;

};