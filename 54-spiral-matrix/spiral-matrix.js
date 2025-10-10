/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let order = []
    let m = matrix.length, n = matrix[0].length

    let left = 0, right = n
    let top = 0, bottom = m

    while(left < right && top < bottom){
        // left to right
        let i=left
        while(i < right){
            order.push(matrix[top][i])
            i++
        }
        top++
        

        // top to bottom
        i = top
        while(i < bottom){
            order.push(matrix[i][right-1])
            i++
        }
        right--
        // check 
        if(!(left < right && top < bottom)) break
        // right to left
        i = right - 1
        while(i > left-1){
            order.push(matrix[bottom-1][i])
            i--
        }
        bottom--

        

        i = bottom-1
        while(i > top-1){
            order.push(matrix[i][left])
            i--
        }
        left++
    }

    return order
    
};