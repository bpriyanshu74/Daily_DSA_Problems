/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let fresh = 0, maxtime = 0, q = []
    let dir = [[1,0], [0,1], [-1,0], [0,-1]]

    for(let i=0; i<grid.length; i++){
        for(let j=0; j<grid[0].length; j++){
            if(grid[i][j] == 2){
                q.push([i,j,maxtime])
            }
            if(grid[i][j] == 1){
                fresh++
            }
        }
    }

    while(q.length){
        let [x,y,time] = q.shift()
        maxtime = Math.max(maxtime, time)
        for(let [dx,dy] of dir){
            let nx = dx+x, ny = dy+y
            if(nx >= 0 && nx < grid.length && ny >= 0 && ny < grid[0].length && grid[nx][ny] == 1){
                grid[nx][ny] = 2
                fresh--
                q.push([nx,ny, time+1])
            }
        }
    }

    return fresh ? -1 : maxtime
    
};