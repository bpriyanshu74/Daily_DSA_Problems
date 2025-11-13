/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let ans = [], visited = new Array(nums.length).fill(0)

    function dfs(path){
        if(path.length == nums.length){
            ans.push([...path])
            return
        }

        for(let i=0; i<nums.length; i++){
            if(!visited[i]){
                path.push(nums[i])
                visited[i] = 1
                dfs(path)

                visited[i] = 0
                path.pop()
            }
        }
    }

    dfs([])
    return ans
};