/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res = []
    function dfs(path, index){
        res.push([...path])
        for(let i=index; i<nums.length; i++){
            path.push(nums[i])
            dfs(path, i+1)
            path.pop()
        }
    }
    dfs([],0)
    return res
    
};