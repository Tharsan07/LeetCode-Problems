/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    // main fn for passing the values
     mergeSort( nums, 0,nums.length - 1); 
     // Initial function call
     return nums;
};
// Function to breakdown the array
 function mergeSort(nums, low, high){
 if (low>= high) return // Base case for stop the recurssion when it reaches the last element
 let mid = Math.floor((low + high) / 2); // Break down the array
// Function call to break the left array until last element
  mergeSort(nums, low, mid);
// Function call to break the right array until last element
  mergeSort(nums, mid+1, high);
// Merge all the element when we got as individual elements
merge(nums, low, mid, high );
 }
 function merge(nums, low, mid, high){
    let temp = []; 
    let left = low;
    let right = mid+1;
    // Merge the array elemets 
    while(left<=mid && right<= high){
        // when we have equal numbers of elements
        if(nums[left]<=nums[right]){
            temp.push(nums[left]);
            left++;
        }
        else{
           temp.push(nums[right]);
            right++; 
        }
    }
    // when we have more elemts in left  push it into temp
        while(left<= mid){
            temp.push(nums[left]);
            left++;
        }
    // when we have more elemts in right push it into temp 
    while( right<= high){
            temp.push(nums[right]);
            right++; 
        }

        for( let i = low; i <= high; i++){
            nums[i]=temp[i-low];
        }
        
    }
    