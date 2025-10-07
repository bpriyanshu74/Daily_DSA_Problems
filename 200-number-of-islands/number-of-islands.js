/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let m = grid.length, n = grid[0].length, count = 0
    let visited = new Array(m).fill().map(() => new Array(n).fill(false))

    function dfs(x,y){
        if(x < 0 || x >= m || y < 0 || y >= n) return
        if(grid[x][y] != '1' || visited[x][y]) return

       
            visited[x][y] = true
            dfs(x+1, y) 
            dfs(x-1, y) 
            dfs(x, y-1)
            dfs(x, y+1)
        
    }

    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(grid[i][j] == '1' && !visited[i][j]){
                count++
                dfs(i,j)
            }
        }
    }
    return count
};