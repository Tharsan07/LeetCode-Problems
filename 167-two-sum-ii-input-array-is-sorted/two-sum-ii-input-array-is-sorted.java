class Solution {
    public int[] twoSum(int[] numbers, int target) {
        // ArrayList <Integer> list = new ArrayList<>();
        int len=numbers.length;
        int left = 0;
        int right = len-1;
        int sum = 0;
        int[] result = new int[2];
        while(left<right){
            sum = numbers[left]+numbers[right];
            if(sum==target){
                // list.add(left+1);
                // list.add(right+1);
                result[0]=left+1;
                result[1]=right+1;
                return result;
            }
            else if(sum<target){ // if sum is smaller than target,increment left
                left++;
            }
        //if sum is greater than target, reduce right
        else{
            right--;
        }
        } 
        return result;
    }
}