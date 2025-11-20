/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {

    if(nums.length === 1) return nums[0];

    function calculate(start, end, dp){
        if(start == end) return nums[start]
        if(start < end) return 0

        if(dp[start] != -1) return dp[start]

        let pick = nums[start] + calculate(start-2, end, dp)
        let notpick = calculate(start-1, end, dp)

        dp[start] = Math.max(pick, notpick)

        return dp[start]
    }
    let n = nums.length
    let dp1 = new Array(n).fill(-1)
    let dp2 = new Array(n).fill(-1)

    let temp1 = calculate(n-1, 1, dp1)
    let temp2 = calculate(n-2, 0, dp2)

    return Math.max(temp1, temp2)  
};