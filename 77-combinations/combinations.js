/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let combs = [], visited = new Array(n+1).fill(0)

    function dfs(path, start){
        if(path.length == k){
            combs.push([...path])
            return
        }

        for(let i=start; i<=n; i++){
            if(!visited[i]){
                path.push(i)
                visited[i] = 1

                dfs(path,i+1)

                visited[i] = 0
                path.pop()
            }
        }
    }

    dfs([], 1)
    return combs
    
};