/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    // function find(arr,ele){
    //     for(let i=0; i< arr.length; i++){
    //         if(ele == arr[i]){
    //             return true
    //         }
    //     }
    //     return false
    // }

    let rowset = new Set(), colset = new Set()
    for(let row=0; row< matrix.length; row++){
        for(let col = 0; col < matrix[row].length; col++){
            if(matrix[row][col] == 0){
                rowset.add(row)
                colset.add(col)
            }
        }
    }

    for(let i=0; i<matrix.length; i++){
        for(let j=0; j<matrix[i].length; j++){
            if(rowset.has(i) || colset.has(j)){
                matrix[i][j] = 0
            }
        }
    }

    return matrix
    
    
};