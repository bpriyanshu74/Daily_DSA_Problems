/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    // similar to maxm rectangle in histogram

    // create histogram for each row using prefix sum
    let rows = matrix.length
    let cols = matrix[0].length

    let prefix = new Array(rows).fill().map(() => new Array(cols).fill(0))

    for(let col = 0; col < cols; col++){
        let prefix_sum = 0
        for(let row = 0; row < rows; row++){
            if(matrix[row][col] == '0'){
                prefix_sum = 0
            }
            else{
                prefix_sum += Number(matrix[row][col])
            }
            prefix[row][col] = prefix_sum
        }
    }

    // histogram code
    function histogram(arr){
        let stack = [], maxarea = 0, n=arr.length
        for(let i=0; i<arr.length; i++){
            while(stack.length && arr[i] < arr[stack[stack.length-1]]){
                let height = arr[stack.pop()]
                let width = stack.length == 0 ? i : i - stack[stack.length-1] - 1
                maxarea = Math.max(maxarea, height*width)
            }
            stack.push(i)
        }

        while(stack.length){
            let h = arr[stack.pop()]
            let w = stack.length == 0 ? n : n - stack[stack.length-1] - 1
            maxarea = Math.max(maxarea, h*w)
        }
        return maxarea
    }
    

    // main function 
    let maxm = 0
    for(let row of prefix){
        maxm = Math.max(maxm, histogram(row))
    }

    return maxm
    
};