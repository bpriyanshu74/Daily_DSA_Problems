/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestDistancePair = function(nums, k) {
    // binary search on answers and pair counting


    nums.sort((a,b) => a-b)
    let n = nums.length

    let l = 0, r = nums[n-1] - nums[0]

    // binary search

    while(l < r){
        let mid = l + Math.floor((r-l)/2)

        if(countPairs(mid) >= k){
            r = mid
        }else{
            l = mid + 1
        }
    }   

    function countPairs(d){
        let l = 0, count = 0

        for(let r=0; r<nums.length; r++){
            while(nums[r] - nums[l] > d){
                l++
            }

            count += r-l
        }

        return count
    }

    return l
};