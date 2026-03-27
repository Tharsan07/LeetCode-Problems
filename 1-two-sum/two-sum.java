class Solution {
    public int[] twoSum(int[] nums, int target) {
    //    HashMap<Integer,Integer> map=new HashMap<>();

    //    for(int i=0;i<nums.length;i++){
    //     int curr=nums[i];
    //     int need=target-curr;
    //     if(map.containsKey(need)){
    //         return new int[]{map.get(need),i};
    //     }
    //     map.put(curr,i);
    //    }
    //    return new int[]{-1};
    int n=nums.length;
    int ind1=0;
    int ind2=0;
    for(int i=0;i<n;i++){
        for(int j=i+1;j<n;j++){
            if(nums[i]+nums[j]==target){
                return new int[]{i,j};
            }
        }
    }
    return new int[]{-1,-1};

  

    }
}