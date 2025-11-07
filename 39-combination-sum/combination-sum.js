/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let ans = []

    function dfs(path,index,sum){
        if(sum == 0){
            ans.push([...path])
            return
        }
        if(sum < 0) return

        for(let i=index; i<candidates.length; i++){
            path.push(candidates[i])
            dfs(path,i,sum-candidates[i])
            path.pop()
        }
    }

    dfs([], 0, target)
    return ans
};