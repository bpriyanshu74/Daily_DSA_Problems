/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function(grid) {
    let count = 0, m = grid.length, n = grid[0].length
    let dir = [[1,0], [0,1], [-1,0], [0,-1]]

    function dfs(i,j){
        for(let [di,dj] of dir){
            let ni = i+di, nj = j+dj
            if(ni >= 0 && ni < m && nj >= 0 && nj < n && grid[ni][nj] == 1){
                grid[ni][nj] = 0
                dfs(ni,nj)
            }
        }
    }

    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(i == 0 || i == m-1 || j ==0 || j == n-1){
                if(grid[i][j] == 1){
                    grid[i][j] = 0
                    dfs(i,j)
                }
            }
        }
    }

    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(grid[i][j] == 1) count++
        }
    }

    return count

    
    
};