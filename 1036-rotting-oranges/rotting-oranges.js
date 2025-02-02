/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let rows = grid.length, cols = grid[0].length, maxtime = 0, q = [], freshoranges = 0

    // lets initialise the q
    for(let i=0; i<rows; i++){
        for(let j=0; j<cols; j++){
            if(grid[i][j] == 2){
                q.push([[i,j], maxtime])
            }
            if(grid[i][j] == 1){
                freshoranges++
            }
        }
    }    

    // doing the bfs traversal
    const directions = [[1,0], [0,1], [-1,0], [0,-1]]
    while(q.length !== 0){
        let [current, time] = q.shift()
        let [i,j] = current

        maxtime = Math.max(maxtime,time)

        for(let [dx,dy] of directions){
            let ni = dx+i, nj = dy+j
            // rot the fresh oranges

            if(ni >= 0 && ni < rows && nj >= 0 && nj < cols && grid[ni][nj] == 1){
                grid[ni][nj] = 2
                q.push([[ni,nj],time+1])
                freshoranges--
            }
        }
    }

    return freshoranges == 0 ? maxtime : -1
};