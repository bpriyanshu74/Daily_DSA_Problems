/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {

    function dfs(pos){
        let [x,y] = pos
        grid[x][y] = 0
        for(let [dx,dy] of dir){
            let nx = x + dx, ny = y + dy
            if(nx >= 0 && nx < n && ny >= 0 && ny < m && grid[nx][ny] == 1){
                dfs([nx,ny])
            }
        }

    }

    let count = 0, n = grid.length, m = grid[0].length
    let dir = [[1,0], [0,1], [-1,0], [0,-1]]
    for(let i=0; i<n; i++){
        for(let j=0; j<m; j++){
            if(grid[i][j] == 1){
                count++
                dfs([i,j])
            }
        }
    }
    return count
};