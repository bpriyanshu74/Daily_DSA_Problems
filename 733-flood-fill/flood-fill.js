/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {

    function dfs(i,j){
        image[i][j] = color
        for(let [di, dj] of dir){
            let ni = i + di, nj = j + dj
            if(ni >= 0 && ni < image.length 
                && nj >= 0 && nj < image[0].length && image[ni][nj] == org_color)
                {
                    dfs(ni,nj)
                }
        }
    }
    if(color == image[sr][sc]) return image
    let dir = [[1,0], [0,1], [-1,0], [0,-1]]
    let org_color = image[sr][sc]

    dfs(sr,sc)

    return image
};