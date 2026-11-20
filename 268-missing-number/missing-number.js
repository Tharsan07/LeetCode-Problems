/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    //Brute force solution
    let n = nums.length;
    // let isFound = 0;
    // for(let i = 0; i <= n;i++){
    //     isFound = 0;
    //     for( let j = 0; j < n; j++){
    //         if(nums[j]==i){
    //             isFound = 1;
    //             break;
    //         }
    //     }
    //     if(isFound === 0){
    //         return i;
    //     }
    // }
    
    //Better Solution
//  let hash =new Array(n+1).fill(0);
//  for(let i = 0; i <= n ; i++) {
//     hash[nums[i]]=1;
//  }
//  for( let i = 0; i <= n; i++){
//     if(hash[i]===0){
//         return i;
//     }
//  }

//Optimal solution 
let sum = Math.floor(n *(n+1) /2);
for(let i = 0; i < n; i++){
    sum-=nums[i];
}
 return sum;   
};