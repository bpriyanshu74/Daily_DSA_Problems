/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let m = grid.length, n = grid[0].length, q = []
    let maxtime = 0, fresh = 0, directions = [[1,0], [0,1], [-1,0], [0,-1]]
    // puttin all the rotten oranges in the queue
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(grid[i][j] == 2){
                q.push([[i,j], maxtime])
            }
            if(grid[i][j] == 1){
                fresh++
            }
        }
    }

    while(q.length){
        let [cur, time] = q.shift()
        let [i,j] = cur
        maxtime = Math.max(maxtime,time)
        for(let [di, dj] of directions){
            let dx = i + di, dy = j + dj
            if(dx<m && dx >= 0 && dy <n && dy >= 0 && grid[dx][dy] == 1){
                q.push([[dx,dy], time+1])
                grid[dx][dy] = 2
                fresh--
            }
        }
    }

    return fresh ? -1 : maxtime

    
};