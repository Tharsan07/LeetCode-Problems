/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    let start = 0;
    let end = nums.length-1;
    mergeSort(nums, start, end);
    return nums;
};
function mergeSort(nums, low, high){
    if ( low >= high) return;
    let mid = Math.floor((low + high ) / 2);
// divide an array
mergeSort(nums, low, mid);
mergeSort(nums, mid+1, high);
mergeArray(nums, low, mid, high);
}
function mergeArray(nums, low, mid, high){
    let temp = [];
    let left = low;
    let right = mid+1;
    while(left <= mid && right <= high){
        if(nums[left]<=nums[right]){
            temp.push(nums[left]);
            left++;
        }
        else{
            temp.push(nums[right]);
            right++;
        }
    }
    while(left<=mid){
        temp.push(nums[left]);
            left++;
    }
    while(right<=high){
         temp.push(nums[right]);
            right++;
    }
    for(let i = low; i<=high;i++){
        nums[i] = temp[i-low];
    }
}