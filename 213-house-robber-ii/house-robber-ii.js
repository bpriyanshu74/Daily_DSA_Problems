/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length == 1) return nums[0]
    

    function helper(arr, index, dp){
        if(index == 0) return arr[index]
        if(index < 0) return 0

        if(dp[index] != -1) return dp[index]

        let nottake = helper(arr, index-1, dp)
        let take = arr[index] + helper(arr, index-2, dp)

        return dp[index] = Math.max(nottake, take)
    }

    let first = nums.slice(0, nums.length-1), dp1 = new Array(first.length).fill(-1)
    let second = nums.slice(1, nums.length), dp2 = new Array(second.length).fill(-1)

    return Math.max(helper(first, first.length-1, dp1), helper(second, second.length-1, dp2))
    
};