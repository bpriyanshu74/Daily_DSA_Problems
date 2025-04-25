/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var splitArray = function(nums, k) {

    function check_split(i, nums){
        let splits = 1, cur_sum = 0
        for(let j=0; j<nums.length; j++){
            if(cur_sum + nums[j] <= i){
                cur_sum += nums[j]
            }
            else{
                cur_sum = nums[j]
                splits++
            }
        }
        return splits
    }

    let l = Math.max(...nums)
    let r = nums.reduce((a,b) => a+b, 0)
    let ans = -1

    if(k > nums.length) return -1

    while(l <= r){
        let mid = l + Math.floor((r-l)/2)
        if(check_split(mid, nums) <= k){
            ans = mid
            r = mid -1
        }
        else{
            l = mid + 1
        }
    }
    return ans
    
};