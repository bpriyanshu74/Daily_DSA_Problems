/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    let m = mat.length, n = mat[0].length
    let res = new Array(m).fill().map(() => new Array(n).fill(Infinity))
    let dir = [[1,0], [0,1], [-1,0], [0,-1]]
    let q = []

    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(mat[i][j] == 0){
                res[i][j] = 0
                q.push([i,j])
            }
        }
    }

    while(q.length){
        let [x,y] = q.shift()

        for(let [dx,dy] of dir){
            let nx = x+dx, ny = y+dy

            if(nx >= 0 && nx < m && ny >= 0 && ny < n){
                if(res[nx][ny] > res[x][y] + 1){
                    res[nx][ny]  = res[x][y] + 1
                    q.push([nx,ny])
                }
            }
        }
    }

    return res
};