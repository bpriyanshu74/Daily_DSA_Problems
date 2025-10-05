/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let l=0, r= nums.length-1, ans = nums[0]

    while(l <= r){
        let mid = l + Math.floor((r-l)/2)

        if(nums[mid] > nums[r]){
            // left half is sorted
            ans = Math.min(ans, nums[l])
            l = mid + 1
        }else if(nums[mid] < nums[r]){
            // right half is sorted
            ans = Math.min(ans, nums[mid])
            r = mid - 1
        }else{
            ans = Math.min(ans, nums[mid])
            r--
        }
    }
    return ans
};