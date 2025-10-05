/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    let l = 0, r = arr.length-1

    while(r-l >= k){
        if(Math.abs(arr[l]-x) > Math.abs(arr[r]-x)){
            l++
        }else{
            r--
        }
    }
    return arr.slice(l, l+k)
};