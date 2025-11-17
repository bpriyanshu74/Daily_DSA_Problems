/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count = 0, m = grid.length, n = grid[0].length

    function dfs(x,y){
        for(let [dx,dy] of dir){
            let nx = x+dx, ny = y+dy
            if(nx >= 0 && nx < m && ny >= 0 && ny < n && grid[nx][ny] == '1'){
                grid[nx][ny] = '0'
                dfs(nx,ny)
            }
        }
    }

    let dir = [[1,0], [0,1], [-1,0], [0,-1]]

    for(let i=0; i<grid.length; i++){
        for(let j=0; j<grid[0].length; j++){
            if(grid[i][j] == '1'){
                count++
                grid[i][j] = '0'
                dfs(i,j)
            }
        }
    }
    return count
};