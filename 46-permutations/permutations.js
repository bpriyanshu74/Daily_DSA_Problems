/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    
    function dfs(ds){
        if(ds.length == nums.length){
            res.push([...ds])
            return 
        }
        for(let i=0; i<nums.length; i++){
            if(used[i]) continue
            ds.push(nums[i])
            used[i] = true
            dfs(ds)
            used[i] = false
            ds.pop()
        }
    }

    let res = [], used = new Array(nums.length).fill(false)
    dfs([])
    return res
};