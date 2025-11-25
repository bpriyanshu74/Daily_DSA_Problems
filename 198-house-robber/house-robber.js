/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let dp = new Array(nums.length).fill(-1)

    function f(index){
        if(index == 0) return nums[0]
        if(index < 0) return 0
        if(dp[index] != -1) return dp[index]

        let nottake = f(index-1)
        take = nums[index] + f(index-2)

        return dp[index] = Math.max(take, nottake)
        
    }

    return f(nums.length-1)
    
};