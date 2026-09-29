public class Solution {
    public int MaxSubArray(int[] nums) {
        // brute force
        // linear n2 loop and update maxsum whenever a new higher sum is encountered

        // var maxsum = int.MinValue;

        // for(int i=0; i<nums.Length; i++){
        //     var sum = 0;
        //     for(int j=i; j<nums.Length; j++){
        //         sum += nums[j];
        //         maxsum = Math.Max(maxsum, sum);
        //     }
        // }

        // return maxsum;

        int maxsum = int.MinValue, j = 0, sum = 0;

        while(j < nums.Length){
            sum += nums[j];
            maxsum = Math.Max(sum, maxsum);
            if(sum <= 0){
                sum = 0;
            }
            j++;
        }

        return maxsum;
    }
}