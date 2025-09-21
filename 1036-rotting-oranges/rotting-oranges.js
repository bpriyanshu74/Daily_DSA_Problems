/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let q = [], fresh = 0, maxtime = 0, rows = grid.length, cols = grid[0].length
    let dir = [[1,0], [0,1], [-1,0], [0,-1]]

    // creating queue of rotten oranges for multisource bfs
    for(let i=0; i<rows; i++){
        for(let j=0; j<cols; j++){
            if(grid[i][j] == 1) fresh++
            if(grid[i][j] == 2) q.push([i,j,0])
        }
    }

    while(q.length){
        let [x,y,t] = q.shift()
        maxtime = Math.max(maxtime, t)
        for(let [dx,dy] of dir){
            let nx = x + dx, ny = y + dy
            if(nx >= 0 && nx < rows && ny >= 0 && ny < cols && grid[nx][ny]==1){
                grid[nx][ny] = 2
                q.push([nx,ny,t+1])
                fresh--
            }
        } 
    }
    
    return fresh > 0 ? -1 : maxtime
};