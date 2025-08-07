/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let n = grid.length, m = grid[0].length, time = 0, q = []
    let visited = new Array(n).fill().map(() => new Array(m).fill(0))
    let directions = [[1,0], [0,1], [-1,0], [0,-1]]
    let freshcount = 0
    // pushing all the rotten oranges in the queue
    for(let i=0; i<n ; i++){
        for(let j=0; j<m; j++){
            if(grid[i][j] == 2){
                q.push([i,j])
            }
            if(grid[i][j] == 1){
                freshcount++
            }
        }
    }

    while(q.length && freshcount > 0){
        let size = q.length
        for(let i=0; i< size; i++){
            let [i,j] = q.shift()
            visited[i][j] = 1
            for(let [di,dj] of directions){
                let dx = i+di, dy = j+dj
                if(dx < n && dx >= 0 && dy < m && dy >= 0){
                    if(grid[dx][dy] == 1 && !visited[dx][dy]){
                        freshcount--
                        visited[dx][dy] = 1
                        q.push([dx,dy])
                        grid[dx][dy] = 2
                    }
                }
            }
        }
        time++
    }

    return freshcount ? -1 : time
    
};