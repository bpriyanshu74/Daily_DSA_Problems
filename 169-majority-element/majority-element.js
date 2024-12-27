/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let majority = Math.floor(nums.length / 2)
    let n = nums.length
    let frequency = new Map()

    for(let num of nums){
        frequency.set(num, (frequency.get(num) || 0) + 1);
    }

    for(let num of nums){
        if(frequency.get(num) > majority){
            return num
        }
    }
    
};