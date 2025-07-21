/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    if(k > n) return []

    let res =[]
    function dfs(cursum, path, index){
        if(path.length == k){
            if(cursum == n){
                res.push([...path])
                return
            }
            return
        }
        for(let i=index; i<10; i++){
            path.push(i)
            dfs(cursum+i, path, i+1)
            path.pop()
        }

    }

    dfs(0,[], 1)
    return res
    
};