/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let ans = new Array(n).fill().map(() => new Array(n).fill(0))

    let left = 0, right = n, top = 0, bottom = n, count = 1

    while(left < right && top < bottom){

        // left to right
        for(let i=left; i<right; i++){
            ans[top][i] = count++
        }
        top++

        // top to bottom
        for(let i=top; i<bottom; i++){
            ans[i][right-1] = count++
        }
        right--

        // boundary check
        if(!(left < right && top < bottom)) break

        // right to left
        for(let i=right-1; i>= left; i--){
            ans[bottom-1][i] = count++
        }
        bottom--

        // bottom to top

        for(let i=bottom-1; i>= top; i--){
            ans[i][left] = count++
        }
        left++
    }
    return ans
};