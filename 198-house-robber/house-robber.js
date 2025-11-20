/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let n = nums.length

    let prev2 = 0
    let prev = nums[0]

    for(let i=1; i<n; i++){
        let take = nums[i] + prev2
        let nontake = prev

        let curi = Math.max(take, nontake)

        prev2 = prev
        prev = curi
    }

    return prev

    // let dp = new Array(n).fill(0)
    // dp[0] = nums[0]

    // for(let i=1; i<n; i++){
    //     let take = nums[i] + (i > 1 ? dp[i-2] : 0)
    //     let nontake = dp[i-1]

    //     dp[i] = Math.max(take,nontake)
    // }

    // return dp[n-1]

    // memoization
    // function dfs(index){
    //     if(index == 0) return nums[index]
    //     if(index < 1) return 0

    //     if(dp[index] != -1) return dp[index]

    //     let pick = nums[index] + dfs(index-2)
    //     let notpick = dfs(index-1)

    //     dp[index] = Math.max(pick, notpick)

    //     return dp[index]
    // }

    // return dfs(n-1)


    // tabulation

};