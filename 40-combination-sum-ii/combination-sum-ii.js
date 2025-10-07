/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {

    function dfs(path, sum, index){
        if(sum == 0){
            res.push([...path])
            return
        }

        for(let i=index; i<nums.length; i++){
            if( i > index && nums[i] == nums[i-1]){
                continue
            }
            if (nums[i] > sum) break;
            path.push(nums[i])
            dfs(path, sum-nums[i], i+1)
            path.pop()
        }
    }
    let res = [], nums = [...candidates]
    nums.sort((a,b) => a-b)
    dfs([], target, 0)
    return res
};