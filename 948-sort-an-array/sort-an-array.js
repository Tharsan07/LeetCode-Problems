const nums = [5, 2, 3, 1, 0,10,87,-1];
//merge sort algorithm

function sortArray(nums){
  //we need to split an array
  //so that we need to split by first half and second half untill it reaches a single element
  mergeSort(nums, 0, nums.length-1);
  return nums;
  // return nums;
}

function mergeSort(nums, low, high){
  if(low==high) return ; //base condition
  let mid = Math.floor((low + high) / 2);
  mergeSort(nums,low,mid);
  mergeSort(nums, mid+1,high);
  mergeArray(nums,low,mid,high);
}
function mergeArray(nums,low,mid,high){
  let left = low;
  let right = mid + 1;
  let temp = [];
  //when equal number of elements presented
  while(left <= mid && right <= high){
    if(nums[left]<=nums[right]){
      temp.push(nums[left++]);
    }
    else{
      temp.push(nums[right++]);
    }
  }
  while(left <= mid){
     temp.push(nums[left++]);
  }
  while(right <= high){
     temp.push(nums[right++]);
  }
  
  for(let i = 0; i< temp.length; i++){
    nums[low++] =temp[i];
  }  
}
