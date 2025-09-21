/**
 * @param {number[][]} grid
 * @return {number}
 */
var maximumMinutes = function(grid) {
    let rows = grid.length, cols = grid[0].length, q = [], dir = [[1,0], [0,1], [-1,0], [0,-1]]

    // we need time of every cell when the fire reaches.
    let firetime = new Array(rows).fill().map(() => new Array(cols).fill(Infinity))

    //finding all the fire cells and putting in q for multi source bfs
    for(let i=0; i< rows; i++){
        for(let j=0; j<cols; j++){
            if(grid[i][j] == 1){
                firetime[i][j] = 0
                q.push([i,j])
            }
        }
    }
    
    // now filling the firetime matrix

    while(q.length){
        let [x,y] = q.shift()
        for(let [dx,dy] of dir){
            let nx = x + dx, ny = y + dy
            if(nx >=0 && nx < rows && ny >= 0 && ny < cols && grid[nx][ny] != 2 && firetime[nx][ny] == Infinity){
                firetime[nx][ny] = firetime[x][y] + 1
                q.push([nx, ny])
            }
        }
    }

    // writing the canEscape function to check whether the given Wait time for cell is safe or not

    function canEscape(w){
        // safety check whether 0,0 wait time is safe or not
        if(w >= firetime[0][0]) return false
        //visited array to keep track of visited path
        let visited = new Array(rows).fill().map(() => new Array(cols).fill(false))
        let q = [[0,0,w]]
        visited[0][0] = true

        while(q.length){
            let [r,c,t] = q.shift()

            if(r == rows-1 && c == cols-1){
                return t <= firetime[r][c]
            }

            for(let [dr,dc] of dir){
                let nr = r+dr, nc = c + dc, arrive = t+1
                if(nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] != 2){
                    
                    if(!visited[nr][nc]
                     &&
                      (arrive < firetime[nr][nc]
                       || (nr == rows-1 && nc == cols-1 && arrive <= firetime[nr][nc]))){
                        visited[nr][nc] = true
                        q.push([nr,nc,arrive])
                       }
                }
            }
        }
        return false
    }

    // now we need to figure out the valid time using binary search

    let l = 0, r = 1e9, ans = -1

    while(l <= r){
        let mid = Math.floor((r+l)/2)

        if(canEscape(mid)){
            ans = mid
            l = mid+1
        }else{
            r = mid-1
        }
    }

    return ans >= 1e9 ? 1e9 : ans
};