/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    function first(arr,target){
        let l = 0, r = arr.length-1, first = -1
        while(l <= r){
            let mid = l + Math.floor((r-l)/2)
            if(arr[mid] >= target){
                first = mid
                r = mid -1
            }
            else{
                l = mid + 1
            }
            // else{
            //     r = mid - 1
            // }
        }
        return arr[first] == target ? first : -1
    }
    function last(arr,target){
        let l=0, r = arr.length-1, last = -1
        while(l <= r){
            let mid = l + Math.floor((r-l)/2)
            if(arr[mid] <= target){
                last = mid
                l = mid + 1
            }
            else{
                r = mid - 1
            }
        }

        return arr[last] !== -1 ? last : arr.length - 1
    }

    let f = first(nums, target)
    if(f == -1) return [-1,-1]
    else{
        return [f, last(nums, target)]
    }
    
};