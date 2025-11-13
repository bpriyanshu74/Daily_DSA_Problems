/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let ans = [], n = matrix.length, m = matrix[0].length

    let left = 0, top = 0, bottom = n, right = m

    while(left < right && top < bottom){
        //left to right -> increment top (move to next row)
        for(let i=left; i<right; i++){
            ans.push(matrix[top][i])
        }
        top++

        // top to bottom -> decrement right (move towards left)

        for(let i = top; i< bottom; i++){
            ans.push(matrix[i][right-1])
        }
        right--

        if(!(top < bottom && left < right)) break

        // right to left

        for(let i=right-1; i>= left; i--){
            ans.push(matrix[bottom-1][i])
        }
        bottom--

        // bottom to top

        for(let i=bottom-1; i>= top; i--){
            ans.push(matrix[i][left])
        }
        left++
    }

    return ans
};