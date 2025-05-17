/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctAverages = function(nums) {
    nums.sort((a,b) => a-b)
    // nlogn
    // 0,1,3,4,4,5

    let l=0; r = nums.length-1, avg = new Set()
    while(l<r){
        let small = nums[l]
        let large = nums[r]

        let average = (small+large)/2
        avg.add(average)

        l++
        r--
    }

    return avg.size
};