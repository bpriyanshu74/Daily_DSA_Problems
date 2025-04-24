/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let missing = new Array(2100).fill(0)

    for(let i=0; i<arr.length; i++){
        missing[arr[i]] = 1
    }
    let count = 0
    for(let i=1; i<missing.length; i++){
        if(missing[i] == 0) count++
        if(count == k) return i
    }
    
};