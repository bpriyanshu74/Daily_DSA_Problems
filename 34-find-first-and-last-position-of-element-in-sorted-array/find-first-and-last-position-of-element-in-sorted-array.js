/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    function lowerbound(arr,target){
        let l=0, r = arr.length-1, ans = -1
        while(l <= r){
            let mid = l + Math.floor((r-l)/2)
            if(arr[mid] >= target){
                ans = mid
                r = mid - 1
            }
            else{
                l = mid + 1
            }
        }
        return arr[ans] === target ? ans : -1
    }
    function upperbound(arr,target){
        let l=0, r = arr.length-1, ans = -1
        while(l <= r){
            let mid = l + Math.floor((r-l)/2)
            if(arr[mid] > target){
                ans = mid
                r = mid - 1
            }
            else{
                l = mid + 1
            }
        }
        let uindex = ans !== -1 ? ans - 1: arr.length - 1
        if(arr[uindex] == target) return uindex
        return -1
    }

    return [lowerbound(nums,target), upperbound(nums,target)]
    
};