/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let l=0, r = nums.length-1, ans = Infinity

    while(l <= r){
        let mid = l + Math.floor((r-l)/2)

        if(nums[mid] <= nums[r]){
            ans = Math.min(ans, nums[mid])
            r = mid - 1
        }else{
            l = mid + 1
        }
    }

    ans = Math.min(ans, nums[l])

    return ans
};