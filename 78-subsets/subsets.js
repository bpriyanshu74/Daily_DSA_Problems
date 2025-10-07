/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res = []

    function dfs(ds, index){
        res.push([...ds])
        for(let i=index; i<nums.length; i++){
            ds.push(nums[i])
            dfs(ds, i+1)
            ds.pop()
        }
    }
    dfs([], 0)
    return res
};