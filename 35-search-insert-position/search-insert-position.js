/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    function bs(arr,target){
        let l =0, r = arr.length-1
        while(l <= r){
            let mid = l + Math.floor((r-l)/2)
            if(arr[mid] >= target){
                r = mid - 1
            }
            else{
                l = mid + 1
            }
        }
        return l
    }
    return bs(nums,target)
    
};