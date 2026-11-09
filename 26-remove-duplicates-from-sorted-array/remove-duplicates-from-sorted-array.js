/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
/*    //Brute Force solution
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
*/

    //Optimal solution
 let ind = 0;
 for( let j = 1;j <= nums.length; j++){
    if(nums[ind]!=nums[j]){
        nums[++ind]=nums[j];
    }
    
 }
 return ind;
};