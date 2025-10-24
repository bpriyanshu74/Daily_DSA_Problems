/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    if(color == image[sr][sc]) return image

    let q = [[sr,sc]], org_color = image[sr][sc]
    

    let dir = [[1,0],[0,1], [-1,0], [0,-1]]

    while(q.length){
        for(let i=0; i<q.length; i++){
            let [x,y] = q.shift()
            image[sr][sc] = color
            for(let [dx,dy] of dir){
                let nx = x+dx, ny = y+dy
                if(nx >= 0 && nx < image.length && ny >= 0 && ny < image[0].length && image[nx][ny] == org_color){
                    image[nx][ny] = color
                    q.push([nx,ny])
                }
            }
        }
    }
    return image
    
};