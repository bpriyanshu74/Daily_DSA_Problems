/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let freq = new Map()

    for(let num of nums){
        freq.set(num, (freq.get(num) || 0) + 1)
    }

    let sorted = Array.from(freq).sort((a,b) => b[1] - a[1]), ans = []

    for(let i=0; i<k; i++){
        ans.push(Number(sorted[i][0]))
    }

    return ans
};