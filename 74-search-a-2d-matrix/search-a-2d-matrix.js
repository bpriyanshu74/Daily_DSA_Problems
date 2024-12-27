/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {

    function bsearch(arr, target){
        let low = 0, high = arr.length - 1
        while(low <= high){
            let mid = Math.floor((low +high) / 2)

            if(target == arr[mid]) return true
            if(target < arr[mid]){
                high = mid - 1
            }
            if(target > arr[mid]){
                low = mid+1
            }
        }
        return false
    } 
    let rows = matrix.length
    let cols = matrix[0].length

    for(let i=0; i<rows; i++){
        let low = matrix[i][0]
        let high = matrix[i][cols-1]

        if(target >= low && target <= high){
            return bsearch(matrix[i], target)
        }
    }
    return false
    
};