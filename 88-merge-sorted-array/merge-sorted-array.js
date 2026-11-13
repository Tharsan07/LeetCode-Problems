/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let left = 0;
    let right = 0;
    let ind = 0;
    let ans = [];

   while(left < m && right < n){
    if(nums1[left]<=nums2[right]){
        ans[ind++]=nums1[left++];
    }
    else{
        ans[ind++]=nums2[right++];
    }
   }
   while(left < m){
    ans[ind++]=nums1[left++];
   }
   while(right<n){
    ans[ind++]=nums2[right++];
   }

   for( let i = 0; i<ind;i++){
    nums1[i]=ans[i];
   }
    return nums1;
};