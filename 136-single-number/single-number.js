/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    /* 
     //declare an map
    const map = new Map();
    //For storing all the values
    for(let num of nums){
        map.set(num,(map.get(num)||0)+1);
    }
    //for checking the occurence
    for(let[key, value] of map){
        if(value === 1) return key;
    }*/
   

   //Using o(n2)

   for(let i = 0; i < nums.length; i++){
    let cnt = 0;
    for(let j = 0; j < nums.length; j++){
       if(nums[i] == nums[j]) cnt++;
   
   }
   if(cnt == 1) return nums[i];
   }
};