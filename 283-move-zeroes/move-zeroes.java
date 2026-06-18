class Solution {
    public void moveZeroes(int[] nums) {
        int n=nums.length;

        ArrayList<Integer> list = new ArrayList<>();
        //store all the non zero elements in the list
        for(int i =0;i<n;i++){
            if(nums[i]!=0){
                list.add(nums[i]);
            }
        }

        //Move all the non zero elements to the array
        int len = list.size();
        for(int i =0;i<len;i++){
            nums[i]=list.get(i);
        }

        // Add the zero to remaining places
       
        for(int i = len; i<n;i++){
            nums[i]=0;
        }
    }
}