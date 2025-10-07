/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let res = []
    function dfs(path, sum, index){
        if(sum == 0){
            res.push([...path])
            return
        }
        if(sum < 0) return 

        for(let i=index; i<candidates.length; i++){
            path.push(candidates[i])
            dfs(path, sum - candidates[i], i)
            path.pop()
        }
    }

    dfs([], target, 0)

    return res
};