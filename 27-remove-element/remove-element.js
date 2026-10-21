/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let ans=[];
    let ind = 0;
// Val elements are removed and stored into ans array
     for( let i = 0; i< nums.length;i++){
        if(nums[i] != val){
            ans[ind++]=nums[i];
        }
     }
// length of array would be ans length
    let k = 0;
    for(let j = 0; j < ind; j++){
        nums[k++]= ans[j];
    }
    return k;
};