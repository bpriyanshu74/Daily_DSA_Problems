/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minCapability = function(nums, k) {

    function check(maxcash){
        let robbed = 0, i=0
        while(i < nums.length){
            if(nums[i] <= maxcash){
                 i += 2
                 robbed++
            }else{
                i++
            }

            if(robbed >= k) return true
        }
        return false
    }
    let l = Math.min(...nums), r = Math.max(...nums), ans = r

    while(l <= r){
        let mid = l + Math.floor((r-l)/2)

        if(check(mid)){
            ans = mid
            r = mid-1
        }
        else{
            l = mid+1
        }
    }
    return ans
};