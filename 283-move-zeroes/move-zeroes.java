class Solution {
    public void moveZeroes(int[] nums) {
        int n=nums.length;
            int ind =-1;
            // First find the non zero C
            for(int i =0 ;i<n;i++){
                if(nums[i]==0){
                    ind = i;
                    break;
                }
            }

if (ind==-1 )return;
            // Start from the first zero elements and swap

            for(int i =ind+1; i<n;i++){
                if(nums[i]!=0){
                    int temp=nums[i];
                    nums[i]=nums[ind];
                    nums[ind]=temp;
                    ind++;
                }
            }

    }
}