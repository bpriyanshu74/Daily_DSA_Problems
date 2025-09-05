/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let ans = []
    let left = 0, right = matrix[0].length
    let top = 0, bottom = matrix.length

    while(left < right && top < bottom){
        // left to right
        for(let i=left; i<right; i++){
            ans.push(matrix[top][i])
        }
        top += 1 // done with top row

        // top to bottom
        for(let i=top; i< bottom; i++){
            ans.push(matrix[i][right-1])
        }   
        right -= 1     

        if(!(left < right && top < bottom)) break

        // right to left
        for(let i = right-1; i> left-1; i--){
            ans.push(matrix[bottom-1][i])
        }
        bottom -= 1

        // bottom to top

        for(let i=bottom-1; i>top-1; i--){
            ans.push(matrix[i][left])
        }
        left += 1
    }

    return ans
    
};