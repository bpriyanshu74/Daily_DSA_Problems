/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {

    for(let row of matrix){
        let l = 0, r = row.length-1

        while(l <= r){
            let mid = l + Math.floor((r-l)/2)

            if(row[mid] == target) return true
            else if(row[mid] < target){
                l = mid + 1
            }else{
                r = mid-1
            }
        }
    }

    return false

    
};