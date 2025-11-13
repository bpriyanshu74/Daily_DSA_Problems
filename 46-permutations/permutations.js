/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let ans = []

    function dfs(start){
        if(start == nums.length){
            ans.push([...nums])
            return
        }

        for(let i=start; i<nums.length; i++){
            [nums[start], nums[i]] = [nums[i], nums[start]];

            dfs(start + 1); // recurse to fix next index

            // backtrack: undo the swap
            [nums[start], nums[i]] = [nums[i], nums[start]];
        }
    }

    dfs(0)
    return ans
    
};