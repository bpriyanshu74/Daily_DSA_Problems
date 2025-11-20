/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let n = nums.length

    let dp = new Array(n).fill(-1)

    function dfs(index){
        if(index == 0) return nums[index]
        if(index < 1) return 0

        if(dp[index] != -1) return dp[index]

        let pick = nums[index] + dfs(index-2)
        let notpick = dfs(index-1)

        dp[index] = Math.max(pick, notpick)

        return dp[index]
    }

    return dfs(n-1)
};