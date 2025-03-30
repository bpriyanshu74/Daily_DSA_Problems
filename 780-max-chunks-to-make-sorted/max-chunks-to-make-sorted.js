/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function(arr) {
    let cut=0, maxm = arr[0]
    for(let i=0; i<arr.length; i++){
        maxm = Math.max(maxm, arr[i])
        if(maxm == i) cut++
    }
    return cut
    
};