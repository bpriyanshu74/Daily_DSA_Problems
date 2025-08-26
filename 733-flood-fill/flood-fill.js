/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    if(image[sr][sc] == color) return image

    let dir = [[1,0], [0,1], [-1,0], [0,-1]]
    let orgcolor = image[sr][sc]
    let q = [[sr,sc]]
    image[sr][sc] = color

    while(q.length){
        let [x,y] = q.shift()
        for(let [dx,dy] of dir){
            let nx = x + dx,  ny = y + dy

            if(nx >= 0 && nx < image.length && ny >= 0 && ny < image[0].length && image[nx][ny] == orgcolor){
                image[nx][ny] = color
                q.push([nx,ny])
            }
        }
    }

    return image
    
};