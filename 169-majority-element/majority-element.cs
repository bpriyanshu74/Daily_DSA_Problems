public class Solution {
    public int MajorityElement(int[] nums) {
        if(nums.Length <= 2){
            return nums[0];
        }
        var count = 1;

        var candidate = nums[0];

        for(int i = 1; i< nums.Length; i++){
            if(candidate == nums[i]){
                count++;
            }else{
                count--;
                if(count == 0){
                    candidate = nums[i];
                    count = 1;
                }
            }
        }
        return candidate;
        
    }
}