public class Solution {
    public IList<int> MajorityElement(int[] nums) {
        int? can1 = null;
        int? can2 = null;
        int c1 = 0, c2 = 0;

        for(int i=0; i<nums.Length; i++){
            if(nums[i] == can1) c1++;
            else if(nums[i] == can2) c2++;
            else if(c1 == 0){
                can1 = nums[i];
                c1 = 1;
            }else if(c2 == 0){
                can2 = nums[i];
                c2 = 1;
            }else{
                c1--;
                c2--;
            }
        }

        c1 = 0;
        c2 = 0;

        for(int i =0; i<nums.Length; i++){
            if(nums[i] == can1) c1++;
            if(nums[i] == can2) c2++;
        }

        var ans = new List<int>();

        if(c1 > nums.Length/3) ans.Add(can1.Value);
        if(c2 > nums.Length/3) ans.Add(can2.Value);

        return ans;
    }
}