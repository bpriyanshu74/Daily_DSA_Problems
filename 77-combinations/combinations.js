/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let ans = []

    function dfs(path, index){
        if(path.length == k){
            ans.push([...path])
            return
        }

        for(let i=index; i<=n; i++){
            path.push(i)
            dfs(path, i+1)
            path.pop()
        }
    }

    dfs([], 1)
    return ans
};