/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let res = []
    function dfs(path, cursum, index){
        if(index === candidates.length){
            if(cursum == target){
                res.push([...path])
                return
            }
            return
        }
        if(cursum > target) return
        path.push(candidates[index])
        dfs(path, cursum + candidates[index], index)

        path.pop()
        dfs(path, cursum, index+1)
    }
    dfs([],0, 0)
    return res
    
};