/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let res = []

    function dfs(index, path){
        res.push([...path])
        for(let i=index; i<nums.length; i++){
            if(i > index && nums[i] == nums[i-1]) continue
            path.push(nums[i])
            dfs(i+1, path)
            path.pop()
        }
    }
    nums.sort((a,b) => a-b)
    dfs(0, [])
    return res
};