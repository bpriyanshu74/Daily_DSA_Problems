/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let ans = []

    function dfs(index, path){
        ans.push([...path])
        
        for(let i=index; i<nums.length; i++){
            path.push(nums[i])
            dfs(i+1, path)
            path.pop()
        }
    }

    dfs(0, [])
    return ans
};