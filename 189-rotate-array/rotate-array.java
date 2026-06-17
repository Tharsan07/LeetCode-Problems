class Solution {
    public void rotate(int[] nums, int k) {
        int len = nums.length;
        k = k % len;
        int rotate = len - k;
        //Move the first rotate time values to another array
        int[] temp = new int[rotate];
        for(int i =0; i< rotate;i++){
            temp[i]=nums[i];
        }
        int curr=0;
        for (int i=rotate;i<len;i++){
            nums[curr]= nums[i];
            curr++;
        }
        for(int i =0;i < temp.length;i++){
            nums[curr++]=temp[i];
        }
    
        
    }
}