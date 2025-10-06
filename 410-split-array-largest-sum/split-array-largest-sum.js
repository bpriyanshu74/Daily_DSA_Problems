/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var splitArray = function(nums, k) {

    function check_split(sum, nums){
        let split = 1, cursum = 0
        for(let j=0; j<nums.length; j++){
            if(cursum + nums[j] <= sum){
                cursum += nums[j]
            }else{
                cursum = nums[j]
                split++
            }
        }
        return split
    }

    // so we now answer will lie in the range Max(nums) && Max(sum(nums))

    let l = Math.max(...nums)
    let r = 0
    for(let num of nums){
        r += num
    }
    // so we have range l and r

    while(l <= r){
        let mid = l + Math.floor((r-l)/2)
        if(check_split(mid,nums) <= k){
            ans = mid
            r = mid - 1
        }else{
            l = mid + 1
        }
    }
    return ans
};