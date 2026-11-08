/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    //Brute Force solution
    const set = new Set();
     for ( let i = 0; i < nums.length; i++){
        set.add(nums[i]);
     }
// Elements are added in set
    let ind = 0;
   for( let num of set){
    nums[ind++]= num;
   }

return ind;
};