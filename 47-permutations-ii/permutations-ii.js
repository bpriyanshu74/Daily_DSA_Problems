/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    
    function dfs(ds){
        if(ds.length == nums.length){
            res.push([...ds])
            return
        }

        for(let i=0; i<nums.length; i++){
            if(i > 0 && nums[i] == nums[i-1] && !visited[i-1]){
                continue
            }
            if(!visited[i]){
                visited[i] = true
                ds.push(nums[i])
                dfs(ds)
                visited[i] = false
                ds.pop()
            }
        }
    }


    let visited = new Array(nums.length).fill(false), res = []
    nums.sort((a,b) => a-b)
    dfs([])
    return res
};