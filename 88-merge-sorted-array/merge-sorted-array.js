/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let left = m-1;
    let right = n-1;
    let ind = m+n - 1;

    while(left >= 0 && right >= 0){
        if(nums1[left]>=nums2[right]){
            nums1[ind--]=nums1[left--];
        }
        else{
           nums1[ind--]=nums2[right--]; 
        }
    }
      while (right >= 0) {
        nums1[ind--] = nums2[right--];
    }
    return nums1;
};