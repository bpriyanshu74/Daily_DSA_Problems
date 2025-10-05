/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    let n = arr.length
    // general cases
    if(x < arr[0]) return arr.slice(0, k)
    if(x >= arr[arr.length-1]) return arr.slice(arr.length-k)
    if(arr.length == k) return arr

    let l=0, r = arr.length
    while(l < r){
        let mid = l + Math.floor((r-l)/2)

        if(arr[mid] < x) l = mid + 1
        else r = mid
    }

    let left = l, right = l

    while (right - left - 1 < k) {
        if (left < 0) {
            right++;
        } else if (right >= n) {
            left--;
        } else if (Math.abs(arr[left] - x) <= Math.abs(arr[right] - x)) {
            left--;
        } else {
            right++;
        }
    }
    return arr.slice(left+1, right)
};