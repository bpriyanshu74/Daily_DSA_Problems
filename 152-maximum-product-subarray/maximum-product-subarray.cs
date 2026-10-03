public class Solution {
    public int MaxProduct(int[] nums) {
        int curmax = nums[0], curmin = nums[0], best = nums[0];

        for(int i=1; i<nums.Length; i++){
            var x = nums[i];
            var a = curmax * x;
            var b = curmin * x;

            curmax = Math.Max(x, Math.Max(a, b));
            curmin = Math.Min(x, Math.Min(a, b));

            best = Math.Max(best, curmax);
        }

        return best;
    }
}