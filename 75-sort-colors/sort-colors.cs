public class Solution {
    public void SortColors(int[] nums) {
        int low = 0, mid = 0, high = nums.Length-1;

        while(mid <= high){
            if(nums[mid] == 0){
                (nums[mid], nums[low]) = (nums[low], nums[mid]);
                low++;
                mid++;
            }else if(nums[mid] == 1){
                mid++;
            }else{
                (nums[mid], nums[high]) = (nums[high], nums[mid]);
                high--;
            }
        }
    }
}