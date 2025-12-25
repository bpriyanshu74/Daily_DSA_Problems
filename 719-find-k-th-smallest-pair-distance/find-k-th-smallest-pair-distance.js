/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestDistancePair = function(nums, k) {
    // binary search on pairs
    nums.sort((a,b) => a-b)

    const countPairs = (dis) => {
        let count = 0, l = 0

        for(let r=0; r<n; r++){
            while(nums[r] - nums[l] > dis) l++

            count += r-l
        }

        return count
    }

    let n = nums.length, l = 0, r = nums[n-1] - nums[0]

    while(l < r){
        let mid = l + Math.floor((r-l) / 2)

        if(countPairs(mid) >= k) r = mid
        else l = mid + 1
    }
    return l
};