/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    let pcount = 0, n = isConnected.length, visited = new Array(n).fill(0)

    for(let i=0; i< n; i++){
        if(!visited[i]){
            dfs(i)
            pcount++
        }
    }
    return pcount 

    function dfs(node){
        visited[node] = 1
        for(let j=0; j<n; j++){
            if(isConnected[node][j] == 1 && !visited[j]){
                dfs(j)
            }
        }
    }
    
};