/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctAverages = function(nums) {
    nums.sort((a,b) => a-b)
    let small,large,average

    let l=0; r = nums.length-1, avg = new Set()
    while(l<r){
        small = nums[l]
        large = nums[r]

        average = (small+large)/2
        avg.add(average)

        l++
        r--
    }

    return avg.size
};