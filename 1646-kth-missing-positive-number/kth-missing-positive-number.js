/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let l = 0, r = arr.length-1
    while(l <= r){
        let mid = l + Math.floor((r-l)/2)
        let missing = arr[mid] - (mid + 1)
        if(missing < k){
            l = mid + 1
        }
        else{
            r = mid - 1
        }
    }
    return l + k
    
};