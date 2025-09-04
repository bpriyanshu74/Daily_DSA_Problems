/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length

    let inittial_sum = 0, org_sum = 0

    for(let i=0; i<= n; i++){
        inittial_sum += i
    }

    for(let num of nums){
        org_sum += num
    }

    return inittial_sum - org_sum
    
};