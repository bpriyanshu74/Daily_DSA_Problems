/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    let n = isConnected.length
    // let adj = new Array(n).fill().map(() => [])

    // for(let i=0; i<n; i++){
    //     for(let j=0; j<n; j++){
    //         if(isConnected[i][j] == 1){
    //             adj[i].push(j)
    //             adj[j].push(i)
    //         }
    //     }
    // }

    let visited = new Array(n).fill(0)
    let province = 0

    function dfs(root){
        visited[root] = 1
        for(let i=0; i<n; i++){
            if(isConnected[root][i] == 1 && !visited[i]){
                dfs(i)
            }
        }
    }

    for(let i=0; i<n; i++){
        if(!visited[i]){
            province++
            dfs(i)
        }
    }

    return province
    
};