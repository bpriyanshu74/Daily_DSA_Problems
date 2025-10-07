/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let res = []
    nums.sort((a,b) => a-b)
    function dfs(ds, index){
        res.push([...ds])
        for(let i=index; i<nums.length; i++){
            if(i > index && nums[i] == nums[i-1]) continue
            ds.push(nums[i])
            dfs(ds, i+1)
            ds.pop()
        }
    }
    dfs([], 0)
    return res
};