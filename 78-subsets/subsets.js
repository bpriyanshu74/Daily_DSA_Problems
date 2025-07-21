/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res = []

    function dfs(ds, index){
        if(index == nums.length){
            res.push([...ds])
            return
        }
        ds.push(nums[index])
        dfs(ds, index+1)

        ds.pop()
        dfs(ds, index+1)
    }    
    dfs([], 0)
    return res
};