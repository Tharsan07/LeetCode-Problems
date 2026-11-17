/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
//     let left = 0;
//     let right = 0;
//     let ind = 0;
//     const ans = [];
//    // For equal number of elements
//    while(left < m && right < n){
//     if(nums1[left]<=nums2[right]){
//         ans[ind++]=nums1[left++];
//     }
//     else{
//         ans[ind++] = nums2[right++];
//     }
//    }
//    while(left < m){
//     ans[ind++]=nums1[left++];
//    }
//     while(right < n){
//     ans[ind++] = nums2[right++];
//    }
//     for (let i = 0; i < ind; i++) {
//         nums1[i] = ans[i];
//     }

//Optimal solution
/*
-> nums1 length will be m+n
-> after m all are 0's, so fill nums2 elements in 0's
-> after copyinng we can surely say that before and after m would be sorted
->for left sort from 0, right: starts from m+1
 */

    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;

    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }

        k--;
    }
};