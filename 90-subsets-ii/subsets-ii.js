/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {

    let ans = []
    nums.sort((a,b) => a-b)

    function dfs(path, index){
        ans.push([...path])

        for(let i=index; i<nums.length; i++){
            if(i > index && nums[i] == nums[i-1]) continue

            path.push(nums[i])
            dfs(path, i+1)
            path.pop()
        }
    }

    dfs([], 0)
    return ans
    
};