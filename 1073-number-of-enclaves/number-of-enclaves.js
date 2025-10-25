/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function(grid) {

    function dfs(x,y){
        for(let [dx,dy] of dir){
            let nx = x+dx, ny = y+dy
            if(nx >= 0 && nx < rows && ny >= 0 && ny < cols && grid[nx][ny] == 1){
                grid[nx][ny] = '#'
                dfs(nx,ny)
            }
        }
    }

    let dir = [[1,0], [0,1], [-1,0], [0,-1]]
    let rows = grid.length, cols = grid[0].length

    for(let i=0; i<rows; i++){
        for(let j=0; j<cols; j++){
            if(i==0 || j == 0 || i == rows-1 || j == cols-1){
                if(grid[i][j] == 1){
                    grid[i][j] = '#'
                    dfs(i,j)
                }
            }
        }
    }
    let count = 0
    for(let i=0; i<rows; i++){
        for(let j=0; j<cols; j++){
            if(grid[i][j] == 1) count++
        }
    }
    return count
};