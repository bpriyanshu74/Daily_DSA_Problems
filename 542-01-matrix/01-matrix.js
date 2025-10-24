/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    let rows = mat.length, cols = mat[0].length
    let res = new Array(rows).fill().map(() => new Array(cols).fill(Infinity))

    let dir = [[1,0], [0,1], [-1,0], [0,-1]]

    let q = []

    for(let i=0; i<rows; i++){
        for(let j=0; j<cols; j++){
            if(mat[i][j] == 0){
                res[i][j] = 0
                q.push([i,j])
            }
        }
    }
    while(q.length){
        let [x,y] = q.shift()
        for(let [dx,dy] of dir){
            let nx = x+dx, ny = y + dy
            if(nx >= 0 && nx < rows && ny >= 0 && ny < cols){
                if(res[nx][ny] > res[x][y] + 1){
                    res[nx][ny] = res[x][y] + 1
                    q.push([nx, ny])
                }
            }
        }
    }

    return res
};